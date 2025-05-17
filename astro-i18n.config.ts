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
        "Tak for din forespørgsel hos Kær Kaffebar":
          "Thank you for your inquiry at Kær Kaffebar",
        "Vi glæder os til at byde dig velkommen. Du vil høre fra os tilbage hurtigst muligt.":
          "We look forward to welcoming you. You'll hear back from us as soon as possible.",
        "Udfyld formular og send forespørgelse til enten arrangement, event eller catering":
          "Fill out the form and send an inquiry for either gathering, event or catering",
        "Fulde Navn": "Full Name",
        "Venligst udfylde dit fulde navn": "Please fill in your full name",
        Email: "Email",
        Telefonnummer: "Phone Number",
        Anledning: "Occasion",
        Arrangement: "Gathering",
        Catering: "Catering",
        Event: "Event",
        "Kage og bestilling": "Cakes & Orders",
        Tid: "Time",
        Dato: "Date",
        Allergier: "Allergies",
        Laktose: "Lactose",
        Laktosefri: "Lactose-free",
        Gluten: "Gluten",
        Glutenfri: "Gluten-free",
        Nødder: "Nuts",
        Nøddefri: "Nut-free",
        Fisk: "Fish",
        Fiskfri: "Fish-free",
        "Ønsker til menuen": "Menu preferences",
        Vegetarisk: "Vegetarian",
        Vegansk: "Vegan",
        Kommentar: "Comment",
        "Skriv dine kommentarer her...": "Write your comments here...",
        "Obs: Hvis du har nogen spørgsmål eller bekymringer":
          "Note: If you have any questions or concerns",
        "så kontakt os på 81 61 09 00": "please contact us at 81 61 09 00",
        "Send forespørgsel": "Send inquiry",
        "facebook ikon": "facebook icon",
        "instagram ikon": "instagram icon",
        "kær kaffebar logo i hvid": "kær kaffebar logo in white",
        Åbningstider: "Opening hours",
        "Mandag - Fredag": "Monday - Friday",
        "07:30 - 18:00": "07:30 AM - 06:00 PM",
        "Lørdag - Søndag": "Saturday - Sunday",
        Kontakt: "Contact",
        "Valby Langgade 86C St. Tv.": "Valby Langgade 86C St. Tv.",
        "Tlf: 81 61 09 00": "Phone: 81 61 09 00",
        "glad smiley": "happy smiley",
        "se smileyrapport": "view smiley report",
        Smileyrapport: "Smiley report",
        "Du kan til enhver tid ændre eller aflyse din booking via telefonnummer 81 61 09 00":
          "You can change or cancel your booking at any time by calling 81 61 09 00",
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
        Arrangement: "Gathering",
        "Hold dit næste arrangement hos os": "Host your next gathering with us",
        "Små selskaber i hyggelige rammer – perfekt til fødselsdage, babyshowers og bogklubber.":
          "Small gatherings in cozy surroundings – perfect for birthdays, baby showers and book clubs.",
        "Hvis du leder efter det ideelle sted til dit næste arrangement, behøver du ikke lede længere end Kær Kaffebar. Send en forespørgelse om arrangement her og så vil vi kontakte dig angående flere detaljer. Lad os sammen skabe et mindeværdigt arrangement, som dine gæster vil tale om i lang tid fremover!":
          "If you're looking for the ideal place for your next gathering, look no further than Kær Kaffebar. Send an inquiry here and we'll contact you with more details. Let's create a memorable event together that your guests will talk about for a long time!",
        Event: "Event",
        "Planlæg et unikt event på Kær Kaffebar":
          "Plan a unique event at Kær Kaffebar",
        "Workshops, pop-ups eller private aftenarrangementer? Vi hjælper dig med at skabe stemningen":
          "Workshops, pop-ups or private evening events? We'll help you create the right atmosphere",
        "Hos Kær Kaffebar tilbyder vi den perfekte ramme for dit næste PR-event. Vores hyggelige og stemningsfulde café i hjertet af Valby er ideel til at skabe en intim og imødekommende atmosfære, hvor din virksomheds budskab kan komme til sin ret. Med vores flotte indretning, udendørs siddepladser i solen og lækre udvalg af økologisk kaffe, friskpresset juice, og hjemmelavede specialiteter, kan du give dine gæster en uforglemmelig oplevelse. Uanset om det drejer sig om en produktlancering, en netværksbegivenhed eller andet, kan vi skræddersy arrangementet til dine behov. Vi tilbyder muligheden for at reservere hele caféen og vores dedikerede personale sørger for, at alt forløber glat. Vi kan desuden arrangere specialmenuer, der passer til dit event, med tanke for dit brands identitet.":
          "At Kær Kaffebar we offer the perfect setting for your next PR event. Our cozy and atmospheric café in the heart of Valby is ideal for creating an intimate and welcoming atmosphere where your company's message can shine. With our beautiful interior, outdoor seating in the sun and delicious selection of organic coffee, freshly pressed juice, and homemade specialties, you can give your guests an unforgettable experience. Whether it's a product launch, networking event or something else, we can tailor the event to your needs. We offer the option to reserve the entire café and our dedicated staff will ensure everything runs smoothly. We can also arrange special menus that suit your event, with consideration for your brand identity.",
        Catering: "Catering",
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
    "/menu": {
      en: {
        menu: "menu",
        Menu: "Menu",
        "pandekage illustration": "pancake illustration",
        Brunch: "Brunch",
        "09:00 - 14:00": "09:00 - 14:00",
        "Kær tallerken": "Kær plate",
        "Lille morgenkomplet med blødkogt øko æg, avokado, yogurt, frugt, smør, syltetøj, okø ost, brød":
          "Small morning complete with soft-boiled organic egg, avocado, yogurt, fruit, butter, jam, cheese, bread",
        Tilføj: "Add",
        "Æg 12 kr": "Egg 12 DKK",
        "Gammelknas 20 kr": "Aged cheese 20 DKK",
        "Fennikel salami 12 kr": "Fennel salami 12 DKK",
        "Pålægschokolade 12 kr": "Chocolate spread 12 DKK",
        "Tunsalat 20 kr": "Tuna salad 20 DKK",
        "Croissant 20 kr": "Croissant 20 DKK",
        "Kær brunch": "Kær brunch",
        "Stor brunch med æggekage af øko æg, røget oksepølse, hummus m. rugbrødschips, gammel knas ost, yogurt, fennikel salami, avokado, frugt, syltetøj, smør, brød":
          "Large brunch with organic scrambled eggs, smoked beef sausage, hummus with rye bread chips, aged cheese, yogurt, fennel salami, avocado, fruit, jam, butter, bread",
        Vafler: "Waffles",
        Valnødder: "Walnuts",
        "2 kærlighedsvafler med valnøddecremeost, brombærkompot, valnødder og skovsyre":
          "2 heart waffles with walnut cream cheese, blackberry compote, walnuts and wood sorrel",
        "Yoghurt og bær": "Yogurt and berries",
        "2 kærlighedsvafler med græsk yoghurt, bær og kokos flager":
          "2 heart waffles with Greek yogurt, berries and coconut flakes",
        "Choko og banan": "Chocolate and banana",
        "2 kærlighedsvafler med chokoladesov, banan, flødeskum og ristede hasselnødder":
          "2 heart waffles with chocolate sauce, banana, whipped cream and roasted hazelnuts",
        "Enkel vaffel": "Simple waffle",
        "1 kærlighedsvaffel med sirup": "1 heart waffle with syrup",
        Bowls: "Bowls",
        "Acaí bowl": "Açaí bowl",
        "Bær, banan og acaí blended og toppet med friske bær, kokos og hjemmeristet granola":
          "Berries, banana and açaí blended and topped with fresh berries, coconut and homemade granola",
        "Peanutbutter 5 kr": "Peanut butter 5 DKK",
        "Brombær og valnødder": "Blackberry and walnuts",
        "Græsk yoghurt med brombærkompot, valnødder, hjemmeristet granola og skovsyre":
          "Greek yogurt with blackberry compote, walnuts, homemade granola and wood sorrel",
        "Peanutbutter og banan": "Peanut butter and banana",
        "Græsk yoghurt, peanubutter, banan, bær, hjemmeristet granola, hampefrø og kanel":
          "Greek yogurt, peanut butter, banana, berries, homemade granola, hemp seeds and cinnamon",
        "croissant illustration": "croissant illustration",
        "Brød og pålæg": "Bread and toppings",
        croissant: "croissant",
        "BMO øko ost": "BMO organic cheese",
        "Hjemmebagt surdejsbolle m. øko ost":
          "Homemade sourdough bun with organic cheese",
        "BMO gammel knas": "BMO aged cheese",
        "Hjemmebagt surdejsbolle m. gammel knas ost":
          "Homemade sourdough bun with aged cheese",
        "Rugbrød og æg": "Rye bread and egg",
        "Smilende øko æg m. smør og ristet rugbrød":
          "Smiling organic egg with butter and toasted rye bread",
        "Fyldt croissant": "Filled croissant",
        "Croissant med ost, skinke og feldsalat. Lunet.":
          "Croissant with cheese, ham and lamb's lettuce. Warmed.",
        "Til brødet": "For the bread",
        "Gammel knas 12 kr": "Aged cheese 12 DKK",
        "Hjemmelavet syltetøj 10 kr": "Homemade jam 10 DKK",
        "Honning 5 kr": "Honey 5 DKK",
        Bagværk: "Baked goods",
        "Dagens bagværk varierer. Se montre for dagens udvalg.":
          "Today's baked goods vary. See display for today's selection.",
        Croissant: "Croissant",
        Frøsnapper: "Seed cracker",
        Cookie: "Cookie",
        Surdejsbolle: "Sourdough bun",
        "Øko kaneltop": "Organic cinnamon bun",
        Muffin: "Muffin",
        Cupcake: "Cupcake",
        Banankage: "Banana bread",
        Mousse: "Mousse",
        "smørrebrød illustration": "open-faced sandwich illustration",
        Smørrebrød: "Open-faced sandwiches",
        "Fra kl. 10": "From 10 AM",
        Avocadomad: "Avocado sandwich",
        "Avocado, hvidløgsspire, råsyltede rødløg, persillepesto":
          "Avocado, garlic sprouts, quick-pickled red onions, parsley pesto",
        "Vælg brød": "Choose bread",
        Rugbrød: "Rye bread",
        Focaccia: "Focaccia",
        "Smilende æg 20 kr": "Smiling egg 20 DKK",
        Kartoffelmad: "Potato sandwich",
        "Kartoffel, urtemayonnaise, gammel knas, feld salat, frisk timian og brøndkarse på rugbrød":
          "Potato, herb mayonnaise, aged cheese, lamb's lettuce, fresh thyme and cress on rye bread",
        Æggemad: "Egg sandwich",
        "Smilende æg, urtemayonnaise, brøndkarse, dild og feldsalat på rugbrød":
          "Smiling egg, herb mayonnaise, cress, dill and lamb's lettuce on rye bread",
        "Rejer 20 kr": "Shrimp 20 DKK",
        Sandwich: "Sandwich",
        Tunsandwich: "Tuna sandwich",
        "Rørt tunsalat, chili flager, hvidløgsspire, salat, pesto og agurk på vores hjemmebagte focaccia":
          "Mixed tuna salad, chili flakes, garlic sprouts, lettuce, pesto and cucumber on our homemade focaccia",
        "Fennikel salami og gammel knas": "Fennel salami and aged cheese",
        "Fennikel salami, gammel knas ost, tomat, råsyltede rødløg, salat, hummus, og pesto på vores hjemmebagte focaccia":
          "Fennel salami, aged cheese, tomato, quick-pickled red onions, lettuce, hummus, and pesto on our homemade focaccia",
        Falafelsandwich: "Falafel sandwich",
        "Falafel, avokado, hummus, salat, agurk, chili, mayo og syltede rødløg på vores hjemmebagte focaccia":
          "Falafel, avocado, hummus, lettuce, cucumber, chili, mayo and pickled red onions on our homemade focaccia",
        "Grillet toast": "Grilled toast",
        "Ost, skinke, bagt tomat, persillepesto og råsyltede rødløg på vores hjemmebagte focaccia":
          "Cheese, ham, baked tomato, parsley pesto and quick-pickled red onions on our homemade focaccia",
        Salat: "Salad",
        "Falafel bowl": "Falafel bowl",
        "Varm rødbedefalafel, avokado, salat, agurk, persilleolie, sesam og hummus":
          "Warm beetroot falafel, avocado, lettuce, cucumber, parsley oil, sesame and hummus",
        "kaffekop illustration": "coffee cup illustration",
        Kaffe: "Coffee",
        Espresso: "Espresso",
        Americano: "Americano",
        Cortado: "Cortado",
        "Flat white": "Flat white",
        Cappuccino: "Cappuccino",
        "Café latte": "Café latte",
        "Vanilje latte": "Vanilla latte",
        "Spiced latte": "Spiced latte",
        "Latte med hjemmelavet krydresirup og kanel":
          "Latte with homemade spice syrup and cinnamon",
        "Varme drikke": "Hot drinks",
        Te: "Tea",
        "Matcha latte": "Matcha latte",
        "Chai latte": "Chai latte",
        "Varm kakao": "Hot chocolate",
        "Varm hyldeblomst": "Warm elderflower",
        "kold drikkevare illustration": "cold drink illustration",
        "Kolde drikke": "Cold drinks",
        "kold drink": "cold drink",
        "Iced latte": "Iced latte",
        "Iced matcha": "Iced matcha",
        "Iced chai latte": "Iced chai latte",
        "Iced americano": "Iced americano",
        "Spiced iced latte": "Spiced iced latte",
        "Iskaffe med hjemmelavet krydresirup, kanel og flødeskum":
          "Iced coffee with homemade spice syrup, cinnamon and whipped cream",
        Hyldeblomst: "Elderflower",
        "Maté maté": "Maté maté",
        "IPA alkoholfri": "Non-alcoholic IPA",
        Cocio: "Cocio",
        "Dansk vand": "Danish water",
        "BIE's øko": "BIE's organic",
        "Rabarber / solbær": "Rhubarb / blackcurrant",
        "Æblemost / æble og ingefær": "Apple juice / apple and ginger",
        Hjemmelavet: "Homemade",
        "Lime lemonade": "Lime lemonade",
        "Mynte lemonade": "Mint lemonade",
        "Brombær lemonade": "Blackberry lemonade",
        Smoothie: "Smoothie",
        "Se dagens smoothie": "See today's smoothie",
        "Friskpresset appelsin juice": "Freshly squeezed orange juice",
        "Ingefærshot 10 kr": "Ginger shot 10 DKK",
        "billede af to poser kaffebønner":
          "picture of two bags of coffee beans",
        "Hos Kær Kaffebar brænder vi for god kaffe.":
          "At Kær Kaffebar we're passionate about good coffee.",
        "Vi samarbejder med Just Coffee for at sikre kvalitet og bæredygtighed i hver eneste kop.":
          "We collaborate with Just Coffee to ensure quality and sustainability in every cup.",
        "Læs mere om vores kaffe": "Read more about our coffee",
        "Vis mindre": "Show less",
        "Økologisk kaffe": "Organic coffee",
        "Vores kaffe på kær kaffebar i Valby, er brygget med økologiske bønner fra Just Coffee. Just Coffee's risteri ligger i Roskilde og handler bæredygtigt med bønderne om bønnerne fra Sydamerika. Alle vores kaffedrikke er brygget på deres Sol&Måne Espresso kaffe, som er en mørkristet arabica af hele bønner fra Colombia, Nicaragua, Honduras og Etiopien. Vælg roligt Kær Kaffebar for lækker økologisk kaffe i Valby. Du kan læse mere om Just Coffe's principper på deres hjemmeside.":
          "Our coffee at Kær Kaffebar in Valby is brewed with organic beans from Just Coffee. Just Coffee's roastery is located in Roskilde and trades sustainably with farmers for beans from South America. All our coffee drinks are brewed with their Sol&Måne Espresso coffee, which is a dark roasted arabica made from whole beans from Colombia, Nicaragua, Honduras and Ethiopia. Feel free to choose Kær Kaffebar for delicious organic coffee in Valby. You can read more about Just Coffee's principles on their website.",
        "Milk matters": "Milk matters",
        "For at sikre den høje kvalitet, den gode smag og bæredygtighed – er mælken også nøje udvalgt. Vi har valgt at arbejde med den Økologiske Thise Mælk, som giver kaffen en skøn skum og rundhed. Så når du skal bruge kaffe i Valby, er du her garanteret de bedste råvarer.":
          "To ensure high quality, great taste and sustainability – the milk is also carefully selected. We've chosen to work with organic Thise Milk, which gives the coffee a wonderful foam and roundness. So when you need coffee in Valby, you're guaranteed the best ingredients here.",
        "Er der fare på færde hvis du får laktose i mælken, har vi selvfølgelig også laktose fri mælk. Både laktosefri sødmælk og laktosefri minimælk.":
          "If there's a risk of you getting lactose from milk, we of course also have lactose-free milk. Both lactose-free whole milk and lactose-free low-fat milk.",
        "Kan man mon få vegansk kaffe i Valby? Ja! Er man ikke til animalsk mælk, men hellere vil have en vegansk udgave, har vi selvfølgelig også havremælk og det koster ikke ekstra.":
          "Can you get vegan coffee in Valby? Yes! If you don't want animal milk but prefer a vegan version, we of course also have oat milk and it doesn't cost extra.",
      },
    },
    "/afternoontea": {
      en: {
        "Afternoon tea": "Afternoon tea",
        "Afternoon Tea": "Afternoon Tea",
        "En hyggelig stund med te, kager og små delikatesser.":
          "A cozy moment with tea, cakes and small delicacies.",
        "Perfekt til venindehygge, fejring eller en særlig pause i hverdagen.":
          "Perfect for time with friends, celebrations or a special break in your day.",
        "Hvad inkluderer Afternoon Tea hos Kær Kaffebar?":
          "What's included in Kær Kaffebar's Afternoon Tea?",
        "Hjemmebagte scones med smør og hjemmelavet kompot":
          "Homemade scones with butter and homemade compote",
        "Petit fours – et udvalg af små, delikate kager":
          "Petit fours – a selection of small, delicate cakes",
        "Finger sandwiches i tre forskellige varianter":
          "Finger sandwiches in three different varieties",
        "Økologisk engelsk te – serveret ad libitum":
          "Organic English tea – served ad libitum",
        "Praktisk information": "Practical information",
        "Tidspunkt: Afternoon Tea serveres dagligt fra kl. 13:00.":
          "Time: Afternoon Tea is served daily from 1:00 PM.",
        "Booking: reservation skal foretages senest 24 timer i forvejen":
          "Booking: reservation must be made at least 24 hours in advance",
        "Pris 225,- pr kuvert": "Price 225 DKK per person",
        "book bord til afternoon tea": "book table for afternoon tea",
        "Book bord": "Book table",
        "citroner illustration": "lemons illustration",
        macarons: "macarons",
        "blåbær og pære illustration": "blueberries and pear illustration",
        "Skab nye minder over fine porcelænskopper, varme scones og liflig te – en lille stund af ro og forkælelse midt i Valby.":
          "Create new memories over fine porcelain cups, warm scones and fragrant tea – a little moment of peace and indulgence in the heart of Valby.",
      },
    },
    "/runningclub": {
      en: {
        "Kær løbeklub": "Kær Running Club",
        "Kær Klubben's løbeklub i Valby har":
          "Kær Klubben's running club in Valby has",
        "fokus på det sociale og på at samle lokalsamfundet":
          "focus on the social aspect and bringing the local community together",
        "samtidig med at vi bevæger os.": "while we get moving.",
        "Ruten i søndermarken er 2,5 km, så alle kan være med.":
          "The route in Søndermarken is 2.5 km, so everyone can participate.",
        "Er man hurtig, kan man nå den 2 gange!":
          "If you're fast, you can do it twice!",
        "løbende kaffekop illustration": "running coffee cup illustration",
        "Kommende ture": "Upcoming runs",
        Januar: "January",
        Februar: "February",
        Marts: "March",
        April: "April",
        Maj: "May",
        Juni: "June",
        Juli: "July",
        August: "August",
        September: "September",
        Oktober: "October",
        November: "November",
        December: "December",
        "Tak for din Tilmelding": "Thank you for your registration",
        "Ingen kommende ture": "No upcoming runs",
        Tilmelding: "Registration",
        "Fulde Navn": "Full Name",
        Navn: "Name",
        "E-mail": "Email",
        Tilmeld: "Sign up",
        "OBS: ved afmeldning skriv til nummeret: 81 61 09 00 mindst 24 timer inden.":
          "NOTE: To cancel, please text the number: 81 61 09 00 at least 24 hours in advance.",
        FAQ: "FAQ",
        "billeder-af-to-piger-med-en-løbeklub-t-shirt":
          "pictures of two girls with a running club t-shirt",
        "Hos Kær Kaffebar handler det ikke kun om tempo, men om fællesskab og lokale bånd.":
          "At Kær Kaffebar it's not just about speed, but about community and local connections.",
        "illustration af citroner": "illustration of lemons",
      },
    },
  },
});
