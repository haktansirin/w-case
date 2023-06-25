<script>
import { mapGetters } from "vuex";
import Button from "@/components/Forms/Button";
import IconArrowRight from "@/components/Icons/IconArrowRight";

export default {
  name: "TheFilterTypes",
  components: { Button, IconArrowRight },
  data() {
    return {
      selectedType: null,
      types: [
        {
          id: 1,
          name: "Click",
          value: "clicks",
        },
        {
          id: 2,
          name: "Impressions",
          value: "impressions",
        },
        {
          id: 3,
          name: "Spend",
          value: "spend",
        },
      ],
    };
  },
  methods: {
    setType(type) {
      this.$store.dispatch("setType", type);
      this.selectedType = type;
    },
  },
  computed: {
    ...mapGetters(["type"]),
  },
};
</script>

<template>
  <div class="flex items-center gap-5">
    <div class="flex items-center gap-2 font-semibold">
      Select Metric
      <IconArrowRight />
    </div>
    <div class="flex gap-2">
      <template v-for="item in types" :key="item.id">
        <Button
          @click="setType(item.value)"
          :class="{
            active: selectedType === item.value || type === item.value,
          }"
        >
          {{ item.name }}
        </Button>
      </template>
    </div>
  </div>
</template>
