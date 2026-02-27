<template>
  <div class="container">
    <div class="grid q-pt-lg q-pb-lg">
      <div class="col">
        <div style="width:80px">
        <a href="https://id.seedbacklink.com/"><img title="seedbacklink" src="https://id.seedbacklink.com/wp-content/uploads/2025/04/badge-seedbacklink-media.png" alt="seedbacklink" width="100%" height="auto"/></a>
        </div>
      </div>
      <div class="col">
        MauCoding &copy; {{ now.getFullYear() }} powered by
        <a target="_blank" rel="noopener noreferer" href="http://byymg.com"
          ><strong>YMG Team</strong></a
        >
      </div>
      <div class="col">
        <span :to="menu.link" :key="menu.name" v-for="(menu, key) in menus">
          <a
            target="_blank"
            rel="noopener noreferer"
            :href="menu.link"
            class="text-purple"
            >{{ menu.name }}</a
          >
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
