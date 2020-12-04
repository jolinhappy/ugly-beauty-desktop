<template>
  <div
    class="window-wrap wallpaper-change-window"
    @mousedown="clickWindow"
    @mousemove="moveWindow"
    @mouseup="finishMove"
    ref="window"
  >
    <div class="window-header">
      <div class="header-title-wrap">
        <div class="window-header-icon">
          <img
            src="https://i.imgur.com/u0Gkmzl.png"
            alt="header-icon"
            class="header-icon-img"
          />
        </div>
        <div class="window-title">wallpaper Change</div>
      </div>
      <div class="cross-icon" @click="handleCloseWindow">
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
      <div class="confirm-button" @click="emitWallpaper">套用</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "wallpaperWindow",
  props: {
    wallpapers: {
      type: Array,
      require: true,
    },
    maxZIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      wallpapersUrl:
        "https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg",
      windowMove: {},
    };
  },
  methods: {
    handleCloseWindow() {
      this.$emit("close");
    },
    changeWallpaper(id) {
      this.wallpapers.map((item) => {
        if (item.id === id) {
          this.wallpapersUrl = item.url;
        }
      });
    },
    emitWallpaper() {
      this.$emit("emitToHomePage", this.wallpapersUrl);
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
</style>