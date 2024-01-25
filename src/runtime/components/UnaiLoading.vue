<template>
  <div class="loader"></div>
</template>
<style>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  height: 150px;
  aspect-ratio: 2;
  box-sizing: border-box;
  background: radial-gradient(farthest-side, #fff 98%, rgba(0,0,0,0)) left/50px 50px,
    radial-gradient(farthest-side, #fff 98%, rgba(0,0,0,0)) left/50px 50px,
    radial-gradient(farthest-side, #fff 98%, rgba(0,0,0,0)) center/50px 50px,
    radial-gradient(farthest-side, #fff 98%, rgba(0,0,0,0)) right/50px 50px, rgba(0,0,0,0);
  background-repeat: no-repeat;
  filter: blur(1px) contrast(10);
  animation: l14 1s infinite;
}
.loader::before {
    content: 'LOADING...';
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -100%);
}
@keyframes l14 {
  100% {
    background-position: right, left, center, right;
  }
}
</style>
