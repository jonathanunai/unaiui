<template>
  <a href="" :style="{ backgroundColor: props.color }" :class="classes">
    <slot />
  </a>
</template>
<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'standard',
  },
  color: {
    type: String,
    required: false,
    default: '#2fa',
  },
});
const classes = computed<string[]>(() => {
  return [`type-${props.type}`];
});
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  padding: 1rem 1.5rem;
  background: transparent;
  font-weight: 700;
  &.type-rounded {
    border-radius: 0.5rem;
  }
}
</style>
