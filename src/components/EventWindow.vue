<template>
  <div
    class="window-wrap event-window"
    @mousedown="clickWindow"
    @mousemove="moveWindow"
    @mouseup="finishMove"
    ref="window"
  >
    <div class="window-header">
      <div class="header-title-wrap">
        <div class="window-header-icon">
          <img
            src="https://i.imgur.com/yfh7grL.png"
            alt="header-icon"
            class="header-icon-img"
          />
        </div>
        <div class="window-title">Jolin大紀事</div>
      </div>
      <div class="cross-icon" @click="handleCloseWindow">
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
</template>

<script>
export default {
  name: "EventWindow",
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
.event-window {
  position: absolute;
  top: 50px;
  right: 50%;
  width: 400px;
  height: 350px;
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
</style>