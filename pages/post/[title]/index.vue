<template>
  <default-layout>
    <MetaData :data="metaData" />
    <Spiner v-if="!data.status" />
    <div v-else>
      <div v-if="!data?._id" class="text-center text-grey-9 q-pa-lg">
        {{ data?.message || "Post tidak ditemukan" }}
      </div>
      <div v-else>
        <Breadcrumb :data="breadcrumbData" />
        <h1 class="text-weight-bold" fontSize="md">
          {{ data?.title }}
        </h1>
        <div class="text-grey q-mb-lg">
          <strong>Posted by</strong>&nbsp;
          <NuxtLink :to="`/author/${data?.author.username}`">{{
            data?.author.username
          }}</NuxtLink>
          •
          {{ data?.views }} Views •
          {{ dayJS(data?.updated_on * 1000).fromNow() }}
          <br />
          <strong>Tags</strong>&nbsp;
          <NuxtLink v-for="(tag, key) in data?.tags" :to="`/tag/${tag}`"
            >{{ tag }}{{ key < data?.tags.length && ", " }}</NuxtLink
          >
        </div>
        <div class="q-pt-sd q-pb-md">
          <q-img :alt="data?.title" :src="data?.image.original" />
        </div>
        <article v-html="data?.content" />
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

// helpers
import dayJS from "@helpers/dateTime";
import { sealGenerator } from "@helpers/clientApiCaller";
import { stripTags, truncate } from "@helpers/stringManager";

// consts
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

// components
import DefaultLayout from "@components/layouts/default-layout";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";
import MetaData from "@components/commons/seo/MetaData";
import Spiner from "@components/commons/loaders/GlobalSpiner";

// services
import { fetchPostDetail, endpointGetPostDetail } from "@services/posts";

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
  title: "Post",
  description: "Post by MauCoding",
});
const breadcrumbData = ref(DEFAULT_BREADCRUMB_DATA);
const postData = ref({});

const { data, error } = await useFetch(endpointGetPostDetail(postId.value), {
  headers: {
    seal: sealGenerator(),
  },
});

// generate metadata and breadcrumb
if (data.value._id) {
  metaData.value = {
    title: data.value.title,
    description: truncate(stripTags(data.value.content), 300, "..."),
  };
  breadcrumbData.value = [
    ...DEFAULT_BREADCRUMB_DATA,
    { label: data.value.title },
  ];
}
</script>
