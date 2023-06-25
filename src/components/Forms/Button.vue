<script>
export default {
  name: "TheButton",
  props: {
    type: {
      type: String,
      default: "text",
    },
    active: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <button :type="type" class="button-primary" :class="active && 'active'">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button-primary {
  @apply text-light-400 rounded-full bg-white py-2 px-5 transition-all;

  &:hover,
  &.active {
    @apply text-white bg-black;
  }
}
</style>
