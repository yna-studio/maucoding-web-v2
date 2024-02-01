<template>
  <q-card class="q-mb-lg" flat bordered>
    <NuxtLink style="position: relative" :to="targetLink">
      <!-- play button absolute in center with zindex + 1 -->
      <q-img
        style="
          z-index: 1;
          position: absolute;
          z-index: 1;
          top: calc(50% - 30px);
          left: calc(50% - 30px);
        "
        height="60px"
        width="60px"
        alt="video play button"
        src="/assets/svg/play-button.svg"
      />

      <!-- video thumbnails -->
      <q-img height="200px" :alt="data.title" :src="data.thumbnails" />
    </NuxtLink>

    <!-- text under thumb -->
    <q-card-section>
      <div
        class="text-orange-9"
        style="
          height: 18px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        "
      >
        <NuxtLink
          v-for="n in data.tags"
          :to="`/videos?tag=${n}`"
          class="text-orange-9 q-pr-sm"
          >{{ n.toUpperCase() }}</NuxtLink
        >
      </div>
      <NuxtLink :to="targetLink">
        <div
          style="
            height: 62px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 1.4;
          "
          class="text-h6 q-mt-sm q-mb-xs"
        >
          <strong>{{ data.title }}</strong>
        </div>
      </NuxtLink>

      <q-item class="no-padding q-mt-sm">
        <q-item-section>
          <q-item-label caption
            >Uploaded {{ dayJS(data?.createdAt).fromNow() }} •
            {{ data?.views | 1 }} views
          </q-item-label>
        </q-item-section>
        <!-- <q-item-section side> 3 min ago </q-item-section> -->
      </q-item>
    </q-card-section>
    <!-- end of text under thumb -->
  </q-card>
</template>

<script>
import dayJS from "@helpers/dateTime";
import { toSlug } from "string-manager";

export default {
  name: "card-video",
  data() {
    return {
      targetLink: `/video/${toSlug(
        `${this.data.title.toLowerCase()}-${this.data._id}`
      )}`,
    };
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    dayJS,
  },
};
</script>
