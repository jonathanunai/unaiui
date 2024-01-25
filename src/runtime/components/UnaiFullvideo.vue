<template>
  <div class="video-wrapper coverer">
    <video
      id="bgvid"
      playsinline
      autoplay
      muted
      loop
      :poster="`${video}.jpg`"
      class="coverer"
    >
      <source :src="`${video}.webm`" type="video/webm" />
      <source :src="`${video}.mp4`" type="video/mp4" />
    </video>
    <div class="viewport-fullscreen coverer">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  video: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<style scoped>
.video-wrapper {
  position: absolute;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
.video-wrapper::before {
    position:absolute;
    content:'';
    top:0;bottom:0;left:0;right:0;
    background-image: linear-gradient(22deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent);
    background-size: 4px 4px;
    z-index: 1;
}

video {
    background: brown;
    object-fit: cover;
}
.viewport-fullscreen {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transform: translate3d(0,0,0);
}
</style>
