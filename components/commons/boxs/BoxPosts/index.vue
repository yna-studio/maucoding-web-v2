<template>
  <div class="p-t-lg p-blg">
    <div class="row q-col-gutter-md">
      <div
        v-for="(n, key) in data"
        :class="size === 'small' ? 'col-6' : 'col-4'"
      >
        <card-post />
      </div>
    </div>
    <spiner />
  </div>
</template>

<script>
import DefaultLayout from "@components/layouts/default-layout";
import CardPost from "@components/commons/cards/CardPost";
import Spiner from "@components/commons/loaders/GlobalSpiner";

export default {
  name: "box-post",
  data() {
    return {
      data: [1, 2, 3],
    };
  },
  components: {
    "default-layout": DefaultLayout,
    "card-post": CardPost,
    spiner: Spiner,
  },
  props: {
    size: {
      type: String,
      default: "small",
    },
  },
};
</script>
