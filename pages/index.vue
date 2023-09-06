<template>
  <DefaultLayout>
    <div>
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
      <!-- <br />
      <TitleMedium :title="'Latest Videos'" />
      <BoxVideos /> -->
    </div>
  </DefaultLayout>
</template>

<script setup>
// components
import DefaultLayout from "@components/layouts/default-layout";
import TitleMedium from "@components/commons/headings/title-medium";
import BoxPosts from "@components/commons/boxs/BoxPosts";
import BoxVideos from "@components/commons/boxs/BoxVideos";

// consts
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

// helpers
import { metaGeneratorObject } from "@helpers/metaGenerator";

// services
import { fetchPosts } from "@services/posts";

const DEFAULT_QUERY = {
  draft: false,
  limit: 6,
};

const title = `${DEFAULT_TITLE} - ${DEFAULT_DESCRIPTION}`;
const latestPostResponse = await fetchPosts({ query: DEFAULT_QUERY });
</script>
