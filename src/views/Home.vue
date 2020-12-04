<template>
  <div class="desktop">
    <div class="desktop-app-section" @click="menuClose">
      <div class="desktop-app-group">
        <div class="desktop-app" @dblclick="openMyComputerWindow">
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
    <!-- music audio -->
    <MusicPlayerWindow
      v-show="musicWindow"
      :music-list="musicList"
      ref="player"
      @close="closeMusicWindow"
      :max-z-index="maxZIndex"
      @setMaxZIndex="handleSet"
    />
    <!-- event window -->
    <EventWindow
      v-show="eventWindow"
      @close="closeEventWindow"
      :max-z-index="maxZIndex"
      @setMaxZIndex="handleSet"
      ref="event"
    />
    <JolinProfileWindow
      v-show="jolinProfileWindow"
      @close="closeJolinProfileWindow"
      :max-z-index="maxZIndex"
      ref="profile"
    />
    <MyComputerWindow
      v-show="myComputerWindow"
      @close="closeMyComputerWindow"
      :max-z-index="maxZIndex"
      ref="computer"
    />
    <!-- wallpaper -->
    <WallpaperWindow
      :wallpapers="wallpapers"
      v-show="wallpaperChangeWindow"
      @close="closeWallpaperWindow"
      @emitToHomePage="handleWallpaperChange"
      :max-z-index="maxZIndex"
      ref="wallpaper"
    />
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
          <div class="menu-item-title" @click="openMusicWindow">
            Music Player
          </div>
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
        <div class="menu-item" @click="openMyComputerWindow">
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
import MyComputerWindow from "../components/MyComputerWindow";
import WallpaperWindow from "../components/WallpaperWindow";
import MusicPlayerWindow from "../components/MusicPlayerWindow";
export default {
  name: "Home",
  components: {
    EventWindow,
    JolinProfileWindow,
    MyComputerWindow,
    WallpaperWindow,
    MusicPlayerWindow,
  },
  data() {
    return {
      active: false,
      menuDisplay: false,
      eventWindow: false,
      musicWindow: true,
      jolinProfileWindow: false,
      wallpaperChangeWindow: false,
      myComputerWindow: false,
      hour: null,
      minute: null,
      second: null,
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
      maxZIndex: 5,
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
      const { player } = this.$refs;
      if (this.menuDisplay) {
        this.menuDisplay = !this.menuDisplay;
        this.active = !this.active;
      } else if (player.listToggle === true) {
        player.listToggle = false;
      }
    },
    openEventWindow() {
      this.eventWindow = true;
      this.menuDisplay = false;
      this.active = false;
      this.maxZIndex = this.maxZIndex + 2;
      const { event } = this.$refs;
      const { window } = event.$refs;
      window.style.zIndex = this.maxZIndex;
    },
    closeEventWindow() {
      this.eventWindow = false;
    },
    openMusicWindow() {
      this.musicWindow = true;
      this.menuDisplay = false;
      this.active = false;
      this.resetMusicPlayerButton();
      const { player } = this.$refs;
      const { audio } = player.$refs;
      player.currentMusicSrc = this.musicList[0].src;
      player.currentMusicName = this.musicList[0].name;
      audio.play();
      this.maxZIndex = this.maxZIndex + 2;
      const { window } = player.$refs;
      window.style.zIndex = this.maxZIndex;
    },
    closeMusicWindow() {
      this.musicWindow = false;
    },
    resetMusicPlayerButton() {
      const { player } = this.$refs;
      player.play = false;
      player.stop = false;
      player.pause = false;
    },
    handleWallpaperChange(url) {
      this.$emit("handleWallpaperChange", url);
    },
    closeWallpaperWindow() {
      this.wallpaperChangeWindow = false;
    },
    openWallpaperWindow() {
      this.wallpaperChangeWindow = true;
      this.menuDisplay = !this.menuDisplay;
      this.active = false;
      this.maxZIndex = this.maxZIndex + 2;
      const { wallpaper } = this.$refs;
      const { window } = wallpaper.$refs;
      window.style.zIndex = this.maxZIndex;
    },
    openJolinProfileWindow() {
      this.jolinProfileWindow = true;
      this.menuDisplay = false;
      this.active = false;
      this.maxZIndex = this.maxZIndex + 2;
      const { profile } = this.$refs;
      const { window } = profile.$refs;
      window.style.zIndex = this.maxZIndex;
    },
    closeJolinProfileWindow() {
      this.jolinProfileWindow = false;
    },
    openMyComputerWindow() {
      this.myComputerWindow = true;
      this.menuDisplay = false;
      this.active = false;
      this.maxZIndex = this.maxZIndex + 2;
      const { computer } = this.$refs;
      const { window } = computer.$refs;
      window.style.zIndex = this.maxZIndex;
    },
    closeMyComputerWindow() {
      this.myComputerWindow = false;
    },
    handleSet(newZIndex) {
      if (this.maxZIndex < newZIndex) {
        this.maxZIndex = newZIndex;
      }
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
  z-index: 98;
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
  z-index: 99;
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

.active {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
  color: var(--blood-red);
}
</style>

