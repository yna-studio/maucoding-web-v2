<template>
  <default-layout>
    <MetaData :data="metaData" />
    <Spiner v-if="!postData.status" />
    <div v-else>
      <div v-if="!postData._id" class="text-center text-grey-9 q-pa-lg">
        Post tidak ditemukan
      </div>
      <div v-else>
        <Breadcrumb :data="breadcrumbData" />
        <h1 class="text-weight-bold" fontSize="md">{{ postData.title }}</h1>
        <div class="text-grey q-mb-lg">
          <strong>Posted by</strong>&nbsp;
          <NuxtLink :to="`/author/${postData.author.username}`">{{
            postData.author.username
          }}</NuxtLink>
          •
          {{ postData.views }} Views •
          {{ dayJS(postData.updated_on * 1000).fromNow() }}
          <br />
          <strong>Tags</strong>&nbsp;
          <NuxtLink v-for="(tag, key) in postData.tags" :to="`/tag/${tag}`"
            >{{ tag }}{{ key < postData.tags.length && ", " }}</NuxtLink
          >
        </div>
        <div class="q-pt-sd q-pb-md">
          <img
            style="max-width: 100%"
            :alt="postData.title"
            :src="postData.image.original"
          />
        </div>
        <article v-html="postData.content" />
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

// helpers
import dayJS from "@helpers/dateTime";

// consts
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

// components
import DefaultLayout from "@components/layouts/default-layout";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";
import MetaData from "@components/commons/seo/MetaData";
import Spiner from "@components/commons/loaders/GlobalSpiner";

// services
import { fetchPostDetail } from "@services/posts";

const DEFAULT_BREADCRUMB_DATA = [{ to: "/posts", label: "Posts" }];

const router = useRouter();
const route = useRoute();
const postId = computed({
  get() {
    const titleArr = route.params.title.split("-");
    return titleArr[titleArr.length - 1];
  },
  // set(newVal) {
  // }
});
const metaData = ref({
  title: "",
  description: "",
});
const breadcrumbData = ref(DEFAULT_BREADCRUMB_DATA);
const postData = ref({});

// fetch post detail to api
const fetchData = async () => {
  const response = await fetchPostDetail({ postId: postId.value });
  postData.value = response;
  if (response._id) {
    const newBreadcrumbData = [...DEFAULT_BREADCRUMB_DATA];
    newBreadcrumbData.push({ label: response.title });
    breadcrumbData.value = newBreadcrumbData;
  }
};

// onMounted
onMounted(() => {
  fetchData();
});
</script>
