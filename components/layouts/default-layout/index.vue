<template>
  <div>
    <global-header />
    <div class="q-ma-lg"></div>
    <div v-if="isFullScreen" class="container"><slot></slot></div>
    <div v-else class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-12">
          <slot></slot>
        </div>
        <div class="col-lg-4 col-xs-12 q-pl-lg mcdg-sidebar">
          <!-- home right sidebar -->
          <sidebar />
          <!-- end of home right sidebar -->
        </div>
      </div>
    </div>
    <div class="q-ma-lg"></div>
    <global-footer />
  </div>
</template>

<style>
@media screen and (max-width: 800px) {
  .mcdg-sidebar {
    padding: 0 !important;
  }
}
</style>

<script>
import GlobalHeader from "@components/commons/navigations/GlobalHeader";
import GlobalFooter from "@components/commons/navigations/GlobalFooter";
import Sidebar from "@components/commons/navigations/GlobalSidebar";

const ALWAYS_FULLSCREEN = ["/posts", "/tag", "/author"];

export default {
  data() {
    const { path } = this.$route;
    const firstPath = `/${path.split("/")[1]}`;
    return {
      isFullScreen: ALWAYS_FULLSCREEN.includes(firstPath),
    };
  },
  components: {
    "global-header": GlobalHeader,
    "global-footer": GlobalFooter,
    sidebar: Sidebar,
  },
  watch: {
    $route(newVal) {
      const { path } = newVal;
      const firstPath = `/${path.split("/")[1]}`;
      const isFullScreen = ALWAYS_FULLSCREEN.includes(firstPath);
      if (this.isFullScreen !== isFullScreen) this.isFullScreen = isFullScreen;
    },
  },
};
</script>
