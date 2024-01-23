<template>
  <nav :class="slideMenuState ? 'open' : ''" :style="styles">
    <div
      class="navbar-container"
      :class="props.showHamburgerAlways ? '' : 'show-desktop-menu'"
    >
      <unai-hamburger
        v-if="!props.hideHamburger"
        @click="openMenu"
        :showHamburgerAlways="props.showHamburgerAlways"
        :color="props.color"
      />
      <div class="logoSlot">
        <slot></slot>
      </div>

      <ul ref="menuItems" tabindex="0" class="menu-items">
        <li v-for="link in links" :key="link.url">
          <NuxtLink :to="link.url">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <unai-slide-menu :links="props.links" />
  </nav>
</template>
<script setup>
import { computed, ref } from "vue";
import UnaiHamburger from "./UnaiHamburger.vue";

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  opacity: {
    type: Number,
    default: 0.95,
  },
  background: {
    type: String,
    default: "#fff",
  },
  color: {
    type: String,
    default: "#222",
  },
  showHamburgerAlways: {
    type: Boolean,
    default: false,
  },
  hideHamburger: {
    type: Boolean,
    default: false,
  },
});

const slideMenuState = ref(false);
const menuItems = ref(null);

function openMenu() {
  slideMenuState.value = !slideMenuState.value;
  if (slideMenuState.value) menuItems.value.focus();
}
const styles = computed(() => {
  return {
    "--navbarHeight": "60px",
    "--color-white":
      props.background === "transparent" ? "rgba(0,0,0,0)" : props.background,
    "--font-color": props.dark ? "#fff" : "#000",
    opacity: props.opacity,
  };
});



</script>
<style lang="scss" scoped>
body {
  padding-top: var(--navbarHeight);
}
nav {
  position: fixed;
  width: 100%;
  background: var(--color-white);
  color: var(--font-color);
  height: var(--navbarHeight);
  z-index: 12;
  top: 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease-out;
  &.navbar_hidden {
    transform: translate3d(0, -100%, 0);
  }
  .navbar-container {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    .logoSlot {
      width: 100%;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .menu-items {
      display: none;
    }
  }
  &.open {
    .menu-items {
      transform: translateX(0);
      flex-direction: column;
    }
  }
}

@media (min-width: 769px) {
  nav {
    padding: 0 1rem;
    .navbar-container {
      .menu-items {
        display: flex;
        height: 100%;
        padding: 2rem 1rem;
        transition: transform 0.5s ease-in-out;
        box-shadow: 5px 10px 10px 0px #000;
        list-style: none;
        max-width: 360px;
        transform: translate(-150%);
        background: var(--color-white);
        opacity: 0.95;
        &:focus {
          outline: none;
        }
        li {
          margin-bottom: 1.5rem;
          font-size: 1.6rem;
          font-weight: 500;
        }
        a {
          text-decoration: none;
          color: #444;
          font-weight: 500;
          transition: color 0.3s ease-in-out;
          &:hover {
            color: #117964;
            transition: color 0.3s ease-in-out;
          }
        }
      }
    }
    .navbar-container.show-desktop-menu {
      display: flex;
      justify-content: space-between;
      .menu-items {
        padding: 0;
        margin: 0;
        background: inherit;
        flex-direction: row;
        max-width: 100%;
        height: 100%;
        order: 2;
        display: none;
        transform: translate(0%);
        box-shadow: none;
        li {
          margin: 0 1rem;
          font-size: 1.2rem;
          align-items: center;
          height: 100%;
          display: flex;
        }
      }
    }
  }
}
</style>
