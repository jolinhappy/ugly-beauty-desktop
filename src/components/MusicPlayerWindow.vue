<template>
  <div
    class="window-wrap music-player-window"
    @mousedown="clickWindow"
    @mousemove="moveWindow"
    @mouseup="finishMove"
    ref="window"
  >
    <div class="window-header">
      <div class="window-title">Music Player</div>
      <div class="cross-icon" @click="handleCloseWindow">
        <font-awesome-icon icon="times" class="close-icon" />
      </div>
    </div>
    <audio
      id="music1"
      :src="currentMusicSrc"
      controls
      hidden
      autoplay
      ref="audio"
      @canplay="getDurationTime"
      @ended="autoPlay"
    >
      Your browser does not support
    </audio>
    <div class="music-option">
      <input
        type="checkbox"
        id="music-list-toggle"
        class="music-list-toggle"
        v-model="listToggle"
      />
      <label for="music-list-toggle" class="music-list-toggle-label">
        <div class="music-name">{{ currentMusicName }}</div>
        <font-awesome-icon icon="caret-down" class="music-option-button" />
      </label>
      <div class="music-list">
        <div
          class="music-item"
          v-for="music in musicList"
          :key="music.id"
          @click="changeMusic(music.id)"
        >
          {{ music.name }}
        </div>
      </div>
    </div>
    <div class="music-player-progress">
      <div class="music-player-progress-main-bar" ref="bar">
        <div class="music-player-progress-bar" ref="progress"></div>
        <div
          class="music-player-progress-button-wrap"
          ref="progressBtn"
          @mousedown="progressTouch"
          @mousemove="progressTouchMove"
          @mouseup="progressTouchEnd"
        >
          <div class="progress-botton"></div>
        </div>
      </div>
    </div>
    <div class="music-player-controler">
      <div class="music-control-tools">
        <div
          class="music-control-button music-play"
          @click="playMusic"
          :class="{ active: play === true }"
        >
          <font-awesome-icon icon="play" />
        </div>
        <div
          class="music-control-button music-pause"
          @click="pauseMusic"
          :class="{ active: pause === true }"
        >
          <font-awesome-icon icon="pause" />
        </div>
        <div
          class="music-control-button music-stop"
          @click="stopMusic"
          :class="{ active: stop === true }"
        >
          <font-awesome-icon icon="stop" />
        </div>
      </div>
      <div class="music-duration">
        <div class="music-duration-time">
          {{ current | musicTimeFilter }} /
          {{ duration | musicTimeFilter }}
        </div>
      </div>
      <div class="music-player-volume">
        <div class="music-player-volume-icon" @click="muteMusic">
          <font-awesome-icon icon="volume-up" v-if="volume" />
          <font-awesome-icon icon="volume-off" v-else />
        </div>
        <!-- <div class="music-player-volume-control">
            <div class="volume-control-bar">
              <div class="volume-control-button-wrap">
                <div class="volum-control button"></div>
              </div>
            </div>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlayerWindow",
  props: {
    musicList: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.getCurrentMusic();
  },
  watch: {
    percent(newValue) {
      if (newValue >= 0 && !this.progressData.start) {
        const barWidth = this.$refs.bar.clientWidth - 9;
        const offsetWidth = barWidth * newValue;
        this.$refs.progress.style.width = `${offsetWidth}px`;
        this.$refs.progressBtn.style.transform = `translateX(${offsetWidth}px)`;
      }
    },
  },
  data() {
    return {
      defaultMusic: [],
      currentMusicName: "紅衣女孩",
      currentMusicSrc:
        "http://s80.youtaker.com/other/2019/3-25/mp3979989727942cfae287494da9815b974f61962c5780.mp3",
      play: false,
      pause: false,
      stop: false,
      progressData: {},
      listToggle: false,
      volume: true,
      duration: "",
      current: "",
      active: false,
      musicWindow: true,
      windowMove: {},
    };
  },
  methods: {
    handleCloseWindow() {
      const { audio } = this.$refs;
      audio.pause();
      audio.currentTime = 0;
      this.$emit("close");
    },
    playMusic() {
      const { audio } = this.$refs;
      audio.play();
      this.play = true;
      this.stop = false;
      this.pause = false;
      this.durationTime = Number(parseInt(audio.duration));
    },
    pauseMusic() {
      const { audio } = this.$refs;
      audio.pause();
      this.play = false;
      this.pause = true;
      this.stop = false;
    },
    stopMusic() {
      const { audio } = this.$refs;
      audio.pause();
      audio.currentTime = 0;
      this.play = false;
      this.pause = false;
      this.stop = true;
    },
    muteMusic() {
      const { audio } = this.$refs;
      this.volume = !this.volume;
      audio.volume = this.volume;
    },
    getDurationTime() {
      const { audio } = this.$refs;
      this.duration = audio.duration;
      this.getCurrentTime();
    },
    getCurrentTime() {
      const timer = setInterval(() => {
        this.current = parseInt(this.$refs.audio.currentTime);
      }, 1000);
      console.log(timer);
    },
    changeMusic(id) {
      this.musicList.map((music) => {
        if (music.id === id) {
          this.currentMusicName = music.name;
          this.currentMusicSrc = music.src;
          this.listToggle = false;
        }
      });
    },
    getCurrentMusic() {
      this.defaultMusic = [...this.musicList];
    },
    autoPlay() {
      const musicItem = this.defaultMusic.shift();
      const { audio } = this.$refs;
      if (this.currentMusicSrc === musicItem.src) {
        this.defaultMusic.push(musicItem);
        const newPlayMusic = this.defaultMusic.shift();
        this.currentMusicSrc = newPlayMusic.src;
        this.currentMusicName = newPlayMusic.name;
        this.defaultMusic.push(newPlayMusic);
      } else {
        this.currentMusicSrc = musicItem.src;
        this.currentMusicName = musicItem.name;
        this.defaultMusic.push(musicItem);
      }
      audio.play();
    },
    progressTouch(e) {
      this.progressData.start = true;
      //開始位置
      this.progressData.startX = e.clientX;
      //目前已經經過的進度條
      this.progressData.movedProgress = this.$refs.progress.clientWidth;
    },
    progressTouchMove(e) {
      if (!this.progressData.start) {
        return;
      }
      //增加的移動距離(現在拖動到的位置-開始位置)
      const offsetValue = e.clientX - this.progressData.startX;
      //總偏移量
      const offsetWidth = Math.min(
        this.$refs.bar.clientWidth - 9,
        Math.max(0, this.progressData.movedProgress + offsetValue)
      );
      this.$refs.progress.style.width = `${offsetWidth}px`;
      this.$refs.progressBtn.style.transform = `translateX(${offsetWidth}px)`;
    },
    progressTouchEnd() {
      this.changePercent();
      this.progressData.start = false;
    },
    changePercent() {
      const barWidth = this.$refs.bar.clientWidth - 9;
      //用當前拖曳移動到的寬度/總寬
      const newPercent = this.$refs.progress.clientWidth / barWidth;
      this.$refs.audio.currentTime = this.duration * newPercent;
    },

    clickWindow(e) {
      // 紀錄視窗位置及滑鼠位置
      const className = e.target.className;
      const { window } = this.$refs;
      if (className === "window-header") {
        this.windowMove.start = true;
        this.windowMove.currentTop = window.offsetTop;
        this.windowMove.currentLeft = window.offsetLeft;
        this.windowMove.mouseX = e.clientX;
        this.windowMove.mouseY = e.clientY;
      }
    },
    moveWindow(e) {
      if (!this.windowMove.start) {
        return;
      }
      const { window } = this.$refs;
      const currentMouseX = e.clientX;
      const currentMouseY = e.clientY;
      //水平&垂直增加或減少的移動距離(正數或負數)
      const offsetXvalue = currentMouseX - this.windowMove.mouseX;
      const offsetYvalue = currentMouseY - this.windowMove.mouseY;
      //總偏移
      const totalOffsetX = this.windowMove.currentLeft + offsetXvalue;
      const totalOffsetY = this.windowMove.currentTop + offsetYvalue;
      window.style.left = `${totalOffsetX}px`;
      window.style.top = `${totalOffsetY}px`;
    },
    finishMove() {
      this.windowMove.start = false;
    },
  },
  computed: {
    percent() {
      return this.current / this.duration;
    },
  },
  filters: {
    musicTimeFilter(value) {
      const musicTime = parseInt(value);
      let musicMinute = Math.floor(musicTime / 60);
      let musicSecond = musicTime % 60;
      if (musicMinute < 10) {
        musicMinute = "0" + musicMinute;
      }

      if (musicSecond < 10) {
        musicSecond = "0" + musicSecond;
      }

      return !value ? "00:00" : musicMinute + ":" + musicSecond;
    },
  },
};
</script>

