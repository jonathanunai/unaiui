<template>
  <div class="input-wrapper">
    <component
      :is="formComponent"
      v-model="model"
      v-bind="attrs"
      @input="(evt) => (model = evt.target.value)"
    />
    <label :for="name" class="label">{{ name }}</label>
  </div>
</template>
<script setup>
import { computed } from "vue";

const model = defineModel();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: "input",
  },
});
const attrs = computed(() => {
  const { type, name, required } = props;
  const obj = {
    id: name,
    name: name,
    placeholder: name[0].toUpperCase() + name.slice(1),
    class: 'field',
  };
  if (required) {
    obj.required = 'required';
  }
  if (type === 'input') {
    obj.type = 'text';
  } else if (type === 'password') {
    obj.type = 'password';
  }
  return obj;
});

const formComponent = computed(() => {
  return props.type === 'textarea' ? 'textarea' : 'input';
});
</script>
<style lang="scss">
.input-wrapper {
  position: relative;
  padding: 1rem 0 0;
  margin-top: 10px;
  width: 80%;
  margin: 1rem auto;
}
.field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--bg-color);
  outline: 0;
  font-size: 1.3rem;
  color: var(--color-white);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }
  &:autofill, 
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-internal-autofill-selected {
    background-color: transparent !important;
  }
  &:placeholder-shown ~ .label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}
.label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--color-white);
}

.field:focus {
  ~ .label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--color-gradient-green1);
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(
    to right,
    var(--color-gradient-green1),
    var(--color-gradient-green2)
  );
  border-image-slice: 1;
}
/* reset input */
.field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}

.label::first-letter {
  text-transform: capitalize;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: none !important;
    -webkit-box-shadow: none
}

</style>
