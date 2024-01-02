<template>
  <div class="slide-menu">
    <div class="menu-content">
      <ul>
        <li v-for="link in props.links" :key="link.url">
          <NuxtLink :to="link.url">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <!-- Your menu content goes here -->
    </div>
    <div class="menu-background"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.slide-menu {
}
.menu-content {
      position: fixed;
  top: 64px;
  left: 0;
    width: 100%;
  height: 100%;
  z-index: 999;

}
.menu-background {
    display: none;
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: -1;
}
.open .menu-content {
  transform: translateX(0);
    transition: transform 0.3s ease-in-out;

}

.open .menu-background {
  display: block;
}

.menu-content {
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

}
@media (min-width: 769px) {
.menu-content {
}
}

</style>
