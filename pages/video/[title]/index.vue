<template>
  <default-layout>
    <MetaData :data="metaData" />
    <div class="text-left">
      <Breadcrumb :data="breadcrumbData" />
      <!-- this is iframe -->
      <div style="background: #000" class="q-pt-md q-pb-md q-mb-lg">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </div>
      <!-- end of this is iframe -->

      <!-- avatar -->
      <div>
        <q-item class="no-padding">
          <q-item-section side>
            <NuxtLink :to="`/author`">
              <q-avatar round size="48px">
                <img
                  src="https://maucoding.com/assets/images/mcdg-logo-large.svg"
                  alt="MauCoding avatar"
                />
                <!-- <q-badge floating color="teal">new</q-badge> -->
              </q-avatar>
            </NuxtLink>
          </q-item-section>
          <q-item-section>
            <q-item-label
              ><NuxtLink :to="`/author`">MauGowes</NuxtLink></q-item-label
            >
            <q-item-label caption
              >Posted 12 days ago • 200rb Dibaca
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <!-- end of avatar -->

      <h1 class="text-weight-bold" fontSize="md">This Is Video Title</h1>
      <div class="q-mb-lg">
        <strong> Tags:&nbsp;&nbsp;</strong>
        <NuxtLink
          style="text-transform: uppersize"
          class="text-orange-9 q-pr-sm"
          to="`/tag/`"
          >TAG 1</NuxtLink
        >
        <NuxtLink
          style="text-transform: uppersize"
          class="text-orange-9 q-pr-sm"
          to="`/tag/`"
          >TAG 2</NuxtLink
        >
      </div>
      <!-- video caption -->
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          ornare imperdiet. In vitae interdum dui. Aliquam scelerisque et eros
          quis pellentesque. Nam ipsum nunc, tincidunt vitae mauris a, eleifend
          vehicula felis. Aliquam commodo mauris in consequat varius. Phasellus
          sed odio non ipsum feugiat ultrices.
        </p>

        <p>
          Sed vitae massa malesuada, auctor nunc id, facilisis odio. Integer in
          molestie nisl, vel dignissim lectus. Etiam iaculis nunc eget metus
          iaculis mattis. Ut bibendum fringilla interdum. Mauris accumsan
          aliquam velit, sit amet faucibus justo placerat a. Duis sit amet
          maximus nulla. Ut eu dignissim urna. Aenean velit nisi, facilisis sit
          amet dui a, aliquam bibendum nulla. Morbi non congue quam, eget
          bibendum orci. Nunc suscipit diam quis tellus imperdiet porttitor.
        </p>
      </article>
      <!-- end video caption -->
    </div>
  </default-layout>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

// helpers
import dayJS from "@helpers/dateTime";
import { sealGenerator } from "@helpers/clientApiCaller";
import { stripTags, truncate } from "@helpers/stringManager";

// consts
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@consts/meta";

// components
import DefaultLayout from "@components/layouts/default-layout";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";
import MetaData from "@components/commons/seo/MetaData";
import Spiner from "@components/commons/loaders/GlobalSpiner";

// services
import { fetchPostDetail, endpointGetPostDetail } from "@services/posts";

const DEFAULT_BREADCRUMB_DATA = [
  { to: "/videos", label: "Videos" },
  { to: "/videos/title-id", label: "Videos Post Title" },
];

const router = useRouter();
const route = useRoute();
const postId = computed({
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
const postData = ref({});

const { data, error } = await useFetch(endpointGetPostDetail(postId.value), {
  headers: {
    seal: sealGenerator(),
  },
});

// generate metadata and breadcrumb
if (data.value._id) {
  metaData.value = {
    title: data.value.title,
    description: truncate(stripTags(data.value.content), 300, "..."),
  };
  breadcrumbData.value = [
    ...DEFAULT_BREADCRUMB_DATA,
    { label: data.value.title },
  ];
}
</script>
