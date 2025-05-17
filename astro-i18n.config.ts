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
        Forside: "Home",
        brunch: "brunch",
        tærter: "tarts",
        smørrebrød: "open-faced sandwiches",
        boller: "buns",
        "Kær Kaffebar logo": "Kær Kaffebar logo",
        "...den hyggeligste kaffebar i Valby":
          "...the coziest coffee bar in Valby",
        Menu: "Menu",
        "croissant illustration": "croissant illustration",
        "iskaffe og vaffel": "iced coffee and waffle",
        "brunch tallerken": "brunch plate",
        "latte art closeup": "latte art closeup",
        "økologi logo": "organic logo",
        blåbær: "blueberries",
        "kaffekande illustration": "coffee pot illustration",
        kanelsnurre: "cinnamon roll",
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
    "/arrangement": {
      en: {
        "Arrangementer & events hos Kær Kaffebar":
          "Events & gatherings at Kær Kaffebar",
        "Skab uforglemmelige øjeblikke ved at":
          "Create unforgettable moments by",
        "afholde dit næste arrangement i de stemningsfulde lokaler hos Kær Kaffebar!":
          "hosting your next event in the cozy atmosphere of Kær Kaffebar!",
        "Vi stiller gerne vores hyggelige og indbydende rammer til rådighed":
          "We're happy to offer our cozy and inviting space",
        "for alt fra fødselsdagsfester og firmaarrangementer til PR-events og meget mere –":
          "for everything from birthday parties and corporate events to PR events and much more –",
        "du skal blot sende os en forespørgsel, så tager vi den derfra.":
          "just send us an inquiry and we'll take it from there.",
        "Illustration of teapot": "Illustration of teapot",
        "Picture of small cakes": "Picture of small cakes",
        "Arrangement": "Gathering",
        "Hold dit næste arrangement hos os": "Host your next gathering with us",
        "Små selskaber i hyggelige rammer – perfekt til fødselsdage, babyshowers og bogklubber.":
          "Small gatherings in cozy surroundings – perfect for birthdays, baby showers and book clubs.",
        "Hvis du leder efter det ideelle sted til dit næste arrangement, behøver du ikke lede længere end Kær Kaffebar. Send en forespørgelse om arrangement her og så vil vi kontakte dig angående flere detaljer. Lad os sammen skabe et mindeværdigt arrangement, som dine gæster vil tale om i lang tid fremover!":
          "If you're looking for the ideal place for your next gathering, look no further than Kær Kaffebar. Send an inquiry here and we'll contact you with more details. Let's create a memorable event together that your guests will talk about for a long time!",
        "Event": "Event",
        "Planlæg et unikt event på Kær Kaffebar":
          "Plan a unique event at Kær Kaffebar",
        "Workshops, pop-ups eller private aftenarrangementer? Vi hjælper dig med at skabe stemningen":
          "Workshops, pop-ups or private evening events? We'll help you create the right atmosphere",
        "Hos Kær Kaffebar tilbyder vi den perfekte ramme for dit næste PR-event. Vores hyggelige og stemningsfulde café i hjertet af Valby er ideel til at skabe en intim og imødekommende atmosfære, hvor din virksomheds budskab kan komme til sin ret. Med vores flotte indretning, udendørs siddepladser i solen og lækre udvalg af økologisk kaffe, friskpresset juice, og hjemmelavede specialiteter, kan du give dine gæster en uforglemmelig oplevelse. Uanset om det drejer sig om en produktlancering, en netværksbegivenhed eller andet, kan vi skræddersy arrangementet til dine behov. Vi tilbyder muligheden for at reservere hele caféen og vores dedikerede personale sørger for, at alt forløber glat. Vi kan desuden arrangere specialmenuer, der passer til dit event, med tanke for dit brands identitet.":
          "At Kær Kaffebar we offer the perfect setting for your next PR event. Our cozy and atmospheric café in the heart of Valby is ideal for creating an intimate and welcoming atmosphere where your company's message can shine. With our beautiful interior, outdoor seating in the sun and delicious selection of organic coffee, freshly pressed juice, and homemade specialties, you can give your guests an unforgettable experience. Whether it's a product launch, networking event or something else, we can tailor the event to your needs. We offer the option to reserve the entire café and our dedicated staff will ensure everything runs smoothly. We can also arrange special menus that suit your event, with consideration for your brand identity.",
        "Catering": "Catering",
        "Catering med kærlighed og kvalitet": "Catering with love and quality",
        "Bestil morgenmad, frokost eller kagebord til din næste sammenkomst – lavet med omtanke.":
          "Order breakfast, lunch or a cake table for your next gathering – made with care.",
        "Lad os tage os af maden – så du kan tage dig af gæsterne. Hos Kær Kaffebar tilbyder vi catering til både private og professionelle arrangementer, store som små. Uanset om du planlægger en fødselsdag, et firmaevent, en reception eller et møde, står vi klar med smagfulde løsninger, der passer perfekt til anledningen. Vi laver alt fra friskbagte kager og brød til lette anretninger, brunch, frokost og specialkaffe. Vores retter er lavet med kærlighed og omtanke – og vi bruger kun friske, økologiske råvarer, hvor det er muligt. Har du særlige ønsker eller behov? Vi skræddersyr gerne en menu, der matcher dine præferencer og dit arrangement – både i smag og stil.":
          "Let us take care of the food – so you can take care of the guests. At Kær Kaffebar we offer catering for both private and professional events, large and small. Whether you're planning a birthday, corporate event, reception or meeting, we're ready with tasty solutions that perfectly suit the occasion. We make everything from freshly baked cakes and bread to light dishes, brunch, lunch and specialty coffee. Our dishes are made with love and care – and we only use fresh, organic ingredients when possible. Do you have special wishes or needs? We're happy to tailor a menu that matches your preferences and your event – both in taste and style.",
        "Kage og bestilling": "Cakes & orders",
        "Bestil hjemmelavede kager til enhver lejlighed":
          "Order homemade cakes for any occasion",
        "Bryllup, fødselsdage eller bare fordi - vi bager med smag og stil":
          "Weddings, birthdays or just because - we bake with taste and style",
        "Skal der lidt ekstra sødt på bordet? Bestil en eller flere af vores populære hjemmebagte kager til din fest eller fejring. Vi bager efter sæson og tilbyder alt fra klassiske favoritter til unikke specialiteter.":
          "Need something extra sweet on the table? Order one or more of our popular homemade cakes for your party or celebration. We bake according to season and offer everything from classic favorites to unique specialties.",
      },
    },
  },
});
