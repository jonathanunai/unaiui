<template>
  <button 
    :style="{ backgroundColor: props.color }" 
    :class="classes" 
    @click="clicked">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
const emit = defineEmits(['clicked'])

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: '',
  },
  color: {
    type: String,
    required: false,
    default: '#2fa',
  },
});
const classes = computed<string[]>(() => {
  return props.type ? [`type-${props.type}`] : [];
});

function clicked() {
    emit('clicked')
}

</script>

<style lang="scss" scoped>
 button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color:#fff;
  border-radius: 4px;
  font-size: 14px;
  font-family: '微软雅黑',arail;
  cursor: pointer;
  &[disabled]{
    cursor: not-allowed;
  }
   &.type-rounded {
    border-radius: 0.5rem;
  }
}
</style>
