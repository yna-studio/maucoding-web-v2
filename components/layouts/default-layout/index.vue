<template>
  <div>
    <global-header />
    <div class="q-ma-lg"></div>
    <slot></slot>
    <div class="q-ma-lg"></div>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from "@components/commons/navigations/global-header";
import GlobalFooter from "@components/commons/navigations/GlobalFooter";

export default {
  components: {
    "global-header": GlobalHeader,
    "global-footer": GlobalFooter,
  },
};
</script>
