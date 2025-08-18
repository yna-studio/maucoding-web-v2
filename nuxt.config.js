// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: process.env.PORT || 20231,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: "MauCoding - Tech from engineer perspective",
      htmlAttrs: {
        lang: "id",
      },
      script:
        process.env.NODE_ENV !== "development"
          ? [
              {
                hid: "ganal-script1",
                src: "https://www.googletagmanager.com/gtag/js?id=G-9Q4K6G3KHT",
                type: "text/javascript",
                charset: "utf-8",
                async: true,
                defer: true,
              },
              {
                hid: "ganal-script2",
                innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-9Q4K6G3KHT');
          `,
                type: "text/javascript",
                charset: "utf-8",
                async: true,
                defer: true,
              },
              {
                hid: "gads",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4468477322781117",
                crossorigin: "anonymous",
              },
            ]
          : [],
    },
  },
  build: {
    transpile: ["axios"],
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
    "@helpers": "/helpers",
    "@consts": "/consts",
    "@services": "/services",
  },
  css: ["@public/assets/style/style.1.0.0.css"],
  meta: {
    title: "MauCoding - Tech From Engineer Perspective",
    description:
      "MauCoding by YMG, kami membahas seputar dunia tech dari Enginer Perspective. Saat ini berfokus pada dunia software development.",
  },
  runtimeConfig: {
    public: {
      APP_KEY: process.env.APP_KEY,
      MCDG_WEB_HOST: process.env.MCDG_WEB_HOST,
    },
  },
  compatibilityDate: "2025-08-18",
});
