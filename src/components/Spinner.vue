<template>
  <div class="spinner-wrap">
    <div class="img-wrap">
      <img src="https://i.imgur.com/6OvpSAS.png" alt="" class="img" />
    </div>
  </div>
</template>

<style scoped>
.spinner-wrap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 200px;
  height: 200px;
  animation: action 0.75s infinite;
}

@keyframes action {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(-30deg);
  }
  from {
    transform: rotate(-30deg);
  }
  to {
    transform: rotate(90deg);
  }
}
</style>