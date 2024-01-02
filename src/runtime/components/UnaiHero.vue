<template>
  <div class="hero">
    <h2 v-html="props.title" class="title"></h2>
    <span class="subheading">{{ props.subtitle }}</span>
    <slot></slot>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  height: {
    type: String,
    required: false,
    default: '100vh'
  }
});
const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});
</script>
<style lang="scss">
.hero {
  margin: 0 auto;
  width: 100%;
  position: relative;
  height: v-bind(height);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom, #212121 0%, #424242 100%);
  background-size: cover;
  background-position: center;
  text-align: center;
  text-transform: uppercase;
  .subheading {
    font-size: 1.4rem;
    z-index: 15;
    color: var(--color-black);
    text-align: center;
    font-family: "Neutra";
    width: 100%;
    font-weight: 100;
    color: #fff;

    @media (min-width: 450px) {
      font-size: 2rem;
    }
  }

  .title {
    text-align: center;
    font-size: 2rem;
    top: 50%;
    z-index: 15;
    color: #fff;
    font-family: "Olivetti";
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: 300;
    padding-right: 0.8rem;
    font-family: "Dancing Script", cursive;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

    @media (min-width: 450px) {
      font-size: 3.2rem;
    }
  }

  h3 {
    position: absolute;
    bottom: 1%;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Olivetti";
    font-size: 0.9rem;
    word-wrap: normal;
    color: var(--primary-color);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media only screen and (min-width: 400px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 600px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 900px) {
    h3 {
      font-size: 1.73rem;
    }
  }
}
</style>
