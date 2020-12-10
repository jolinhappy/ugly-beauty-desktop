<template>
  <div class="desktop">
    <Spinner @handleEndLoading="clickToEndLoad" v-if="loading" />
    <div class="desktop-app-section" @click="menuClose">
      <div class="desktop-app-group">
        <div class="desktop-app" @dblclick="openMyComputerWindow">
          <div class="desktop-app-icon">
            <img
              src="https://i.imgur.com/X8T7qgJ.png"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">My Computer</div>
        </div>
        <a
          href="https://www.facebook.com/search/top?q=%E8%94%A1%E4%BE%9D%E6%9E%97%20jolin%20tsai"
          target="_blank"
          class="facebook-link"
        >
          <div class="desktop-app">
            <div class="desktop-app-icon">
              <img
                src="https://i.imgur.com/tbHxFvg.png"
                alt="app-icon"
                class="icon-img"
              />
            </div>
            <div class="desktop-app-title">Network Neighborhood</div>
          </div>
        </a>
      </div>
      <div class="desktop-app-group">
        <div class="desktop-app" @dblclick="openMusicWindow">
          <div class="desktop-app-icon">
            <img
              src="https://i.imgur.com/Htl7ncQ.png"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">Music Player</div>
        </div>
        <div class="desktop-app" @dblclick="openEventWindow">
          <div class="desktop-app-icon">
            <img
              src="https://i.imgur.com/yfh7grL.png"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">Jolin大紀事</div>
        </div>
        <div class="desktop-app" @dblclick="openJolinProfileWindow">
          <div class="desktop-app-icon">
            <img
              src="https://i.imgur.com/7sr5riY.png"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">Who is Jolin Tsai?</div>
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
          <img src="https://i.imgur.com/6OvpSAS.png" class="footer-icon-img" />
        </div>
        <div class="footer-start-text">Start</div>
      </div>
      <div class="footer-menu" v-show="menuDisplay">
        <div class="menu-item" @click="openMusicWindow">
          <div class="menu-item-icon">
            <img
              src="https://i.imgur.com/Htl7ncQ.png"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Music Player</div>
        </div>
        <div class="menu-item" @click="openEventWindow">
          <div class="menu-item-icon">
            <img
              src="https://i.imgur.com/yfh7grL.png"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Jolin大紀事</div>
        </div>
        <div class="menu-item" @click="openJolinProfileWindow">
          <div class="menu-item-icon">
            <img
              src="https://i.imgur.com/7sr5riY.png"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Who is Jolin Tsai?</div>
        </div>
        <div class="menu-item" @click="openWallpaperWindow">
          <div class="menu-item-icon">
            <img
              src="https://i.imgur.com/Ou52SXk.png"
              alt="menu-icon"
              class="menu-icon-img"
            />
          </div>
          <div class="menu-item-title">Wallpaper Change</div>
        </div>
        <a
          href="https://www.facebook.com/search/top?q=%E8%94%A1%E4%BE%9D%E6%9E%97%20jolin%20tsai"
          target="_blank"
          class="facebook-link"
        >
          <div class="menu-item">
            <div class="menu-item-icon">
              <img
                src="https://i.imgur.com/tbHxFvg.png"
                alt="menu-icon"
                class="menu-icon-img"
              />
            </div>
            <div class="menu-item-title">Network Neighborhood</div>
          </div>
        </a>
        <div class="menu-item" @click="openMyComputerWindow">
          <div class="menu-item-icon">
            <img
              src="https://i.imgur.com/X8T7qgJ.png"
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
import Spinner from "../components/Spinner";
export default {
  name: "Home",
  components: {
    EventWindow,
    JolinProfileWindow,
    MyComputerWindow,
    WallpaperWindow,
    MusicPlayerWindow,
    Spinner,
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
      loading: true,
      hour: null,
      minute: null,
      second: null,
      musicList: [
        {
          id: uuidv4(),
          name: "紅衣女孩",
          src:
            "https://media1.vocaroo.com/mp3/139PPTdqf3W5",
        },
        {
          id: uuidv4(),
          name: "怪美的(Cover)",
          src:
            "https://media1.vocaroo.com/mp3/1jozwDLv8LPA",
        },
        {
          id: uuidv4(),
          name: "玫瑰少年(Cover)",
          src:
            "https://media1.vocaroo.com/mp3/11mZB2yMkpzX",
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
      this.clicked = false;
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
    clickToEndLoad() {
      this.loading = false;
      const { player } = this.$refs;
      const { audio } = player.$refs;
      audio.play();
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
.icon-img {
  width: 60px;
  height: 60px;
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
.facebook-link {
  text-decoration: none;
  color: white;
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
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
}

.footer-icon-img {
  width: 30px;
  height: 30px;
}
.footer-start-text {
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
.footer-icon-img {
  width: 30px;
  height: 30px;
}
.menu-item {
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
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
.menu-icon-img {
  width: 40px;
  height: 40px;
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

