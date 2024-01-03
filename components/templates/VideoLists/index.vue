<template>
  <DefaultLayout>
    <TitleMedium :title="metaData.title" />
    <BoxVideos />
    <div class="col-12 q-pa-lg text-center">
      <q-btn
        class="q-pl-md q-pr-md"
        size="large"
        label="Load More"
        outline
        color="purple"
      />
    </div>
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
