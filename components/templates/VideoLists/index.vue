<template>
  <DefaultLayout>
    <TitleMedium :title="metaData.title" />
    <BoxVideos :data="videoData" />
    <div class="col-12 q-pa-lg text-center">
      <q-btn
        v-if="videoData?.value?.length"
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
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// components
import DefaultLayout from "@components/layouts/default-layout";
import BoxVideos from "@components/commons/boxs/BoxVideos";
import TitleMedium from "@components/commons/headings/title-medium";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";

// services
import { fetchVideos } from "@services/videos";

const route = useRoute();

const DEFAULT_BREADCRUMB_DATA = [{ to: "/videos", label: "Videos" }];

const DEFAULT_QUERY = {
  limit: 9,
  tag: route.params.tag || "",
  draft: false,
};

// initiate refs
const currentPage = ref(0);
const videoData = ref({});
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

// initiate functions
const fetchData = async (nextQuery) => {
  const query = { ...nextQuery, ...DEFAULT_QUERY };
  // if (query.page !== 0) query.page = DEFAULT_QUERY.limit * (query.page - 1);

  const response = await fetchVideos({ query });
  if (!query.lastupdatedon) {
    videoData.value = response;
  } else {
    //do loadmore
    videoData.value.message = response.message;
    videoData.value.status = response.status;

    if (response?.result?.length > 0) {
      videoData.value.result = [...videoData.value.result, ...response.result];
    }
  }
};

// onMounted
onMounted(() => {
  fetchData({ page: currentPage.value });
});

// init functions
const loadMoreHandler = () => {
  const nextQuery = {};
  // get lastupdateon to loadmore
  nextQuery.lastcreatedon =
    videoData.value.result[videoData.value.result.length - 1].createdAt;
  return fetchData(nextQuery);
};
</script>
