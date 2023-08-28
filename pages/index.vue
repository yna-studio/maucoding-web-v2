<template>
  <default-layout>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-12">
          <!-- left block about posts cards -->
          <title-medium :title="'Latest Post'" />
          <box-posts />
          <!-- end of left block about posts cards -->
        </div>
        <div class="col-lg-4 col-xs-12 q-pl-md">
          <!-- home right sidebar -->
          <title-medium :title="'Popular Content'" />
          <list-post-popular />

          <div class="q-mb-lg"></div>
          <div class="q-mb-lg"></div>
          <title-medium :title="'Popular Tags'" />
          <card-tags-popular />
          <!-- end of home right sidebar -->
        </div>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from "@components/layouts/default-layout";
import TitleMedium from "@components/commons/headings/title-medium";
import BoxPosts from "@components/commons/boxs/BoxPosts";
import CardTagsPopular from "@components/commons/cards/CardTagsSidebar";
import ListPostsPopular from "@components/commons/lists/ListPostsSidebar";

export default {
  components: {
    "default-layout": DefaultLayout,
    "title-medium": TitleMedium,
    "box-posts": BoxPosts,
    "card-tags-popular": CardTagsPopular,
    "list-post-popular": ListPostsPopular,
  },
};
</script>
