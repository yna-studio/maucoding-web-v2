<template>
  <template-post-lists />
</template>

<script>
import TemplatePostList from "@components/templates/PostLists";

export default {
  name: "page-posts",
  components: {
    "template-post-lists": TemplatePostList,
  },
};
</script>
