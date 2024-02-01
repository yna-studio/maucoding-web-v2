<template>
  <div>
    <q-toolbar class="bg-white text-gray">
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <q-img
        style="cursor: pointer"
        @click="() => $router.push('/')"
        src="/assets/images/mcdg-logo-large.svg"
        width="40px"
      />
      <q-toolbar-title style="cursor: pointer" @click="() => $router.push('/')"
        ><strong>MauCoding</strong></q-toolbar-title
      >
      <q-tabs class="mcdg-tab" v-model="tab" shrink>
        <q-tab class="q-pa-md" name="/" label="HOME" />
        <q-tab class="q-pa-md" name="/posts" label="POSTS" />
        <q-tab class="q-pa-md" name="/videos" label="VIDEOS" />
      </q-tabs>
      <q-btn flat round dense icon="search" />
    </q-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    const { path } = this.$route;
    const tabActive = `/${path.split("/")[1]}`;
    return {
      tab: tabActive,
    };
  },
  watch: {
    $router(newVal, oldVal) {
      // console.log("newVal", newVal);
    },
    tab(newVal, oldVal) {
      return this.$router.push(newVal);
    },
  },
};
</script>
