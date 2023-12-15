<template>
  <div class="hero justify-center align-center px-4">
    <h2>{{ props.title }}</h2>
    <span class="subheading">{{ props.subtitle }}</span>
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
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom, #c2b280 0%, #b3a371 100%);
  background-image: url("/tierradeesparto.jpeg");
  background-size: cover;
  background-position: center;

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
