// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
  ],
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-jsonld',
    'nuxt-gtag',
    'nuxt-seo-experiments',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
  ],
  site: {
    url: 'https://mojezapiski.pl',
  },
  gtag: {
    id: 'G-GMH8QEFZH6',
  },
  sitemap: {
    siteUrl: 'https://mojezapiski.pl',
    trailingSlash: true,
    xsl: false,
    credits: false,
  },
  pwa: {
    manifest: {
      name: 'MojeZapiski.pl',
      short_name: 'MojeZapiski.pl',
      theme_color: '#007bff',
      lang: 'pl-PL',
    },
    workbox: {
      offlineGoogleAnalytics: false,
    },
  },
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: {
        wght: [400, 700],
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pl-PL',
        class: 'h-100',
      },
      headAttrs: {
        itemscope: true,
        itemtype: 'https://schema.org/WebPage',
      },
      bodyAttrs: {
        class: 'd-flex flex-column h-100',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [],
      script: [
        {
          defer: true,
          src: '//cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      trailingSlash: true,
      website: {
        baseUrl: 'https://mojezapiski.pl',
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
})
