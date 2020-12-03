<template>
  <div class="window-wrap jolin-profile-window">
    <div class="window-header">
      <div class="window-title">蔡依林</div>
      <div class="cross-icon" @click="handleCloseWindow">
        <font-awesome-icon icon="times" class="close-icon" />
      </div>
    </div>
    <div class="window-content">
      <div class="profile-content-wrap">
        <div class="content-tite">蔡依林</div>
        <div class="profile-image">
          <img
            src="https://pad.chinatimes.com/NewsSource/ClipXML/CTW/2152B/img/WB215200560.jpg"
            alt="Jolin-image"
            class="jolin-img"
          />
        </div>
        <ul class="profile-list-group">
          <li class="profile-list">姓名：蔡依林</li>
          <li class="profile-list">英文名：Jolin Tsai</li>
          <li class="profile-list">生日：09/15</li>
          <li class="profile-list">：仁大學英文系</li>
        </ul>
        <div class="profile-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JolinProfileWindow",
  methods: {
    handleCloseWindow() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.jolin-profile-window {
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
.content-title {
  font-size: 50px;
  font-weight: bold;
}
.profile-content-wrap {
  width: 340px;
  height: 90%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-list-group {
  margin-left: 20px;
}
.profile-list {
  margin-bottom: 10px;
}
.profile-image {
  width: 110px;
  height: 120px;
  margin: 15px;
}
.jolin-img {
  width: 110px;
  height: 120px;
  object-fit: cover;
}
</style>