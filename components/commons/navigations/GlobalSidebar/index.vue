<template>
  <div>
    <title-medium :title="'Popular Content'" />
    <list-post-popular />

    <div class="q-mb-lg"></div>
    <div class="q-mb-lg"></div>
    <title-medium :title="'Popular Tags'" />
    <card-tags-popular />
  </div>
</template>
<script>
import TitleMedium from "@components/commons/headings/title-medium";
import CardTagsPopular from "@components/commons/cards/CardTagsSidebar";
import ListPostsPopular from "@components/commons/lists/ListPostsSidebar";

export default {
  components: {
    "title-medium": TitleMedium,
    "card-tags-popular": CardTagsPopular,
    "list-post-popular": ListPostsPopular,
  },
};
</script>
