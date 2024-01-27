<template>
  <div class="lang-wrapper">
    <div
      v-for="locale in locales"
      :key="locale.to"
      @click="$emit('switch', locale.code)"
      class="langLink"
    >
      [{{ locale.code }}]
    </div>
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
.langLink {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  padding: 0.1rem;
  font-size: 0.8rem;
}
</style>