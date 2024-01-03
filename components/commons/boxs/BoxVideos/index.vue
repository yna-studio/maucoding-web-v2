<template>
  <div class="p-t-lg p-blg">
    <div class="row q-col-gutter-sm">
      <div v-for="(n, key) in [1, 2, 3, 4]" class="col-md-6 col-sm-6 col-xs-6">
        <card-video />
      </div>
    </div>
  </div>
</template>

<script>
import CardVideo from "@components/commons/cards/CardVideo";

export default {
  name: "box-videos",
  components: {
    "card-video": CardVideo,
  },
};
</script>
