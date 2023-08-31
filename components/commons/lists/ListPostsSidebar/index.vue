<template>
  <div>
    <q-list>
      <q-item v-for="n in data.result" class="no-padding q-mb-lg">
        <q-item-section>
          <NuxtLink :to="`/post/${toSlug(`${n.nospace_title} ${n._id}`)}`">
            <q-item-label>{{ n.title }}</q-item-label>
            <q-item-label caption lines="2"
              >{{ truncate(stripTags(n.content), 150, "...") }}.</q-item-label
            >
          </NuxtLink>
        </q-item-section>

        <q-item-section side top>
          <NuxtLink :to="`/post/${toSlug(`${n.nospace_title} ${n._id}`)}`">
            <q-item-label caption>{{
              dayJS(n.updated_on * 1000).fromNow()
            }}</q-item-label>
          </NuxtLink>
        </q-item-section>
      </q-item>
    </q-list>

    <Spinner v-if="!data || !data.status || loading" />
  </div>
</template>
<script setup>
// components
import Spinner from "@components/commons/loaders/GlobalSpiner";

// helpers
import { toSlug, stripTags, truncate } from "@helpers/stringManager";
import dayJS from "@helpers/dateTime";

// define props
const props = defineProps({
  data: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>
