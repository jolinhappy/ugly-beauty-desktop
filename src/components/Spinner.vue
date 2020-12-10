<template>
  <div class="spinner-wrap" @click="endLoading">
    <div class="img-wrap">
      <img src="https://i.imgur.com/6OvpSAS.png" alt="" class="img" />
    </div>
    <div class="text">
      click to enter！
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    endLoading () {
      this.$emit('handleEndLoading')
    }
  }
}
</script>

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
  flex-direction: column;
}
.img {
  width: 200px;
  height: 200px;
  animation: action 0.75s infinite;
}
.text {
  font-size: 30px;
  color: white;
  animation: textAction 1s ease-out infinite;
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

@keyframes textAction {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
}
</style>