<template>
  <div class="hamburger-wrapper" :class="classes">
    <div class="hamburger"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  showHamburgerAlways: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "",
  },
});
const classes = computed(() => {
  return [props.showHamburgerAlways ? "" : "only-mobile"];
});
const color = computed(() => {
  return (props.color) ?  props.color : "var(--hamburger-color)";
});
</script>

<style lang="scss">
:root {
  --hamburger-color: #212121;
}
.hamburger-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--navbarHeight);
  width: var(--navbarHeight);
  cursor: pointer;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  background-color: v-bind(color);
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}
.dark {
  .hamburger,
  .hamburger::before,
  .hamburger::after {
    background-color: var(--white-color);
  }
}

.hamburger::before {
  content: "";
  margin-top: -8px;
}

.hamburger::after {
  content: "";
  margin-top: 8px;
}

.open {
  .hamburger::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }
  .hamburger {
    background: rgba(255, 255, 255, 0);
  }
  .hamburger::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }
  .menu-items {
    transform: translateX(0);
  }
}

@media (min-width: 769px) {
  .hamburger-wrapper {
    &.only-mobile {
      display: none;
    }
  }
}
</style>
