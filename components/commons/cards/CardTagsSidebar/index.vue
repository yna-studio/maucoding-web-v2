<template>
  <div>
    <q-btn
      v-for="tag in tags"
      class="q-mr-sm q-mb-sm mcdg-btn-tags"
      size="small"
      :to="`/tag/${tag}`"
      :label="tag"
      outline
      color="purple"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        "javascript",
        "reactjs",
        "nextjs",
        "nuxtjs",
        "vue",
        "go",
        "echo",
        "flask",
        "python",
        "chat gpt",
      ],
    };
  },
};
</script>
