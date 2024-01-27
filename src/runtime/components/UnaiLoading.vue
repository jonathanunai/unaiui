<template>
  <div class="loader-wrapper">
    <div class="loading-background"></div>
    <div class="loader"></div>
  </div>
</template>
<style>
.loading-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #333;
  opacity: 0.95;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  height: 150px;
  aspect-ratio: 2;
  box-sizing: border-box;
  background: radial-gradient(farthest-side, #fff 98%, rgba(0, 0, 0, 0))
      left/50px 50px,
    radial-gradient(farthest-side, #fff 98%, rgba(0, 0, 0, 0)) left/50px 50px,
    radial-gradient(farthest-side, #fff 98%, rgba(0, 0, 0, 0)) center/50px 50px,
    radial-gradient(farthest-side, #fff 98%, rgba(0, 0, 0, 0)) right/50px 50px,
    rgba(0, 0, 0, 0);
  background-repeat: no-repeat;
  filter: blur(1px) contrast(10);
  animation: l14 1s infinite;
}
@keyframes l14 {
  100% {
    background-position: right, left, center, right;
  }
}
</style>
