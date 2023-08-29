<template>
  <default-layout>
    <title-medium :title="'Latest Post'" />
    <box-posts />
    <div class="row text-center">
      <div class="col-12 q-pa-lg">
        <q-btn
          class="q-pl-md q-pr-md"
          size="large"
          to="/posts"
          label="Semua Post"
          outline
          color="purple"
        />
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from "@components/layouts/default-layout";
import TitleMedium from "@components/commons/headings/title-medium";
import BoxPosts from "@components/commons/boxs/BoxPosts";

export default {
  components: {
    "default-layout": DefaultLayout,
    "title-medium": TitleMedium,
    "box-posts": BoxPosts,
  },
};
</script>
