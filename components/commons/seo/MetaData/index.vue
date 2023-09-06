<template>
  <Head>
    <Title>{{
      data.title || `${DEFAULT_TITLE} - ${DEFAULT_DESCRIPTION}`
    }}</Title>
    <Meta
      name="description"
      :content="
        data.description ||
        'Tech from engineer perspective, MauCoding by YMG Team.'
      "
    />
    <!-- start open graph -->
    <Meta
      property="og:title"
      :content="data.title || `${DEFAULT_TITLE} - ${DEFAULT_DESCRIPTION}`"
    />
    <Meta property="og:type" content="article" />
    <Meta property="og:url" :content="data.url || 'https://maucoding.com'" />
    <Meta
      property="og:image"
      content="https://ia.media-imdb.com/images/rock.jpg"
    />
    <Meta property="og:site_name" content="MauCoding" />
    <!-- end of open graph -->
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
      return {};
    },
  },
});

const { data } = toRefs(props);
</script>
