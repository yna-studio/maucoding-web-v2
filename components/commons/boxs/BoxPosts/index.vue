<template>
  <div class="p-t-lg p-blg">
    <div v-if="data?.status === 200" class="row q-col-gutter-md">
      <div
        v-for="(n, key) in data?.result"
        :class="size === 'small' ? 'col-lg-6 col-sm-12' : 'col-lg-4 col-sm-12'"
      >
        <card-post :key="n._id" :data="n" />
      </div>
    </div>
    <div
      v-if="data?.status && (!data.result || data?.result?.length === 0)"
      class="text-center text-grey q-pa-lg"
    >
      {{ data.message }}
    </div>
    <spiner v-if="!data || !data.status || loading" />
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
      loading: !this.data.status,
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
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    watch: {
      data(nextVal) {
        if (nextVal.status) {
          console.log("here...");
          this.loading = false;
        }
      },
    },
  },
};
</script>
