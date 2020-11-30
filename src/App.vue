<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
  background-image: url(https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg);
  background-size: cover;
  font-family: "FZXS14--GB1-0";
}
</style>
