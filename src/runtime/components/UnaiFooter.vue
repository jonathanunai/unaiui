<template>
  <div class="footer-wrapper">
    <div class="prefooter">
      <slot name="prefooter"></slot>
    </div>
    <div class="footer">
      <slot></slot>
    </div>
    <div class="afterfooter">foo
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
  display: flex;
  background-color: #212121;
  color: #f2f2f2;
}
.afterfooter {
}
</style>
