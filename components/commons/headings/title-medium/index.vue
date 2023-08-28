<template>
  <div
    class="mcdg-header-medium q-pt-sm q-pb-sm text-weight-bold text-left q-mb-md"
  >
    {{ title }}
  </div>
</template>

<style>
.mcdg-header-medium {
  font-size: 1.5em;
  border-bottom: solid 1px lightgray;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
