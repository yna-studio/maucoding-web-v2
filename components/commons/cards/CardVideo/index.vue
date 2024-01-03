<template>
  <q-card class="q-mb-lg" flat bordered>
    <NuxtLink
      style="position: relative"
      to="/video/this-is-video-title-hjsdaf6234234"
    >
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
      <q-img
        height="200px"
        alt="title"
        src="https://res.cloudinary.com/dhjkktmal/image/upload/v1691150717/maucoding/2023/PyScript-Menjalankan-Python-di-HTML-Ada-Ada-Aja/2b144f828b23b1e9db4647ef7f11cc87.png.png"
      />
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
        <NuxtLink to="/tag" class="text-orange-9 q-pr-sm">TAG 1</NuxtLink>
      </div>
      <NuxtLink :to="targetLink">
        <div
          style="
            height: 35px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 1.4;
          "
          class="text-h6 q-mt-sm q-mb-xs"
        >
          <strong> Video Title</strong>
        </div>
      </NuxtLink>

      <q-item class="no-padding q-mt-lg">
        <q-item-section>
          <q-item-label caption>Posted 2 days ago • 60M Ditonton </q-item-label>
        </q-item-section>
        <!-- <q-item-section side> 3 min ago </q-item-section> -->
      </q-item>
    </q-card-section>
    <!-- end of text under thumb -->
  </q-card>
</template>

<script>
export default {
  name: "card-video",
};
</script>
