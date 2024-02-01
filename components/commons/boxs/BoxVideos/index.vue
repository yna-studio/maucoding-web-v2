<template>
  <div class="p-t-lg p-blg">
    <div v-if="data?.result?.length > 0" class="row q-col-gutter-sm">
      <div v-for="(n, key) in data.result" class="col-md-6 col-sm-6 col-xs-6">
        <card-video :key="key" :data="n" />
      </div>
    </div>
    <div
      v-if="data?.message && (!data.result || data?.result?.length === 0)"
      class="text-center text-grey q-pa-lg"
    >
      {{ data.message }}
    </div>
    <spinner v-if="!data.status || loading" />
  </div>
</template>

<script>
import CardVideo from "@components/commons/cards/CardVideo";
import Spinner from "@components/commons/loaders/GlobalSpiner";

export default {
  name: "box-videos",
  components: {
    "card-video": CardVideo,
    spinner: Spinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
