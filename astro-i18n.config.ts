import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  primaryLocale: "da", // default app locale
  secondaryLocales: ["en"], // other supported locales
  fallbackLocale: "da", // fallback locale (on missing translation)
  trailingSlash: "never", // "never" or "always"
  run: "client+server", // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
  routes: {}, // { [secondary_locale1]: { about: "about-translated", ... } }
  translationLoadingRules: [], // per page group loading
  translationDirectory: {}, // translation directory names
  translations: {
    common: {
      en: {
        "Arrangement & Event": "Arrangement & Event",
        "Kærs løbeklub": "Kærs runningclub",
        "Book bord": "Book table",
      },
    },
    "/": {
      en: {
        "“Kær Kaffebar er skabt ud fra en drøm om nærvær, god kaffe – og lysten til at gøre en forskel i lokalsamfundet.”":
          "“Kær Kaffebar was created from a dream of connection, great coffee – and the desire to make a difference in the local community.”",
      },
    },
  },
});
