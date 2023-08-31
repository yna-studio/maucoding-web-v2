<template>
  <default-layout>
    <breadcrumb :data="breadcrumbs" />
    <title-medium :title="title" />
    <box-posts :size="'large'" />
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
      </div></div
  ></default-layout>
</template>

<script>
import DefaultLayout from "@components/layouts/default-layout";
import BoxPosts from "@components/commons/boxs/BoxPosts";
import TitleMedium from "@components/commons/headings/title-medium";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";

export default {
  name: "page-posts",
  data() {
    const { tagName, username } = this.$route.params;
    let title = "Post";
    const breadcrumbs = [{ to: "/posts", label: "Posts" }];
    if (tagName) {
      title += ` by tag "${tagName}"`;
      breadcrumbs.push({ label: title });
    }
    if (username) {
      title += ` by ${username}`;
      breadcrumbs.push({ label: title });
    }
    return {
      title,
      breadcrumbs,
    };
  },
  components: {
    "box-posts": BoxPosts,
    "default-layout": DefaultLayout,
    "title-medium": TitleMedium,
    breadcrumb: Breadcrumb,
  },
  watch: {
    $route(nextVal) {
      console.log("nextVal", nextVal);
    },
  },
};
</script>
