<template>
  <DefaultLayout>
    <Breadcrumb :data="metaData.breadcrumbData" />
    <TitleMedium :title="metaData.title" />
    <BoxPosts :size="'large'" :data="postData" />
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
  ></DefaultLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// components
import DefaultLayout from "@components/layouts/default-layout";
import BoxPosts from "@components/commons/boxs/BoxPosts";
import TitleMedium from "@components/commons/headings/title-medium";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";

// services
import { fetchPosts } from "@services/posts";

const route = useRoute();
const DEFAULT_BREADCRUMB_DATA = [{ to: "/posts", label: "Posts" }];

const DEFAULT_QUERY = {
  limit: 8,
  page: 1,
  tag: route.params.tagName || "",
  username: route.params.userName || "",
};

// initiate refs
const postData = ref({});
const metaData = computed({
  get() {
    const { tagName, username } = route.params;
    const newBreadcrumbData = [...DEFAULT_BREADCRUMB_DATA];
    let title = "Posts";
    if (tagName) {
      title += ` by tag "${tagName}"`;
      newBreadcrumbData.push({ label: title });
    }
    if (username) {
      title += ` by ${username}`;
      newBreadcrumbData.push({ label: title });
    }
    return {
      title,
      breadcrumbData: newBreadcrumbData,
    };
  },
});

// fetch post detail to api
const fetchData = async () => {
  const response = await fetchPosts({ query: DEFAULT_QUERY });
  postData.value = response;
};

// onMounted
onMounted(() => {
  fetchData();
});
</script>
