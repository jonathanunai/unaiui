<template>
  <nav :class="mobileMenuState ? 'open' : ''">
    <div class="navbar-container">
      <unai-hamburger @click="openMenu" />
      <ul 
        ref="menuItems" 
        tabindex="0" 
        class="menu-items"
      >
        <li 
          v-for="link in links"
          :key="link.url"
        >
          <NuxtLink :to="link.url">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <div class="logo">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>
<script setup>
import UnaiHamburger from "./UnaiHamburger.vue";

const props = defineProps({
  links: {
    type: Array,
    default: () => []
  },
});

const mobileMenuState = ref(false);
const menuItems = ref(null);

function handleFocusOut() {
  mobileMenuState.value = false;
}
function openMenu() {
  mobileMenuState.value = !mobileMenuState.value;
  if (mobileMenuState.value) menuItems.value.focus();
}
</script>
<style lang="scss" scoped>
body {
  padding-top: var(--navbarHeight);
}
nav {
  opacity: 0.95;
  position: fixed;
  width: 100%;
  background: #fff;
  color: var(--font-color);
  height: var(--navbarHeight);
  z-index: 12;
  top: 0;
  .logo {
    position: absolute;
    top: 5px;
    right: 1rem;
    font-size: 2rem;
  }
  .navbar-container {
    display: block;
    position: relative;
    height: 100%;
    .menu-items {
      height: 100vh;
      display: flex;
      padding: 2rem 1rem;
      transition: transform 0.5s ease-in-out;
      box-shadow: 5px 10px 10px 0px #000;
      list-style: none;
      max-width: 360px;
      transform: translate(-150%);
      background: var(--white-color);
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
  &.open {
    .menu-items {
      transform: translateX(0);
      flex-direction: column;
    }
  }
}

@media (min-width: 769px) {
  nav {
    opacity: 0.85;
    padding: 0 1rem;
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menu-items {
        padding: 0;
        margin: 0;
        background: inherit;
        flex-direction: row;
        max-width: 100%;
        height: 100%;
        order: 2;
        display: flex;
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
    .logo {
      position: relative;
      order: 1;
      font-size: 2.3rem;
      margin-bottom: 0.5rem;
      top: unset;
      right: unset;
      margin: 0;
    }
  }
}
</style>
