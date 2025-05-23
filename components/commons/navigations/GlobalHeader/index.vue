<template>
  <div>
    <q-toolbar class="bg-white text-gray">
      <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
      <q-img
        style="cursor: pointer"
        @click="() => $router.push('/')"
        src="/assets/images/MCDG v3 square 2x - icon only.png"
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
      <q-btn
        @click="() => (search = { ...search, ...{ show: !search.show } })"
        flat
        round
        dense
        icon="search"
      />
    </q-toolbar>

    <!-- do search -->
    <div v-if="search.show">
      <div className="text-right">
        <q-input
          style="padding: 0 15px 20px; font-size: 1rem"
          v-model="search.value"
          :dense="dense"
          placeholder="Ketik keyword pencarian disini..."
          autofocus
          @keydown.enter="
            $router.push(`/search/${toSlug(search.value.toLowerCase())}`)
          "
        />
        <!-- <Input type="text" :value="search.value" /> -->
      </div>
    </div>
    <!-- end of do search -->
  </div>
</template>
<script>
import { toSlug } from "@helpers/stringManager";

export default {
  data() {
    const { path } = this.$route;
    const tabActive = `/${path.split("/")[1]}`;
    return {
      tab: tabActive,
      search: {
        show: false,
        value: "",
      },
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
  methods: {
    toSlug,
  },
};
</script>
