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
        "Arrangement & Event": "Events & Parties",
        "Kærs løbeklub": "Kær's Running Club",
        "Book bord": "Book a Table",
      },
    },
    "/": {
      en: {
        "“Kær Kaffebar er skabt ud fra en drøm om nærvær, god kaffe – og lysten til at gøre en forskel i lokalsamfundet.”":
          "“Kær Kaffebar was born from a dream of connection, great coffee – and the desire to make a difference in the local community.”",
        "Forside": "Home",
        "brunch": "brunch",
        "tærter": "tarts",
        "smørrebrød": "open-faced sandwiches",
        "boller": "buns",
        "Kær Kaffebar logo": "Kær Kaffebar logo",
        "...den hyggeligste kaffebar i Valby": "...the coziest coffee bar in Valby",
        "Menu": "Menu",
        "croissant illustration": "croissant illustration",
        "iskaffe og vaffel": "iced coffee and waffle",
        "brunch tallerken": "brunch plate",
        "latte art closeup": "latte art closeup",
        "økologi logo": "organic logo",
        "blåbær": "blueberries",
        "kaffekande illustration": "coffee pot illustration",
        "kanelsnurre": "cinnamon roll",
        "Se menu": "View menu",
        "Indehaver af Kær Kaffebar": "Owner of Kær Kaffebar",
        "Afternoon Tea i Valby": "Afternoon Tea in Valby",
        "Perfekt til venindetid, fejring eller bare lidt ekstra selvforkælelse.":
          "Perfect for girl time, celebrations or just a little extra self-indulgence.",
        "Hos Kær Kaffebar inviterer vi dig til en klassisk Afternoon Tea – fyldt med hjemmelavede kager, friskbagte scones, sandwiches og økologisk te ad libitum. Alt serveret med [kær]lighed, i ægte vintagekopper, hvor detaljerne gør hele forskellen.":
          "At Kær Kaffebar we invite you to a classic Afternoon Tea – filled with homemade cakes, freshly baked scones, sandwiches and organic tea ad libitum. Everything served with [care]love, in genuine vintage cups where the details make all the difference.",
        "afternoon tea billede": "afternoon tea image",
        "Book bord": "Book a table",
        "arrangemnt illustration": "event illustration",
        "Book vores lokale til dit næste arrangement":
          "Book our venue for your next event",
        "Skab mindeværdige øjeblikke i hjertet af Valby.":
          "Create memorable moments in the heart of Valby.",
        "Drømmer du om en hyggelig, personlig ramme til dit næste arrangement? Hos Kær Kaffebar åbner vi dørene for alt fra fødselsdage og firmaevents til PR-events og små, private fester. Vores café byder på en varm atmosfære, smuk indretning og økologiske specialiteter, der sætter prikken over i'et på din dag.":
          "Do you dream of a cozy, personal setting for your next event? At Kær Kaffebar we open our doors for everything from birthdays and corporate events to PR events and small private parties. Our café offers a warm atmosphere, beautiful decor and organic specialties that will put the finishing touch on your day.",
        "Læs mere": "Read more",
        "blåbær og pære illustration": "blueberries and pear illustration",
        "kaffekop illustration": "coffee cup illustration",
        "Fra friskbagte boller til brunchtallerkener – vi gør os umage hver dag for at servere mad, der smager af [kær]lighed.":
          "From freshly baked buns to brunch plates – we take care every day to serve food that tastes of [care]love.",
        "to citroner illustration": "two lemons illustration",
        "Kær's kaffe": "Kær's coffee",
        "God kaffe. God stemning. Godt selskab.":
          "Great coffee. Great atmosphere. Great company.",
        "Hos Kær Kaffebar brygger vi ikke bare kaffe – vi skaber oplevelser. Vi samarbejder med Just Coffee, der leverer økologiske, bæredygtige bønner af højeste kvalitet, så hver eneste kop hos os er fuld af smag, kærlighed og omtanke.":
          "At Kær Kaffebar we don't just brew coffee – we create experiences. We collaborate with Just Coffee who deliver organic, sustainable beans of the highest quality, so every single cup with us is full of flavor, love and care.",
        "just coffee kaffe bønner poser": "just coffee coffee bean bags",
        "Kær løbeklub": "Kær Running Club",
        "Vidste du, at vi også løber sammen?":
          "Did you know we also run together?",
        "Kær Kaffebar's løbeklub": "Kær Kaffebar's Running Club",
        "handler om": "is about",
        "glæde ved bevægelse – ikke præstationer.":
          "the joy of movement – not performance.",
        "løbe billede": "running image",
        "Alle er velkomne – uanset form eller erfaring. Kom med næste gang og få motion, smil og måske en ny ven på vejen!":
          "Everyone is welcome – regardless of shape or experience. Join us next time for exercise, smiles and maybe a new friend along the way!",
        "løbende kaffekop illustration": "running coffee cup illustration",
        "tilmeld dig løbeklub": "sign up for running club",
        "Tilmeld dig løbeklub": "Sign up for running club",
        "Kær Kaffebar stempelkort": "Kær Kaffebar loyalty card",
        "Få din 9. kop på huset med et gratis kaffe stempelkort":
          "Get your 9th cup on us with a free coffee loyalty card",
        "rødt hvidt stempelkort af kær kaffebar":
          "red white loyalty card of kær kaffebar",
      },
    },
  },
});