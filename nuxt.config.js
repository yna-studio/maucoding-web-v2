// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 20231,
  },
  vite: {
    server: {},
  },
  modules: ["nuxt-quasar-ui"],
  quasar: {
    /* */
  },
  alias: {
    "@": "/",
    "@components": "/components",
    "@public": "/public",
  },
  css: ["@public/assets/style/style.1.0.0.css"],
  head: {
    title: "MauCoding - Tech From Engineer Perspective",
    description:
      "MauCoding by YMG, kami membahas seputar dunia tech dari Enginer Perspective. Saat ini berfokus pada dunia software development.",
  },
});
