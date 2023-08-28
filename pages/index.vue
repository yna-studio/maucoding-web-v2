<template>
  <default-layout>
    <title-medium :title="'Latest Post'" />
    <box-posts />
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
