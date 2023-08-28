<template>
  <div>
    <q-list>
      <q-item v-for="n in posts" class="no-padding q-mb-lg">
        <q-item-section>
          <NuxtLink to="/">
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption lines="2"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </NuxtLink>
        </q-item-section>

        <q-item-section side top>
          <NuxtLink to="/">
            <q-item-label caption>5 min ago</q-item-label>
          </NuxtLink>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [1, 2, 4, 5, 6],
    };
  },
};
</script>
