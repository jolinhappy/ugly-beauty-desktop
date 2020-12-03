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
          <div class="desktop-app-title">Network Neighborhood</div>
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
        <div class="desktop-app" @dblclick="openJolinProfileWindow">
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
    <!-- event window -->
    <EventWindow v-show="eventWindow" @close="closeEventWindow" />
    <JolinProfileWindow
      v-show="jolinProfileWindow"
      @close="closeJolinProfileWindow"
    />
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
    <!-- wallpaper -->
    <div
      class="window-wrap wallpaper-change-window"
      v-show="wallpaperChangeWindow"
    >
      <div class="window-header">
        <div class="window-title">Wallpaper Change</div>
        <div class="cross-icon" @click="closeWallpaperWindow">
          <font-awesome-icon icon="times" class="close-icon" />
        </div>
      </div>
      <div class="wallpaper-preview-wrap">
        <div class="wallpaper-preview">
          <div class="wallpaper-preview-screen">
            <img
              :src="wallpapersUrl"
              alt="wallpaper-preview"
              class="preview-image"
            />
          </div>
        </div>
      </div>
      <div class="wallpaper-list-wrap">
        <div
          class="wallpaper-item"
          v-for="wallpaper in wallpapers"
          :key="wallpaper.id"
          @click="changeWallpaper(wallpaper.id)"
        >
          <div class="wallpaper-image-wrap">
            <img :src="wallpaper.url" alt="wallpaper" class="wallpaper-image" />
          </div>
          <div class="wallpaper-title">{{ wallpaper.title }}</div>
        </div>
      </div>
      <div class="confirm-button-wrap">
        <div class="confirm-button" @click="comfirmWallpaper">套用</div>
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
          <div class="menu-item-title" @click="openEventWindow">
            Jolin大紀事
          </div>
        </div>
        <div class="menu-item" @click="openJolinProfileWindow">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=17"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">蔡依林</div>
        </div>
        <div class="menu-item" @click="openWallpaperWindow">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=29"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Wallpaper Change</div>
        </div>
        <div class="menu-item">
          <div class="menu-item-icon">
            <img
              src="https://picsum.photos/20/20/?random=24"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Network Neighborhood</div>
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
import EventWindow from "../components/EventWindow";
import JolinProfileWindow from "../components/JolinProfileWindow";
export default {
  name: "Home",
  components: {
    EventWindow,
    JolinProfileWindow,
  },
  data() {
    return {
      active: false,
      menuDisplay: false,
      eventWindow: false,
      musicWindow: true,
      jolinProfileWindow: false,
      wallpaperChangeWindow: false,
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
      defaultMusic: [],
      currentMusicName: "紅衣女孩",
      currentMusicSrc:
        "http://s80.youtaker.com/other/2019/3-25/mp3979989727942cfae287494da9815b974f61962c5780.mp3",
      listToggle: false,
      progressData: {},
      wallpapers: [
        {
          id: uuidv4(),
          url:
            "https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg",
          title: "ugly beaty",
        },
        {
          id: uuidv4(),
          url: "https://i.ytimg.com/vi/-wIHmPAvMBo/maxresdefault.jpg",
          title: "怪美的",
        },

        {
          id: uuidv4(),
          url:
            "https://i.pinimg.com/originals/bb/3f/43/bb3f4300b07c1d7fe05e22acb3e7ebc5.jpg",
          title: "紅衣女孩",
        },
        {
          id: uuidv4(),
          url: "https://i.ytimg.com/vi/w_JBF4CJ-9M/maxresdefault.jpg",
          title: "消極掰",
        },
      ],
      wallpapersUrl:
        "https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg",
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const NowDate = new Date();
      this.hour = NowDate.getHours();
      this.minute = NowDate.getMinutes();
      this.second = NowDate.getSeconds();
    }, 1000);
    this.getCurrentMusic();
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
      this.menuDisplay = false;
    },
    closeEventWindow() {
      this.eventWindow = false;
    },
    openMusicWindow() {
      this.musicWindow = true;
      this.src = this.musicList[0].src;
      const { audio } = this.$refs;
      audio.play();
    },
    closeMusicWindow() {
      this.musicWindow = false;
      const { audio } = this.$refs;
      audio.pause();
      audio.currentTime = 0;
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
      this.defaultMusic = this.musicList;
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
    changeWallpaper(id) {
      this.wallpapers.map((item) => {
        if (item.id === id) {
          this.wallpapersUrl = item.url;
        }
      });
    },
    comfirmWallpaper() {
      this.$emit("handleWallpaperChange", this.wallpapersUrl);
    },
    closeWallpaperWindow() {
      this.wallpaperChangeWindow = false;
    },
    openWallpaperWindow() {
      this.wallpaperChangeWindow = true;
      this.menuDisplay = !this.menuDisplay;
      this.active = !this.active;
    },
    openJolinProfileWindow() {
      this.jolinProfileWindow = true;
      this.menuDisplay = false;
      this.active = false;
    },
    closeJolinProfileWindow() {
      this.jolinProfileWindow = false;
    },
  },
  computed: {
    percent() {
      return this.current / this.duration;
    },
  },
  filters: {
    hourFilter(value) {
      let afternoonHour = "";
      let morningHour = "";
      if (value > 12) {
        afternoonHour = value - 12;
        if (afternoonHour < 10) {
          afternoonHour = "下午 " + "0" + afternoonHour;
        } else if (afternoonHour === 12) {
          afternoonHour = "下午 " + value;
        } else {
          return "下午 " + afternoonHour;
        }
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
  margin: 0;
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
  height: 360px;
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

/* music player */
.music-player-window {
  position: absolute;
  top: 300px;
  left: 5%;
  width: 400px;
  height: 150px;
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
  /* border: 1px solid var(--blood-red); */
  /* border-radius: 2px; */
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

/* wallpaper */
.wallpaper-change-window {
  position: absolute;
  top: 50px;
  right: 10%;
  width: 400px;
  height: 415px;
}
.wallpaper-preview-wrap {
  width: 100%;
  height: 150px;
}
.wallpaper-preview {
  width: 150px;
  height: 120px;
  border-top: 2.5px solid var(--light-red);
  border-left: 2.5px solid var(--light-red);
  border-right: 2.5px solid var(--dark-red);
  border-bottom: 2.5px solid var(--dark-red);
  border-radius: 5px;
  margin: 20px auto;
}
.wallpaper-preview-screen {
  width: 120px;
  height: 90px;
  border-top: 1px solid var(--dark-red);
  border-left: 1px solid var(--dark-red);
  border-right: 1px solid var(--light-red);
  border-bottom: 1px solid var(--light-red);
  border-radius: 5px;
  margin: 10px auto 10px;
  background: black;
}
.preview-image {
  width: 120px;
  height: 90px;
  object-fit: cover;
}
.wallpaper-list-wrap {
  width: 370px;
  height: 150px;
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
  margin: 0px auto 10px;
  background: white;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}
.wallpaper-item {
  text-align: center;
  cursor: pointer;
}
.wallpaper-image-wrap {
  margin: 35px 20px 5px 25px;
}
.wallpaper-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
.confirm-button-wrap {
  width: 370px;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
}
.confirm-button {
  width: 80px;
  height: 25px;
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  text-align: center;
  line-height: 25px;
  margin-top: 5px;
  cursor: default;
}
.confirm-button:hover {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
}

.active {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
  color: var(--blood-red);
}
</style>

