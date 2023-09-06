<template>
  <DefaultLayout>
    <TitleMedium :title="metaData.title" />
    <BoxVideos />
  </DefaultLayout>
</template>

<script setup>
const DEFAULT_BREADCRUMB_DATA = [{ to: "/videos", label: "Videos" }];

const metaData = computed({
  get() {
    const newBreadcrumbData = [...DEFAULT_BREADCRUMB_DATA];
    let title = "Videos";

    return {
      title,
      breadcrumbData: newBreadcrumbData,
    };
  },
});

// components
import DefaultLayout from "@components/layouts/default-layout";
import BoxVideos from "@components/commons/boxs/BoxVideos";
import TitleMedium from "@components/commons/headings/title-medium";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";
</script>
