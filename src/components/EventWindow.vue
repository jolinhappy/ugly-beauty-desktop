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
      <div class="content-title">Jolin大紀事</div>
      <div class="history-content">
        <div class="year">1999年</div>
        <ul class="history-list">
          <li class="history-event">發行首張個人專輯«1019»</li>
        </ul>
        <div class="year">2000年</div>
        <ul class="history-list">
          <li class="history-event">同年4月發行專輯«Don't Stop»</li>
          <li class="history-event">同年5月發行個人首本寫真集«19歲»</li>
          <li class="history-event">同年12月發行第3張專輯«Show Your Love»</li>
        </ul>
        <div class="year">2001年</div>
        <ul class="history-list">
          <li class="history-event">7月發行專輯«Lucky Number»</li>
        </ul>
        <div class="year">2002年</div>
        <ul class="history-list">
          <li class="history-event">
            8月發行第二本寫真集«假面公主．騎士精神»與單曲«騎士精神»
          </li>
        </ul>
        <div class="year">2003年</div>
        <ul class="history-list">
          <li class="history-event">3月發行第五張專輯«看我72變»</li>
          <li class="history-event">3月主演的«Hi! 上班女郎»於中視上映</li>
        </ul>
        <div class="year">2004年</div>
        <ul class="history-list">
          <li class="history-event">2月發行專輯«城堡»</li>
        </ul>
        <div class="year">2005年</div>
        <ul class="history-list">
          <li class="history-event">
            3月發行個人首本英文工具書«Jolin的24堂英文日記課»
          </li>
          <li class="history-event">4月發行第7張專輯«J-Game»</li>
          <li class="history-event">
            12月發行第二本英文工具書«Jolin的6場單字派對»
          </li>
        </ul>
        <div class="year">2006年</div>
        <ul class="history-list">
          <li class="history-event">5月發行個人專輯«舞孃»</li>
          <li class="history-event">同年5月入圍最佳國語女歌手</li>
        </ul>
        <div class="year">2007年</div>
        <ul class="history-list">
          <li class="history-event">9月發行個人專輯«特務J»</li>
        </ul>
        <div class="year">2008年</div>
        <ul class="history-list">
          <li class="history-event">
            10月發行第3本英文工具書與首張翻唱專輯«愛的練習曲»
          </li>
        </ul>
        <div class="year">2009年</div>
        <ul class="history-list">
          <li class="history-event">3月發行第10張個人專輯«花蝴蝶»</li>
        </ul>
        <div class="year">2010年</div>
        <ul class="history-list">
          <li class="history-event">8月發行第11張個人專輯«Myself»</li>
        </ul>
        <div class="year">2012年</div>
        <ul class="history-list">
          <li class="history-event">9月發行第12張個人專輯«Muse»</li>
        </ul>
        <div class="year">2014年</div>
        <ul class="history-list">
          <li class="history-event">11月發行第13張個人專輯«呸»</li>
        </ul>
        <div class="year">2015年</div>
        <ul class="history-list">
          <li class="history-event">
            5月展開個人巡迴演唱會「Play世界巡迴演唱會」
          </li>
        </ul>
        <div class="year">2016年</div>
        <ul class="history-list">
          <li class="history-event">2月為«動物方城市»配音</li>
        </ul>
        <div class="year">2017年</div>
        <ul class="history-list">
          <li class="history-event">5月發行單曲«讓愛傳出去»</li>
        </ul>
        <div class="year">2018年</div>
        <ul class="history-list">
          <li class="history-event">12月發行第14張個人專輯«Ugly Beauty»</li>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 20px;
  font-weight: 900;
  margin: 10px 0px;
}
.history-content {
  margin-left: 15px;
}
.history-event {
  margin-left: 20px;
}
.history-list {
  margin-bottom: 15px;
}
.year {
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 10px;
}
</style>