<template>
  <div class="p-t-lg p-blg">
    <div v-if="data?.status === 200" class="row q-col-gutter-sm">
      <div
        v-for="(n, key) in data?.result"
        :class="size === 'small' ? 'col-md-6 col-xs-12' : 'col-md-4 col-xs-12'"
      >
        <card-post :key="n._id" :data="n" />
      </div>
    </div>
    <div
      v-if="data?.message && (!data.result || data?.result?.length === 0)"
      class="text-center text-grey q-pa-lg"
    >
      {{ data.message }}
    </div>
    <Spinner v-if="!data.status || loading" />
  </div>
</template>

<script>
import DefaultLayout from "@components/layouts/default-layout";
import CardPost from "@components/commons/cards/CardPost";
import Spinner from "@components/commons/loaders/GlobalSpiner";

export default {
  name: "box-post",
  data() {
    return {
    };
  },
  components: {
    "default-layout": DefaultLayout,
    "card-post": CardPost,
    Spinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false
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
    mounted() {
     
    },
    watch: {
      
    },
  },
};
</script>
