<template>
  <div>
    <q-card flat bordered>
      <NuxtLink :to="targetLink">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </NuxtLink>
      <q-card-section>
        <div>
          <NuxtLink :to="'/tag/javascript'" class="text-orange-9 q-pr-sm"
            >JAVASCRIPT</NuxtLink
          >
          <NuxtLink :to="'/tag/javascript'" class="text-orange-9 q-pr-sm"
            >NEXT JS</NuxtLink
          >
        </div>
        <NuxtLink :to="targetLink">
          <div class="text-h5 q-mt-sm q-mb-xs">
            Title Super Long How it Will Happen
          </div>
          <div class="text-caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </NuxtLink>
        <div class="row q-pt-md justify-between">
          <div class="text-caption">
            by <NuxtLink :to="'/author/yussan'">yussan</NuxtLink>
          </div>
          <div class="text-caption text-grey">5mins ago</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "card-post",
  data() {
    return {
      targetLink: "/post/post-titile-asdsad34234",
    };
  },
};
</script>
