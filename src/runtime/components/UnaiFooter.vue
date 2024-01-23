<template>
  <div class="footer-wrapper">
    <div v-if="$slots.prefooter" class="prefooter">
      <slot name="prefooter"></slot>
    </div>
    <div class="footer">
      <slot></slot>
    </div>
    <div v-if="$slots.afterfooter" class="afterfooter">
      <slot name="afterfooter"></slot>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
.footer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: center;
}
.prefooter {
  padding: 2rem;
  background-color: #ccaabb;
}
.footer {
  padding: 2rem;
  display: flex;
  background-color: #212121;
  color: #f2f2f2;
}
.afterfooter {
  font-size: 0.8rem;
  padding: 0.5rem;
  color: #f2f2f2;
  background-color: #000000;
}
</style>
