<template>
  <Head>
    <Title>{{ data.title || DEFAULT_TITLE }}</Title>
  </Head>
</template>

<script setup>
import { toRefs } from "vue";

// consts
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

// define props
const props = defineProps({
  data: {
    type: Object,
    default() {
      return {
        title: `${DEFAULT_TITLE} - ${DEFAULT_DESCRIPTION}`,
        description: "Tech from engineer perspective, MauCoding by YMG Team.",
      };
    },
  },
});

const { data } = toRefs(props);
</script>
