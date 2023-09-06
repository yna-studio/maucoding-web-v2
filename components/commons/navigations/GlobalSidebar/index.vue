<template>
  <div>
    <TitleMedium :title="'Popular Posts'" />
    <ListPostsPopular :data="popularPostResponse" />
    <div class="q-mb-lg"></div>
    <div class="q-mb-lg"></div>
    <TitleMedium :title="'Popular Tags'" />
    <CardTagsPopular />
  </div>
</template>
<script setup>
// components
import TitleMedium from "@components/commons/headings/title-medium";
import CardTagsPopular from "@components/commons/cards/CardTagsSidebar";
import ListPostsPopular from "@components/commons/lists/ListPostsSidebar";

// services
import { fetchPosts } from "@services/posts";

const POPULAR_POST_DEFAULT_QUERY = {
  draft: false,
  featured: true,
  limit: 6,
};

// fetch data
const popularPostResponse = await fetchPosts({
  query: POPULAR_POST_DEFAULT_QUERY,
});
</script>
