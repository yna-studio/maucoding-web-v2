<template>
  <div>
    <q-card class="q-mb-lg" flat bordered>
      <NuxtLink :to="`/post/${toSlug(`${data.nospace_title} ${data._id}`)}`">
        <q-img height="200px" alt="data.title" :src="data.image['600']" />
      </NuxtLink>
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
            v-for="tag in data.tags"
            :to="`/tag/${tag.toLowerCase()}`"
            class="text-orange-9 q-pr-sm"
            >{{ tag.toUpperCase() }}</NuxtLink
          >
        </div>
        <NuxtLink :to="targetLink">
          <div
            style="
              height: 100px;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            "
            class="text-h6 q-mt-sm q-mb-xs"
          >
            {{ data.title }}
          </div>
          <div class="text-caption">
            {{ truncate(stripTags(data.content), 100, "...") }}
          </div>
        </NuxtLink>
        <div class="row q-pt-md justify-between">
          <div class="text-caption">
            by
            <NuxtLink :to="`/author/${data.author.username}`">{{
              data.author.username
            }}</NuxtLink>
          </div>
          <div class="text-caption text-grey">
            {{ data.views }} views .
            {{ dayJS(data.updated_on * 1000).fromNow() }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { toSlug, stripTags, truncate } from "@helpers/stringManager";
import dayJS from "@helpers/dateTime";

export default {
  name: "card-post",
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    stripTags,
    truncate,
    toSlug,
    dayJS,
  },
};
</script>
