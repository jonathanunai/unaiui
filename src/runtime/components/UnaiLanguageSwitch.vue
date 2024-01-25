<template>
  <div class="lang-wrapper">
    <NuxtLink
      v-for="locale in locales"
      :key="locale.to"
      :to="$emit('switch', locale.code)"
    >
      [{{ locale.code }}]
    </NuxtLink>
  </div>
</template>
<script setup>
defineEmits(["switch"]);
const props = defineProps({
  locales: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped>
.lang-wrapper {
  display: flex;
  justify-content: space-between;
}
a {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  padding: 0.1rem;
  font-size: 0.8rem;
}
</style>