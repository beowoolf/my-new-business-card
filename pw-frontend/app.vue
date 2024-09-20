<template>
    <div class="d-flex flex-column h-100">
      <header> 
        <!-- Fixed navbar -->
        <BootstrapNavbar
          toggleable="md"
          type="dark"
          variant="dark"
          class="fixed-top"
        >
          <div class="container-fluid">
            <BootstrapNavbarBrand to="/" title="O mnie"
              ><logo
            /></BootstrapNavbarBrand>
  
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div id="navbarCollapse" class="collapse navbar-collapse">
              <BootstrapNavbarNav class="ms-auto">
                <BootstrapNavItem
                  link-classes="text-white"
                  to="/"
                  :link-attrs="{ title: 'O mnie' }"
                  >O mnie</BootstrapNavItem
                >
                <BootstrapNavItem
                  link-classes="text-white"
                  to="/moje-kwalifikacje/"
                  :link-attrs="{ title: 'Moje kwalifikacje' }"
                  >Moje kwalifikacje</BootstrapNavItem
                >
                <BootstrapNavItem
                  v-if="!modeSwitcher"
                  href="#"
                  :link-attrs="{ title: 'tryb jasny' }"
                >
                  <span @click="setColorModeTheme('light')">
                    <BootstrapIcon
                      :icon="$colorMode.value == 'dark' ? 'sun' : 'sun-fill'"
                      :class="
                        $colorMode.value == 'light'
                          ? 'text-warning'
                          : 'text-warning'
                      "
                    ></BootstrapIcon>
                  </span>
                </BootstrapNavItem>
                <BootstrapNavItem
                  v-if="!modeSwitcher"
                  href="#"
                  :link-attrs="{ title: 'tryb ciemny' }"
                >
                  <span @click="setColorModeTheme('dark')">
                    <BootstrapIcon
                      :icon="
                        $colorMode.value == 'light' ? 'moon' : 'moon-fill'
                      "
                      :class="
                        $colorMode.value == 'light'
                          ? 'text-white'
                          : 'text-white'
                      "
                    ></BootstrapIcon>
                  </span>
                </BootstrapNavItem>
                <BootstrapNavItem
                  v-if="modeSwitcher"
                  href="#"
                  :link-attrs="{
                    title:
                      'włącz tryb ' +
                      ($colorMode.value == 'dark' ? 'jasny' : 'ciemny'),
                  }"
                >
                  <span
                    @click="
                      setColorModeTheme(
                        $colorMode.value == 'dark' ? 'light' : 'dark',
                      )
                    "
                  >
                    <BootstrapIcon
                      :icon="$colorMode.value == 'dark' ? 'sun' : 'sun-fill'"
                      :class="
                        $colorMode.value == 'light'
                          ? 'text-warning'
                          : 'text-warning'
                      "
                    ></BootstrapIcon>
                    /
                    <BootstrapIcon
                      :icon="
                        $colorMode.value == 'light' ? 'moon' : 'moon-fill'
                      "
                      :class="
                        $colorMode.value == 'light'
                          ? 'text-white'
                          : 'text-white'
                      "
                    ></BootstrapIcon>
                  </span>
                </BootstrapNavItem>
              </BootstrapNavbarNav>
            </div>
          </div>
        </BootstrapNavbar>
      </header>
      <main :class="$colorMode.value + '-theme'">
        <NuxtPage />
      </main>
      <footer
        class="footer mt-auto py-3"
        :class="$colorMode.value == 'light' ? 'bg-dark' : 'bg-dark'"
      >
        <div class="container-fluid">
          <span
            :class="
              $colorMode.value == 'light' ? 'text-white' : 'text-white'
            "
          >
            Copyrights&copy; {{ currentYear }} Paweł Wilczek
          </span>
          <span style="float: right">
            <ExternalLink
              v-for="{ link, name } in socials"
              :key="link"
              :page="link"
              :anchor="'mój profil w serwisie ' + name"
              class="mx-2 text-white"
              rel="nofollow"
            >
              <BootstrapIcon :icon="name.toLowerCase()" />
            </ExternalLink>
          </span>
        </div>
      </footer>
      <StickyFooter v-if="!isCookiesAccepted" text="ABC">
        Ta strona korzysta z cookies, aby świadczyć usługi na najwyższym poziomie.
        Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
        <button
          class="btn btn-primary"
          style="background-color: #0051a8"
          @click.prevent="acceptCookies()"
        >
          Zgoda
        </button>
        <ExternalLink
          class="btn btn-link text-warning"
          anchor="Dowiedz się więcej"
          page="http://wszystkoociasteczkach.pl"
          rel="nofollow"
          >Dowiedz się więcej</ExternalLink
        >
      </StickyFooter>
    </div>
  </template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      isCookiesAccepted: true,
      modeSwitcher: false,
      socials: [
        {
          link: 'https://www.facebook.com/profile.php?id=100002685182268',
          name: 'Facebook',
        },
        {
          link: 'https://twitter.com/CyberZiom',
          name: 'Twitter',
        },
        {
          link: 'https://pl.linkedin.com/in/pawe%C5%82-wilczek-885803151',
          name: 'LinkedIn',
        },
        {
          link: 'https://www.instagram.com/developerwolf/?hl=pl',
          name: 'Instagram',
        },
      ],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
  async mounted() {
    const workbox = await window.$workbox
    if (workbox) {
      workbox.addEventListener('installed', (event) => {
        // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
        if (event.isUpdate) {
          // whatever logic you want to use to notify the user that they need to refresh the page.
          console.log('Update was applied. :-D')
          // this.$bvToast.show('update-toast')
        }
      })
    }
    this.isCookiesAccepted = useCookie('isCookiesAccepted') || false
  },
  methods: {
    acceptCookies() {
        this.isCookiesAccepted = useCookie('isCookiesAccepted', {
            maxAge: 60 * 60 * 24 * 366 * 10,
        }) || false
      this.isCookiesAccepted = true
    },
    setColorModeTheme(color) {
        this.$colorMode.preference = useCookie('colorModeTheme', {
            maxAge: 60 * 60 * 24 * 366,
        }) || this.$colorMode.value
      this.$colorMode.preference = color
    },
  },
}
</script>

<style>
body {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body,
.light-theme {
  background-color: rgb(239 239 239 / 100%);
  color: rgba(0 0 0 / 80%);
}

.dark-mode body,
.dark-theme {
  background-color: rgb(38 39 47 / 100%);
  color: #ebf4f1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt,
#__layout {
  display: flex !important;
  display: -ms-flexbox !important;
  flex-direction: column !important;
  -ms-flex-direction: column !important;
  height: 100% !important;
}

main {
  padding: 100px 15px 0;
}

.footer {
  background-color: #f5f5f5;
}

.footer > .container-fluid {
  padding-right: 15px;
  padding-left: 15px;
}

.text-primary {
  color: #0068d6 !important;
}

.light-mode a {
  color: #000;
}

.dark-mode a {
  color: #fff;
}

.light-mode .btn {
  color: #fff;
}
</style>
