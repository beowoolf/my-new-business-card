// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-04",
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.css",
  ],
  ssr: true,
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-jsonld",
    "nuxt-gtag",
    "nuxt-seo-experiments",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
  ],
  site: {
    url: "https://pawel-wilczek.mojezapiski.pl",
  },
  gtag: {
    id: "G-BQD0EGRB6N"
  },
  sitemap: {
    siteUrl: "https://pawel-wilczek.mojezapiski.pl",
    trailingSlash: true,
    xsl: false,
    credits: false,
  },
  pwa: {
    manifest: {
      name: "Paweł Wilczek",
      short_name: "Paweł Wilczek",
      theme_color: "#007bff",
      lang: "pl-PL",
    },
    workbox: {
      offlineGoogleAnalytics: false,
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Roboto: {
        wght: [400, 700],
      },
    },
  },
  app: {
      head: {
          htmlAttrs: {
            lang: "pl-PL",
            class: "h-100",
          },
          headAttrs: {
            itemscope: true,
            itemtype: "https://schema.org/WebPage",
          },
              bodyAttrs: {
            class: "d-flex flex-column h-100",
          },
          charset: "utf-8",
          viewport: "width=device-width, initial-scale=1",
          link: [],
          script: [
              {
                defer: true,
                src: "//cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
              },
          ],
      },
  },
  runtimeConfig: {
    public: {
      trailingSlash: true,
      website: {
        baseUrl: "https://pawel-wilczek.mojezapiski.pl",
      },
    },
  },
  nitro: {
    externals: {
      traceOptions: {
        base: process.cwd(),
      },
    },
  },
});
