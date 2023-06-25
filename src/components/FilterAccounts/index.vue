<script>
import { mapGetters } from "vuex";
import Button from "@/components/Forms/Button";
import IconArrowRight from "@/components/Icons/IconArrowRight";

export default {
  name: "TheFilterAccounts",
  data() {
    return {
      selectedAccount: null,
    };
  },
  components: { Button, IconArrowRight },
  methods: {
    setAccount(id) {
      this.$store.dispatch("selectAccount", id);
      this.selectedAccount = id;
    },
  },
  computed: {
    ...mapGetters(["accounts", "account"]),
  },
};
</script>

<template>
  <div class="flex items-center gap-5">
    <div class="flex items-center gap-2 font-semibold">
      Select Ad Account
      <IconArrowRight />
    </div>
    <div class="flex gap-2">
      <template v-for="item in accounts" :key="item.id">
        <Button
          @click="setAccount(item.id)"
          :class="{
            active: selectedAccount === item.id || account === item.id,
          }"
        >
          {{ item.name }}
        </Button>
      </template>
    </div>
  </div>
</template>
