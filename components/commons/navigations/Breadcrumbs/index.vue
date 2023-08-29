<template>
  <div class="q-pb-lg q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el
        v-for="(n, key) in data"
        :label="n.label"
        :to="key + 1 === data.length ? '' : n.to"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
