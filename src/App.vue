<script>
import FilterAccounts from "@/components/FilterAccounts";
import FilterTypes from "@/components/FilterTypes";
import SocialLinks from "@/components/SocialLinks";
import DataSocialLinks from "@/data/socialLinks";
import Chart from "@/components/Chart";

export default {
  name: "TheApp",
  data() {
    return {
      DataSocialLinks,
    };
  },
  components: { FilterAccounts, FilterTypes, SocialLinks, Chart },
  mounted() {
    this.$store.dispatch("getAccounts");
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="text-5xl font-semibold text-center">
      <h2 class="mb-5">Marketing Integrations</h2>
      <p class="text-light-400">Trust WASK's smart optimization features</p>
    </div>
    <div class="flex items-center gap-10 w-full max-w-[1600px]">
      <SocialLinks :links="DataSocialLinks" />
      <div class="flex-1">
        <div class="flex justify-center items-center gap-10 mb-10">
          <FilterAccounts />
          <FilterTypes />
        </div>
        <Chart />
      </div>
      <SocialLinks :links="DataSocialLinks" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  @apply flex flex-col justify-center items-center gap-14 min-h-screen;
}
</style>
