<template>
  <form
    onsubmit="event.preventDefault();"
    role="search"
    :class="focused || focusedSlot || model ? 'focused' : ''"
  >
    <label for="search">Search</label>
    <input
      id="searchWhyto"
      ref="searchWhyto"
      type="search"
      :placeholder="searchText"
      required
      :value="model"
      @input="(evt) => (model = evt.target.value)"
    />
    <button type="submit" @click="$emit('search')">Go</button>
    <div class="slot-wrapper" ref="slotLayer"><slot></slot></div>
  </form>
</template>
<script setup>
import { useFocus } from "@vueuse/core";

import { defineModel, ref, defineProps } from "vue";

const props = defineProps({
  searchText: {
    type: String,
    required: false,
    default: "Search...",
  },
});
const model = defineModel();
const searchWhyto = ref();
const slotLayer = ref();

const { focused } = useFocus(searchWhyto, { initialValue: false });
const { focusedSlot } = useFocus(slotLayer, { initialValue: false });

</script>

<style scoped lang="scss">
form {
  --rad: 0.7rem;
  --dur: 0.3s;
  --font-fam: "Lato", sans-serif;
  --height: 5rem;
  --btn-width: 6rem;
  --bez: cubic-bezier(0, 0, 0.43, 1.49);

  position: fixed;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 30rem;
  max-width: 80%;
  border-radius: var(--rad);
  margin-top: 2rem;
  text-align: left;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.2s;

  &.focused {
    top: 60px;
    left: 50%;
    height: 100vzh;
    width: 45rem;
    max-width: 90%;

    transform: translateX(-50%);
    transition: all 0.4s ease-in-out;
    transition-delay: 0s;

    input {
      margin: 0 auto;
    }
    button {
    }
  }
}
input,
button {
  height: var(--height);
  font-family: var(--font-fam);
  border: 0;
  color: var(--color-dark);
  font-size: 1.8rem;
  transition: all 0.4s ease-in-out;
}
input[type="search"] {
  width: 100%;
  background: var(--color-white);
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
