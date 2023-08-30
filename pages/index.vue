<template>
  <DefaultLayout>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <TitleMedium :title="'Latest Post'" />
    <BoxPosts :data="latestPostResponse" />
    <div v-if="latestPostResponse.status === 200" class="row text-center">
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
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@components/layouts/default-layout";
import TitleMedium from "@components/commons/headings/title-medium";
import BoxPosts from "@components/commons/boxs/BoxPosts";

import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

import { metaGeneratorObject } from "@helpers/metaGenerator";

import { fetchPosts } from "@services/posts";

const DEFAULT_QUERY = {
  draft: false,
};

const config = useRuntimeConfig();
const title = `${DEFAULT_TITLE} - ${DEFAULT_DESCRIPTION}`;
const latestPostResponse = await fetchPosts({ query: DEFAULT_QUERY });
// components: {
//   "default-layout": DefaultLayout,
//   "title-medium": TitleMedium,
//   "box-posts": BoxPosts,
// },
// async fetch() {
//   const latestPostResponse = {
//     status: 200,
//     data: [1, 2, 3],
//   };
//   console.log(latestPostResponse);
//   this.latestPostResponse = latestPostResponse;
// },
</script>
<!-- 
<script>
import DefaultLayout from "@components/layouts/default-layout";
import TitleMedium from "@components/commons/headings/title-medium";
import BoxPosts from "@components/commons/boxs/BoxPosts";

import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

import { metaGeneratorObject } from "@helpers/metaGenerator";

export default {
  data() {
    return {
      title: `${DEFAULT_TITLE} - ${DEFAULT_DESCRIPTION}`,
      latestPostResponse: {},
    };
  },
  components: {
    "default-layout": DefaultLayout,
    "title-medium": TitleMedium,
    "box-posts": BoxPosts,
  },
  async fetch() {
    const latestPostResponse = {
      status: 200,
      data: [1, 2, 3],
    };
    console.log(latestPostResponse);
    this.latestPostResponse = latestPostResponse;
  },
};
</script> -->
