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
          <div class="desktop-app-title">我的電腦</div>
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
        <div class="desktop-app">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=1"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">音樂播放器</div>
        </div>
        <div class="desktop-app">
          <div class="desktop-app-icon">
            <img
              src="https://picsum.photos/40/40/?random=4"
              alt="app-icon"
              class="icon-img"
            />
          </div>
          <div class="desktop-app-title">Jolin大紀事</div>
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
    <div class="desktop-footer">
      <div class="footer-left" @click="clickStart" :class="{ active }">
        <div class="footer-start-icon">
          <img
            src="https://picsum.photos/20/20/?random=30"
            class="footer-icon-img"
          />
        </div>
        <div class="footer-start-text">start</div>
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
          <div class="menu-item-title">音樂播放器</div>
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
          <div class="menu-item-title">我的電腦</div>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-skin-change">變更桌面</div>
        <div class="footer-time">12:35 PM</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: false,
      menuDisplay: false,
    };
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

.desktop-footer {
  width: 100%;
  height: 45px;
  background: var(--blood-red);
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
.active {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
}
.footer-menu {
  position: absolute;
  bottom: 45.7px;
  width: 280px;
  height: 300px;
  background: var(--blood-red);
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
</style>

