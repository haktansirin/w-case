<script>
export default {
  name: "TheSocialLinks",
  props: ["links"],
};
</script>

<template>
  <ul class="social-link">
    <li class="social-link-item" v-for="link in links" :key="link.id">
      <img :src="link.icon" :alt="link.title" :title="link.title" />
    </li>
  </ul>
</template>

<style lang="scss">
.social-link {
  @apply flex flex-col gap-5;

  &-item {
    @apply flex justify-center items-center w-32 h-32 rounded-lg bg-white p-10;
  }
}
</style>
