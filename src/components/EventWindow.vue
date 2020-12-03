<template>
  <div class="window-wrap event-window" v-show="eventWindow">
    <div class="window-header">
      <div class="window-title">Jolin大紀事</div>
      <div class="cross-icon" @click="handleCloseEventWindow">
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
  methods: {
    openEventWindow() {
      this.eventWindow = true;
    },
    handleCloseEventWindow() {
      this.$emit("close");
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
</style>