<style scoped>
.music-player-window {
  position: absolute;
  top: 300px;
  left: 5%;
  width: 400px;
  height: 150px;
  z-index: 0;
}
.window-title {
  margin-left: 10px;
  color: var(--white);
}
.music-option {
  width: 380px;
  height: 32px;
  position: relative;
  margin: 5px auto;
  border: 1px solid var(--blood-red);
  border-radius: 2px;
}
.music-name {
  margin-left: 17.6px;
}
.music-list-toggle-label {
  width: 380px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.music-option-button {
  margin-right: 20px;
}
.music-list-toggle {
  display: none;
}
.music-list-toggle:checked ~ .music-list {
  display: block;
}
.music-list {
  position: absolute;
  top: 32.5px;
  width: 378px;
  height: auto;
  background: var(--main-red);
  border-top: 1px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  display: none;
  z-index: 3;
}
.music-item {
  padding: 10px 0px 10px 15px;
  width: 362px;
  height: 20px;
}
.music-item:hover {
  background: pink;
  color: var(--blood-red);
  cursor: default;
}

.music-player-progress {
  width: 380px;
  height: 20px;
  /* background: var(--text-black); */
  margin: auto;
  display: flex;
}
.music-player-progress-main-bar {
  width: 370px;
  height: 6.5px;
  margin: auto;
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
  position: relative;
}
.music-player-progress-bar {
  height: 100%;
  background: var(--blood-red);
  position: absolute;
  left: 0;
}
.music-player-progress-button-wrap {
  width: 30px;
  height: 30px;
  margin-top: -12px;
  position: relative;
}
.progress-botton {
  width: 9px;
  height: 15px;
  background: var(--main-red);
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  margin-top: 6px;
  position: absolute;
}

.music-player-controler {
  width: 380px;
  height: 43px;
  margin: 5px auto;
  display: flex;
  align-items: center;
}
.music-control-tools {
  display: flex;
  width: 145px;
  height: 43px;
  align-items: center;
  margin-right: 8px;
}
.music-control-button {
  width: 40px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
  color: var(--light-red);
}
.music-duration {
  width: 115px;
  height: 43px;
}
.music-duration-time {
  text-align: center;
  line-height: 43px;
  font-size: 17px;
}
.music-player-volume {
  width: 60px;
  height: 43px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.music-player-volume-icon {
  margin-right: 10px;
}
/* .volume-control-bar {
  width: 0;
  height: 0;
  margin-bottom: 15px;
  border-style: solid;
  border-width: 0 0 22px 60px;
  border-color: transparent transparent red transparent;
}
.volume-control-bar::before {
  content: "";
  display: flex;
  margin-left: -59.5px;
  height: 22px;
  width: 58px;
  border-bottom: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--light-red);
}
.volume-control-bar::after {
  display: absolute;
  top: -20px;
  right: 60%;
  content: "66iii";
  height: 50px;
  background: linear-gradient(
    -25deg,
    transparent 44.5%,
    var(--light-red) 49.5%,
    var(--light-red) 50.5%,
    transparent 50.5%
  );
} */

.active {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
  color: var(--blood-red);
}
</style>