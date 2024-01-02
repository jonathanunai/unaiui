<template>
  <form onsubmit="event.preventDefault();" role="search">
    <label for="search">Search</label>
    <input
      id="searchWhyto"
      type="search"
      placeholder="Search..."
      autofocus
      required
      v-model="model"
    />
    <button type="submit">Go</button>
  </form>
</template>
<script setup>
const model = defineModel()
</script>

<style scoped>
form {
  --rad: 0.7rem;
  --dur: 0.3s;
  --color-dark: #2f2f2f;
  --color-light: #fff;
  --font-fam: "Lato", sans-serif;
  --height: 5rem;
  --btn-width: 6rem;
  --bez: cubic-bezier(0, 0, 0.43, 1.49);

  position: relative;
  width: 30rem;
  max-width: 87%;
  background: var(--secondary-color);
  border-radius: var(--rad);
  margin-top: 2rem;
  text-align: left;
}
input,
button {
  height: var(--height);
  font-family: var(--font-fam);
  border: 0;
  color: var(--color-dark);
  font-size: 1.8rem;
}
input[type="search"] {
  width: 100%;
  background: var(--color-light);
  padding: 0 1.6rem;
  border-radius: var(--rad);
  appearance: none;
  transition: all var(--dur) var(--bez);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}
button {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: var(--btn-width);
  font-weight: bold;
  background: var(--color-brand);
  border-radius: 0 var(--rad) var(--rad) 0;
}
input:not(:placeholder-shown) {
  border-radius: var(--rad) 0 0 var(--rad);
  width: calc(100% - var(--btn-width));
}
input:not(:placeholder-shown) + button {
  display: block;
  cursor: pointer;
}
label {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>
