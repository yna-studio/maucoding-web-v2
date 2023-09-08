<template>
  <div>
    <q-card class="q-mb-lg" flat bordered>
      <NuxtLink :to="`/post/${`${data.nospace_title}-${data._id}`}`">
        <q-img height="200px" :alt="data.title" :src="data.image['600']" />
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
              height: 90px;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              line-height: 1.4;
            "
            class="text-h6 q-mt-sm q-mb-xs"
          >
            <strong> {{ data.title }}</strong>
          </div>
          <div class="text-caption text-grey-80">
            {{ truncate(stripTags(data.content), 100, "...") }}
          </div>
        </NuxtLink>

        <q-item class="no-padding q-mt-lg">
          <q-item-section side class="q-pr-sm">
            <NuxtLink :to="`/author/${data?.author.username}`">
              <q-avatar round size="40px">
                <img :src="data?.author.avatar.small" />
                <!-- <q-badge floating color="teal">new</q-badge> -->
              </q-avatar>
            </NuxtLink>
          </q-item-section>
          <q-item-section>
            <q-item-label caption
              ><NuxtLink :to="`/author/${data?.author.username}`">{{
                data?.author.username
              }}</NuxtLink></q-item-label
            >
            <q-item-label caption
              >Posted {{ dayJS(data?.updated_on * 1000).fromNow() }} •
              {{ data?.views | 1 }} Dibaca
            </q-item-label>
          </q-item-section>
          <!-- <q-item-section side> 3 min ago </q-item-section> -->
        </q-item>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { stripTags, truncate } from "@helpers/stringManager";
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
    dayJS,
  },
};
</script>
