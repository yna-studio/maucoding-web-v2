<template>
  <template-post-lists />
</template>

<script>
import TemplatePostList from "@components/templates/PostLists";

export default {
  name: "page-posts-by-tag",
  components: {
    "template-post-lists": TemplatePostList,
  },
};
</script>
