import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  primaryLocale: "da", // default app locale
  secondaryLocales: ["en"], // other supported locales
  fallbackLocale: "da", // fallback locale (on missing translation)
  trailingSlash: "never", // "never" or "always"
  run: "client+server", // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
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
  }, // { [translation_group1]: { [locale1]: {}, ... } }
  routes: {}, // { [secondary_locale1]: { about: "about-translated", ... } }
});
