<template>
  <DefaultLayout>
    <Breadcrumb :data="metaData.breadcrumbData" />
    <TitleMedium :title="metaData.title" />
    <BoxPosts :size="'large'" :data="postData" />
    <div
      v-if="
        postData?.result?.length >= DEFAULT_QUERY.limit &&
        postData.status === 200
      "
      class="row text-center"
    >
      <div class="col-12 q-pa-lg">
        <q-btn
          @click="loadMoreHandler()"
          class="q-pl-md q-pr-md"
          size="large"
          label="Load More"
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
  limit: 9,
  tag: route.params.tagName || "",
  username: route.params.username || "",
  draft: false,
};

// initiate refs
const currentPage = ref(0);
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

// fetch post list to api
const fetchData = async (nextQuery) => {
  const query = { ...nextQuery, ...DEFAULT_QUERY };
  // if (query.page !== 0) query.page = DEFAULT_QUERY.limit * (query.page - 1);

  const response = await fetchPosts({ query });
  if (!query.lastupdatedon) {
    postData.value = response;
  } else {
    //do loadmore
    postData.value.message = response.message;
    postData.value.status = response.status;

    if (response?.result?.length > 0) {
      postData.value.result = [...postData.value.result, ...response.result];
    }
  }
};

// onMounted
onMounted(() => {
  fetchData({ page: currentPage.value });
});

// functions
const loadMoreHandler = () => {
  // const nextPage = currentPage.value + 1;
  // currentPage.value = nextPage;
  const nextQuery = {};
  nextQuery.lastupdatedon =
    postData.value.result[postData.value.result.length - 1].updated_on;
  return fetchData(nextQuery);
};
</script>
