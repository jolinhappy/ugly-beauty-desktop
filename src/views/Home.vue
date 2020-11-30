<template>
  <div class="desktop">
    <div class="desktop-app-section" @click="menuClose">
      <div class="desktop-app-group">
        <div class="desktop-app">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=18"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">My Computer</div>
        </div>
        <div class="desktop-app">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=24"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">網路上的芳鄰</div>
        </div>
      </div>
      <div class="desktop-app-group">
        <div class="desktop-app" @dblclick="openMusicWindow">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=1"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">Music Player</div>
        </div>
        <div class="desktop-app" @dblclick="openEventWindow">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=4"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div
            class="desktop-app-title"
            :class="{ clicked: eventWindow === true }"
          >
            Jolin大紀事
          </div>
        </div>
        <div class="desktop-app">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=17"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">蔡依林</div>
        </div>
      </div>
    </div>

    <div class="window-wrap event-window" v-show="eventWindow">
      <div class="window-header">
        <div class="window-title">Jolin大紀事</div>
        <div class="cross-icon" @click="closeEventWindow">
          <font-awesome-icon icon="times" class="close-icon" />
        </div>
      </div>
      <div class="window-content">
        <div class="content-tite">Jolin大紀事</div>
        <div class="history-content">
          <div class="year">1999年</div>
          <ul class="history-list">
            <li class="history-event">發行首張個人專輯«1019»</li>
          </ul>
          <div class="year">2000年</div>
          <ul class="history-list">
            <li class="history-event">同年4月發行專輯«Don't Stop»</li>
            <li class="history-event">同年12月發行第3張專輯«Show Your Love»</li>
          </ul>
          <div class="year">2001年</div>
          <ul class="history-list">
            <li class="history-event">7月發行專輯«Lucky Number»</li>
          </ul>
          <div class="year">2001年</div>
          <ul class="history-list">
            <li class="history-event">7月發行專輯«Lucky Number»</li>
          </ul>
          <div class="year">2001年</div>
          <ul class="history-list">
            <li class="history-event">7月發行專輯«Lucky Number»</li>
          </ul>
          <div class="year">2001年</div>
          <ul class="history-list">
            <li class="history-event">7月發行專輯«Lucky Number»</li>
          </ul>
          <div class="year">2001年</div>
          <ul class="history-list">
            <li class="history-event">7月發行專輯«Lucky Number»</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- music audio -->
    <div class="window-wrap music-player-window" v-show="musicWindow">
      <div class="window-header">
        <div class="window-title">Music Player</div>
        <div class="cross-icon" @click="closeMusicWindow">
          <font-awesome-icon icon="times" class="close-icon" />
        </div>
      </div>
      <audio
        id="music1"
        :src="src"
        controls
        hidden
        autoplay
        ref="audio"
        @canplay="getDurationTime"
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
          <div class="music-name">{{ musicName }}</div>
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
        <div class="music-player-progress-main-bar">
          <div class="music-player-progress-bar"></div>
          <div class="music-player-progress-button-wrap">
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
          <div class="music-player-volume-control">
            <div class="volume-control-bar">
              <div class="volume-control-button-wrap">
                <div class="volum-control button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desktop-footer">
      <div class="footer-left" @click="clickStart" :class="{ active }">
        <div class="footer-start-icon">
          <img
            src="https://picsum.photos/20/20/?random=30"
            class="footer-icon-img"
          />
        </div>
        <div class="footer-start-text">開始</div>
      </div>
      <div class="footer-menu" v-show="menuDisplay">
        <div class="menu-item">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=1"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Music Player</div>
        </div>
        <div class="menu-item">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=4"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Jolin大紀事</div>
        </div>
        <div class="menu-item">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=17"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">蔡依林</div>
        </div>
        <div class="menu-item">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=24"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">網路上的芳鄰</div>
        </div>
        <div class="menu-item">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=18"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">My Computer</div>
        </div>
      </div>
      <div class="footer-right">
        <!-- <div class="footer-skin-change">變更桌面</div> -->
        <div class="footer-time">
          {{ hour | hourFilter }}:{{ minute | minuteFilter }}:{{
            second | secondFilter
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Home",
  data() {
    return {
      active: false,
      menuDisplay: false,
      eventWindow: false,
      musicWindow: true,
      play: false,
      pause: false,
      stop: false,
      hour: null,
      minute: null,
      second: null,
      volume: true,
      duration: "",
      current: "",
      musicList: [
        {
          id: uuidv4(),
          name: "紅衣女孩",
          src:
            "http://s80.youtaker.com/other/2019/3-25/mp3979989727942cfae287494da9815b974f61962c5780.mp3",
        },
        {
          id: uuidv4(),
          name: "怪美的",
          src:
            "http://s85.youtaker.com/other/2019/12-5/mp33874236080c025e95ca134a93ac2ff393fc09b28985.mp3",
        },
        {
          id: uuidv4(),
          name: "玫瑰少年",
          src:
            "http://s85.youtaker.com/other/2019/12-1/mp3559071610fe67a557a05a43d09c4c68fb7530d1dc85.mp3",
        },
      ],
      musicName: "紅衣女孩",
      src:
        "http://s80.youtaker.com/other/2019/3-25/mp3979989727942cfae287494da9815b974f61962c5780.mp3",
      listToggle: false,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const NowDate = new Date();
      this.hour = NowDate.getHours();
      this.minute = NowDate.getMinutes();
      this.second = NowDate.getSeconds();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    clickStart() {
      this.active = !this.active;
      this.menuDisplay = !this.menuDisplay;
    },
    menuClose() {
      if (this.menuDisplay) {
        this.menuDisplay = !this.menuDisplay;
        this.active = !this.active;
      } else return;
    },
    openEventWindow() {
      this.eventWindow = true;
    },
    closeEventWindow() {
      this.eventWindow = false;
    },
    openMusicWindow() {
      this.musicWindow = true;
      this.src = this.musicList[0].src;
    },
    closeMusicWindow() {
      this.musicWindow = false;
      this.src = "";
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
      console.log(this.$refs);
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
          this.musicName = music.name;
          this.src = music.src;
          this.listToggle = false;
        }
      });
    },
  },
  filters: {
    hourFilter(value) {
      let afternoonHour = "";
      let morningHour = "";
      if (value > 12) {
        afternoonHour = "下午 " + (value - 12);
        if (afternoonHour < 10) {
          afternoonHour = "下午 " + "0" + afternoonHour;
        }
        return afternoonHour;
      } else if (value === 12) {
        afternoonHour = "下午 " + value;
      } else if (value === 24) {
        morningHour = "上午 " + value - 12;
      } else if (value < 10) {
        morningHour = "上午 " + "0" + value;
      } else {
        morningHour = "上午 " + value;
      }
      return value > 12 ? afternoonHour : morningHour;
    },
    minuteFilter(value) {
      return value >= 10 ? value : "0" + value;
    },
    secondFilter(value) {
      return value >= 10 ? value : "0" + value;
    },
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
.desktop {
  width: 100%;
  height: 100%;
}
.desktop-app-section {
  display: flex;
  margin: 50px 40px;
  height: 90vh;
}
.desktop-app-group {
  margin-right: 20px;
}
.desktop-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.desktop-app-title {
  font-size: 12px;
  color: var(--white);
  margin-top: 8px;
  max-width: 70px;
  text-align: center;
}
.clicked {
  background: var(--main-red);
}

.desktop-footer {
  width: 100%;
  height: 45px;
  background: var(--main-red);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  border-top: 1.5px solid var(--light-red);
  z-index: 1;
}

.footer-left {
  margin-left: 10px;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  cursor: default;
}
.footer-start-icon {
  margin-top: 4px;
}
.footer-start-text {
  margin-left: 8px;
  font-size: 20px;
}
.footer-menu {
  position: absolute;
  bottom: 45.7px;
  width: 280px;
  height: 300px;
  background: var(--main-red);
  border-top: 2px solid var(--light-red);
  border-right: 2px solid var(--middle-red);
  border-bottom: 2px solid var(--middle-red);
  z-index: 5;
}
.menu-item {
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: default;
}
.menu-item:hover {
  background: pink;
  color: var(--blood-red);
}
.menu-item-icon {
  margin-top: 2px;
  margin-left: 30px;
}
.menu-item-title {
  line-height: 70px;
  margin-left: 15px;
}

.footer-right {
  margin-right: 10px;
  display: flex;
  justify-content: center;
  line-height: 30px;
  width: 170px;
  height: 30px;
  border-top: 0.5px solid var(--dark-red);
  border-left: 0.5px solid var(--dark-red);
  border-right: 0.5px solid var(--dark-red);
  border-bottom: 0.5px solid var(--light-red);
}
.footer-skin-change {
  margin-right: 10px;
}

/* windows share */
.window-header {
  width: 400.5px;
  height: 33px;
  background: var(--blood-red);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, #960820 14%, #de0025 97%);
}
.cross-icon {
  margin-right: 6px;
  width: 20px;
  height: 20px;
  background: var(--main-red);
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  display: flex;
}
.cross-icon:hover {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
}
.close-icon {
  margin: auto;
}

/* event window */
.event-window {
  position: absolute;
  top: 50px;
  right: 50%;
  width: 400px;
  height: 350px;
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  background: var(--main-red);
}

.window-title {
  margin-left: 10px;
  color: var(--white);
}
.window-content {
  width: 380px;
  height: 300px;
  background: var(--white);
  margin: 10px auto;
  overflow-y: scroll;
  scrollbar-arrow-color: var(--blood-red);
}
.event-window .window-content::-webkit-scrollbar {
  background: var(--light-red);
  width: 20px;
}
.event-window .window-content::-webkit-scrollbar-thumb {
  background: var(--main-red);
  border-top: 1.5px solid var(--light-red);
  border-right: 1px solid var(--dark-red);
  border-bottom: 1.4px solid var(--middle-red);
  height: 3px;
}
.content-title {
  text-align: center;
  width: 100%;
}
.history-content {
  margin-left: 15px;
}
.history-event {
  margin-left: 20px;
}

/* music player */
.music-player-window {
  position: absolute;
  top: 300px;
  left: 5%;
  width: 400px;
  height: 160px;
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  background: var(--main-red);
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
  height: 30px;
  background: var(--text-black);
  margin: 5px auto;
  display: flex;
}
.music-player-progress-main-bar {
  width: 370px;
  height: 5.5px;
  background: #6e6e6e;
  border-radius: 3px;
  margin: auto;
}
.music-player-progress-button-wrap {
  width: 30px;
  height: 30px;
  margin-top: -12px;
}
.progress-botton {
  width: 13.5px;
  height: 13.5px;
  border-radius: 50%;
  background: linear-gradient(0deg, #960820 14%, #de0025 97%);
  margin-top: 8px;
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
  border: 1px solid var(--blood-red);
  border-radius: 2px;
  margin-right: 8px;
}
.music-control-button {
  width: 40px;
  height: 36px;
  margin: auto;
  line-height: 36px;
  text-align: center;
  border-top: 1px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
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
  background: chartreuse;
  width: 90px;
  height: 43px;
  margin-left: 20px;
}
.volume-control-bar {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 40px 75px;
  border-color: transparent transparent red transparent;
}

.active {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
}
</style>

