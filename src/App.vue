<template>
  <div id="app">
    <router-view @handleWallpaperChange="handleChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(url) {
      const body = document.querySelector("body");
      body.setAttribute("style", `background-image:url(${url})`);
      console.log(body);
      console.log(url);
    },
  },
};
</script>

<style>
/* reset */
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "FZXS14--GB1-0";
  src: url(./web-font/FZXS14--GB1-0.woff) format("woff2");
}

:root {
  --blood-red: #960820;
  --main-red: #e4677d;
  --light-red: #ffccd5;
  --dark-red: #4d000d;
  --middle-red: #981b30;
  --white: #fff;
  --text-black: #252223;
  height: 100%;
  width: 100%;
  /* background-image: url(https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg);
  background-size: cover;
  font-family: "FZXS14--GB1-0"; */
}
body {
  background-image: url(https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg);
  background-size: cover;
  font-family: "FZXS14--GB1-0";
}

.window-wrap {
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  background: var(--main-red);
}
.window-header {
  width: 400.5px;
  height: 33px;
  background: var(--blood-red);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, #960820 14%, #de0025 97%);
}
.cross-icon {
  margin-right: 6px;
  width: 20px;
  height: 20px;
  background: var(--main-red);
  border-top: 1.5px solid var(--light-red);
  border-left: 1.5px solid var(--light-red);
  border-right: 1.5px solid var(--dark-red);
  border-bottom: 1.5px solid var(--dark-red);
  display: flex;
}
.cross-icon:hover {
  border-top: 1.5px solid var(--dark-red);
  border-left: 1.5px solid var(--dark-red);
  border-right: 1.5px solid var(--light-red);
  border-bottom: 1.5px solid var(--light-red);
}
.close-icon {
  margin: auto;
}
</style>
