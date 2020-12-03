<template>
  <div class="window-wrap my-computer-window">
    <div class="window-header">
      <div class="window-title">My Computer</div>
      <div class="cross-icon" @click="handleCloseWindow">
        <font-awesome-icon icon="times" class="close-icon" />
      </div>
    </div>
    <div class="window-content">
      <div class="computer-content-wrap">
        <div class="content-tite">【五百人製作Team】</div>
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
  methods: {
    handleCloseWindow() {
      this.$emit("close");
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

.window-title {
  margin-left: 10px;
  color: var(--white);
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
.content-tite {
  margin-bottom: 18px;
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