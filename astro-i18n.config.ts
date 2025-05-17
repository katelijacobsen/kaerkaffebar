import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  primaryLocale: "da", // default app locale
  secondaryLocales: ["en"], // other supported locales
  fallbackLocale: "da", // fallback locale (on missing translation)
  trailingSlash: "never", // "never" or "always"
  run: "client+server", // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
  translationLoadingRules: [], // per page group loading
  translationDirectory: "i18n", // translation directory names
  translations: {
    common: {
      da: () => import("./src/i18n/common/da.json"),
      en: () => import("./src/i18n/common/en.json"),
    },
  }, // { [translation_group1]: { [locale1]: {}, ... } }
  routes: {}, // { [secondary_locale1]: { about: "about-translated", ... } }
});
