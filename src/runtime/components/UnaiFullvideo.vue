<template>
  <header class="video-header coverer">
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
    <div class="viewport-header coverer">
      <h1>
        {{ props.title }}
        <span> {{ props.subtitle }} </span>
      </h1>
    </div>
  </header>
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
.video-header {
  position: absolute;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
video {
    background: brown;
    object-fit: cover;
}
.viewport-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-family: "Syncopate", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3vw;
  line-height: 1.2;
  font-size: 3vw;
  text-align: center;
    color: var(--pal-red);
  text-shadow: 
    1px 0px 1px #222, 0px 1px 1px #000, 
    2px 1px 1px #222, 1px 2px 1px #000,
    3px 2px 1px #222, 2px 3px 1px #000,
    4px 3px 1px #222;

}
span {
  display: block;
  font-size: 9vw;
  letter-spacing: -1.2vw;
  color: var(--pal-green);
}
</style>
