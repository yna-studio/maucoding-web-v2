<template>
  <DefaultLayout>
    <Breadcrumb :data="breadcrumbData" />
    <TitleMedium :title="`Video Search Result &quot;${keyword}&quot;`" />
    <VideoPosts :size="'large'" :data="videosData" />

    <br />
    <br />
    <br />

    <TitleMedium :title="`Post Search Result &quot;${keyword}&quot;`" />
    <BoxPosts :size="'large'" :data="postsData" />
  </DefaultLayout>
</template>

<script setup>
import { useRoute } from "vue-router";

// components
import DefaultLayout from "@components/layouts/default-layout";
import TitleMedium from "@components/commons/headings/title-medium";
import BoxPosts from "@components/commons/boxs/BoxPosts";
import VideoPosts from "@components/commons/boxs/BoxVideos";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";

// services
import { fetchPosts } from "@services/posts";
import { fetchVideos } from "@services/videos";

/***************
 ** CONSTS
 ***************/
const route = useRoute();
const keyword = route?.params?.keyword?.replace(/-/g, "");
const title = `Pencarian "${keyword}"`;
const defaultQuery = {
  limit: 6,
  keyword,
  draft: false,
};
const breadcrumbData = [
  { to: `/search/${route?.params?.keyword}`, label: `Search: "${keyword}"` },
];

/***************
 ** REFS
 ***************/
const postsData = ref({});
const videosData = ref({});

/***************
 ** FETCHERS
 ***************/

//  fetcher to get data post list
const fetchPostsData = async (nextQuery = {}) => {
  const query = { ...nextQuery, ...defaultQuery };
  const response = await fetchPosts({ query });

  if (!query.lastupdatedon) {
    postsData.value = response;
  }
};

// fetcher to get video list
const fetchVideosData = async (nextQuery = {}) => {
  const query = { ...nextQuery, ...defaultQuery };
  const response = await fetchVideos({ query });

  if (!query.lastcreateat) {
    videosData.value = response;
  }
};

/***************
 ** LIFECYCLE
 ***************/

// setup meta title and desc
useHead({
  title: `${title} - MauCoding`,
  meta: [{ name: "description", content: `Hasil dari ${title.toLowerCase()}` }],
});

// onMounted
onMounted(() => {
  fetchPostsData();
  fetchVideosData();
});
</script>
