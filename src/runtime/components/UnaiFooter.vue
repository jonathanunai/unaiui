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
<script setup></script>
<style>
.footer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: center;
}
.prefooter {
  padding: 2rem;
  background: #abbaab;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #ffffff, #abbaab);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #ffffff, #abbaab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-align: center;
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
