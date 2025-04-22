<template>
  <default-layout>
    <MetaData :data="metaData" />
    <Spiner v-if="!data?.status" />
    <div v-else>
      <div v-if="!data?._id" class="text-center text-grey-9 q-pa-lg">
        {{ data?.message || "Post tidak ditemukan" }}
      </div>
      <div v-else class="text-left">
        <Breadcrumb :data="breadcrumbData" />
        <!-- this is iframe -->
        <div style="background: #000" class="q-pt-md q-pb-md q-mb-lg">
          <q-video :ratio="16 / 9" :src="data.iframeUrl" />
        </div>
        <!-- end of this is iframe -->

        <!-- avatar -->
        <div>
          <q-item class="no-padding">
            <q-item-section side>
              <NuxtLink :to="`/author`">
                <q-avatar round size="48px">
                  <img
                    src="https://maucoding.com/assets/images/mcdg-logo-large.png"
                    alt="MauCoding avatar"
                  />
                  <!-- <q-badge floating color="teal">new</q-badge> -->
                </q-avatar>
              </NuxtLink>
            </q-item-section>
            <q-item-section>
              <q-item-label
                ><NuxtLink :to="`/author`">MauCoding</NuxtLink></q-item-label
              >
              <q-item-label caption
                >Posted 12 days ago • 200rb Dibaca
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <!-- end of avatar -->

        <h1 class="text-weight-bold" fontSize="md">{{ data.title }}</h1>
        <div class="q-mb-lg">
          <strong> Tags:&nbsp;&nbsp;</strong>
          <NuxtLink
            v-for="n in data.tags"
            style="text-transform: uppersize"
            class="text-orange-9 q-pr-sm"
            :to="`/tag/${toSlug(n.toLowerCase())}`"
            >{{ n }}</NuxtLink
          >
        </div>
        <!-- video caption -->
        <article
          v-html="data?.description?.replace(/(?:\r\n|\r|\n)/g, '<br/>')"
        />
        <br />
        <!-- end video caption -->
      </div>
    </div>
  </default-layout>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

// helpers
import dayJS from "@helpers/dateTime";
import { sealGenerator } from "@helpers/clientApiCaller";
import { stripTags, truncate, toSlug } from "@helpers/stringManager";

// consts
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

// components
import DefaultLayout from "@components/layouts/default-layout";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";
import MetaData from "@components/commons/seo/MetaData";
import Spiner from "@components/commons/loaders/GlobalSpiner";

// services
import { fetchVideoDetail, endpointGetVideoDetail } from "@services/videos";

const router = useRouter();
const route = useRoute();

const DEFAULT_BREADCRUMB_DATA = [{ to: "/videos", label: "Videos" }];

const videoId = computed({
  get() {
    const titleArr = route.params.title.split("-");
    return titleArr[titleArr.length - 1];
  },
  // set(newVal) {
  // }
});
const metaData = ref({
  title: "Videos",
  description: "Videos by MauCoding",
});
const breadcrumbData = ref(DEFAULT_BREADCRUMB_DATA);

const { data = {}, error } = await useFetch(
  endpointGetVideoDetail(videoId.value),
  {
    headers: {
      seal: sealGenerator(),
    },
  }
);

// generate metadata and breadcrumb
if (data?.value?._id) {
  const { title, description } = data.value;
  metaData.value = {
    title,
    description: truncate(stripTags(description), 300, "..."),
  };
  breadcrumbData.value = [
    ...DEFAULT_BREADCRUMB_DATA,
    { to: `/videos/${route.params.title}`, label: data.value.title },
  ];
}
</script>
