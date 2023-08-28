<template>
  <div class="container">
    <div class="grid q-pt-lg q-pb-lg">
      <div class="col">
        MauCoding &copy; {{ now.getFullYear() }} powered by
        <a target="_blank" rel="noopener noreferer" href="http://byymg.com"
          ><strong>YMG Teams</strong></a
        >
      </div>
      <div class="col">
        <span :to="menu.link" :key="menu.name" v-for="(menu, key) in menus">
          <NuxtLink>{{ menu.name }}</NuxtLink>
          <span v-if="key < menus.length - 1" class="q-pl-sm q-pr-sm">•</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const STATIC_MENUS = [
  {
    name: "About",
    link: "/posts",
  },
  {
    name: "Privacy Policy",
    link: "/posts",
  },
  {
    name: "Posts",
    link: "/posts",
  },
];
export default {
  data() {
    return {
      now: new Date(),
      menus: STATIC_MENUS,
    };
  },
};
</script>
