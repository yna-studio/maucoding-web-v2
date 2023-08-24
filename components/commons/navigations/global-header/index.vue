<template>
  <div>
    <q-toolbar class="bg-white text-gray">
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <q-img src="/assets/images/mcdg-logo-large.svg" width="40px" />

      <q-toolbar-title><strong>MauCoding</strong></q-toolbar-title>
      <q-tabs class="mcdg-tab" v-model="tab" shrink>
        <q-tab class="q-pa-md" name="tab1" label="HOME" />
        <q-tab class="q-pa-md" name="tab2" label="POSTS" />
        <q-tab class="q-pa-md" name="tab3" label="VIDEOS" />
      </q-tabs>
      <q-btn flat round dense icon="search" />
    </q-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: "tab1",
    };
  },
};
</script>
