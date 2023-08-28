<template>
  <div class="p-t-lg p-blg">
    <div class="row q-col-gutter-md">
      <div v-for="(n, key) in data" class="col-6">
        <card-post />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 q-pa-lg">
        <q-btn
          class="q-pl-md q-pr-md"
          size="large"
          to="/posts"
          label="Post Berikutnya"
          outline
          color="purple"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardPost from "@components/commons/cards/CardPost";

export default {
  name: "box-post",
  data() {
    return {
      data: [1, 2, 3],
    };
  },
  components: {
    "card-post": CardPost,
  },
};
</script>
