<template>
  <div
    class="window-wrap my-computer-window"
    @mousedown="clickWindow"
    @mousemove="moveWindow"
    @mouseup="finishMove"
    ref="window"
  >
    <div class="window-header">
      <div class="header-title-wrap">
        <div class="window-header-icon">
          <img
            src="@/assets/img/computer.png"
            alt="header-icon"
            class="header-icon-img"
          />
        </div>
        <div class="window-title">My Computer</div>
      </div>
      <div class="cross-icon" @click="handleCloseWindow">
        <font-awesome-icon icon="times" class="close-icon" />
      </div>
    </div>
    <div class="window-content">
      <div class="computer-content-wrap">
        <div class="content-title">【五百人製作Team】</div>
        <div class="line"></div>
        <ul class="main-content-wrap">
          <li class="item">企劃：文科少女</li>
          <li class="item">設計：文科少女</li>
          <li class="item">前端：文科少女</li>
          <li class="item">錄音：文科少女</li>
          <li class="item">對！全部都是文科少女！</li>
          <li class="item">少女的GitHub：https://github.com/jolinhappy</li>
          <li class="item">
            少女的Facebook：https://www.facebook.com/pinkyprogramer
          </li>
          <li class="item">
            少女的Mediumn：https://pink-learn-frontend.medium.com/
          </li>
          <li class="item">少女的痞克邦：https://pinkymini.pixnet.net/</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComputerWindow",
  props: {
    maxZIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      windowMove: {},
    };
  },
  methods: {
    handleCloseWindow() {
      this.$emit("close");
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
      const newZIndex = this.maxZIndex + 2;
      window.style.zIndex = newZIndex;
      this.$emit("setMaxZIndex", newZIndex);
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
};
</script>

<style scoped>
.my-computer-window {
  position: absolute;
  top: 50px;
  right: 50%;
  width: 400px;
  height: 400px;
}

.window-content {
  width: 380px;
  height: 350px;
  background: var(--white);
  margin: 10px auto;
  overflow-y: scroll;
  scrollbar-arrow-color: var(--blood-red);
}
.window-content::-webkit-scrollbar {
  background: var(--light-red);
  width: 20px;
}
.window-content::-webkit-scrollbar-thumb {
  background: var(--main-red);
  border-top: 1.5px solid var(--light-red);
  border-right: 1px solid var(--dark-red);
  border-bottom: 1.4px solid var(--middle-red);
  height: 3px;
}
.computer-content-wrap {
  width: 300px;
  height: auto;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.main-content-wrap {
  margin: 10px 0px 0px 20px;
  width: 300px;
}
.content-title {
  margin-bottom: 18px;
  font-weight: 900;
  color: var(--blood-red);
}
.line {
  position: absolute;
  display: block;
  width: 315px;
  height: 5px;
  background: var(--blood-red);
  margin-bottom: 15px;
  top: 30px;
}
.item {
  margin-bottom: 10px;
}
</style>