/*
 * All editable site content lives here: every UI string and every project
 * entry, in three languages (en, pl, de). Layout code in index.html, css/,
 * and js/main.js should not need to change when this file changes.
 *
 * Language notes:
 * - en, pl: fully translated.
 * - de: structure mirrors en/pl. Strings are empty ("") as TODO placeholders.
 *   Fill them in and the language switcher will pick them up automatically,
 *   no code changes needed. See README.md for details.
 */

window.SITE_CONTENT = {
  meta: {
    title: {
      en: "wojtas.it - IT services",
      pl: "wojtas.it - usługi informatyczne",
      de: "wojtas.it - IT-Dienstleistungen"
    },
    description: {
      en: "wojtas.it: online stores, websites, and custom automation tools, from idea to production.",
      pl: "wojtas.it: sklepy internetowe, strony WWW i automatyzacje szyte na miarę, od pomysłu po wdrożenie produkcyjne.",
      de: "wojtas.it: Online-Shops, Webseiten und maßgeschneiderte Automatisierungslösungen, von der Idee bis zum Produktivbetrieb."
    }
  },

  ui: {
    en: {
      skipLink: "Skip to main content",
      brand: "wojtas.it",
      navProjects: "Projects",
      navAbout: "About",
      navContact: "Contact",
      langSwitcherLabel: "Language",
      heroRole: "Online stores, websites & automation",
      factsLabelLocation: "Location",
      factsLabelFocus: "Focus",
      factsLabelLanguages: "Languages",
      factsLabelStack: "Stack",
      factsValueLocation: "Tarnów, Poland - remote work for clients anywhere",
      factsValueFocus: "Online stores, websites, automation, mobile apps, embedded",
      factsValueLanguages: "Polish (native), English B2, German A2",
      factsValueStack: "C/C++, Python, JS/TS, C# | React Native, Node.js, ESP32, KiCad | PostgreSQL, MongoDB, MATLAB",
      projectsHeading: "Projects",
      projectsSub: "Six things I have built, from firmware to machine learning.",
      filterAll: "All",
      filterEmbedded: "Embedded & Hardware",
      filterWeb: "Web & Mobile",
      filterGame: "Game Dev",
      filterMl: "Machine Learning",
      filterAutomation: "Automation",
      viewRepo: "View repository",
      liveDemo: "Live demo",
      contactHeading: "Contact",
      contactSub: "The fastest way to reach me is email.",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
      contactLinkedinLabel: "LinkedIn",
      contactGithubLabel: "GitHub",
      footerNote: "Built with plain HTML, CSS and JavaScript. No framework, no build step."
    },
    pl: {
      skipLink: "Przejdź do treści",
      brand: "wojtas.it",
      navProjects: "Projekty",
      navAbout: "O mnie",
      navContact: "Kontakt",
      langSwitcherLabel: "Język",
      heroRole: "Sklepy internetowe, strony WWW i automatyzacje",
      factsLabelLocation: "Lokalizacja",
      factsLabelFocus: "Specjalizacja",
      factsLabelLanguages: "Języki",
      factsLabelStack: "Stack",
      factsValueLocation: "Tarnów - praca zdalna dla klientów z całej Polski i nie tylko",
      factsValueFocus: "Sklepy internetowe, strony WWW, automatyzacje, aplikacje mobilne, embedded",
      factsValueLanguages: "polski (natywny), angielski B2, niemiecki A2",
      factsValueStack: "C/C++, Python, JS/TS, C# | React Native, Node.js, ESP32, KiCad | PostgreSQL, MongoDB, MATLAB",
      projectsHeading: "Projekty",
      projectsSub: "Sześć rzeczy, które zbudowałem, od firmware po machine learning.",
      filterAll: "Wszystkie",
      filterEmbedded: "Embedded i sprzęt",
      filterWeb: "Web i mobile",
      filterGame: "Gry",
      filterMl: "Machine Learning",
      filterAutomation: "Automatyzacja",
      viewRepo: "Zobacz repozytorium",
      liveDemo: "Zobacz demo",
      contactHeading: "Kontakt",
      contactSub: "Najszybciej dotrzesz do mnie mailem.",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Telefon",
      contactLinkedinLabel: "LinkedIn",
      contactGithubLabel: "GitHub",
      footerNote: "Zbudowane w czystym HTML, CSS i JavaScript. Bez frameworka, bez etapu budowania."
    },
    de: {
      skipLink: "Zum Hauptinhalt springen",
      brand: "wojtas.it",
      navProjects: "Projekte",
      navAbout: "Über mich",
      navContact: "Kontakt",
      langSwitcherLabel: "Sprache",
      heroRole: "Online-Shops, Webseiten und Automatisierung",
      factsLabelLocation: "Standort",
      factsLabelFocus: "Schwerpunkte",
      factsLabelLanguages: "Sprachen",
      factsLabelStack: "Stack",
      factsValueLocation: "Tarnów, Polen - Remote-Arbeit für Kunden überall",
      factsValueFocus: "Online-Shops, Webseiten, Automatisierung, Mobile Apps, Embedded",
      factsValueLanguages: "Polnisch (Muttersprache), Englisch B2, Deutsch A2",
      factsValueStack: "C/C++, Python, JS/TS, C# | React Native, Node.js, ESP32, KiCad | PostgreSQL, MongoDB, MATLAB",
      projectsHeading: "Projekte",
      projectsSub: "Sechs Dinge, die ich gebaut habe, von Firmware bis Machine Learning.",
      filterAll: "Alle",
      filterEmbedded: "Embedded und Hardware",
      filterWeb: "Web und Mobile",
      filterGame: "Game Dev",
      filterMl: "Machine Learning",
      filterAutomation: "Automatisierung",
      viewRepo: "Repository ansehen",
      liveDemo: "Demo ansehen",
      contactHeading: "Kontakt",
      contactSub: "Am schnellsten erreicht man mich per E-Mail.",
      contactEmailLabel: "E-Mail",
      contactPhoneLabel: "Telefon",
      contactLinkedinLabel: "LinkedIn",
      contactGithubLabel: "GitHub",
      footerNote: "Gebaut mit reinem HTML, CSS und JavaScript. Kein Framework, kein Build-Schritt."
    }
  },

  heroName: {
    en: "wojtas.it - IT services",
    pl: "wojtas.it - usługi informatyczne",
    de: "wojtas.it - IT-Dienstleistungen"
  },

  intro: {
    en: "I build online stores, websites, and custom automation tools, from a simple landing page to systems that tie a web app to custom hardware. I recently built an automation tool for a large-format print shop that's in daily production use there. I work remotely, based in Tarnów, Poland.",
    pl: "Tworzę sklepy internetowe, strony WWW oraz automatyzacje dopasowane do potrzeb klienta, od prostej wizytówki po systemy łączące aplikację webową z własnym sprzętem. Ostatnio zbudowałem narzędzie automatyzujące pracę drukarni wielkoformatowej, które jest tam używane produkcyjnie na co dzień. Pracuję zdalnie, z bazą w Tarnowie.",
    de: "Ich baue Online-Shops, Webseiten und maßgeschneiderte Automatisierungslösungen, von einer einfachen Landingpage bis zu Systemen, die eine Web-App mit eigener Hardware verbinden. Kürzlich habe ich ein Automatisierungstool für eine Großformatdruckerei entwickelt, das dort täglich im Produktivbetrieb eingesetzt wird. Ich arbeite remote, mit Sitz in Tarnów."
  },

  about: {
    en: "I move fast and learn whatever a project needs, and I care about shipping things that actually get used. I've done Oxford-style debate since school, so I'm comfortable presenting ideas and working through disagreement in a team. Outside code I train grappling and Muay Thai, produce music in FL Studio, play a few instruments, and occasionally tinker with my car.",
    pl: "Działam szybko i uczę się tego, czego akurat wymaga projekt, a przy tym zależy mi na tym, żeby to, co robię, było faktycznie używane. Od liceum trenuję debaty oksfordzkie, więc swobodnie prezentuję pomysły i pracuję przez spory w zespole. Poza kodem trenuję grappling i muay thai, produkuję muzykę w FL Studio, gram na kilku instrumentach i od czasu do czasu majsterkuję przy samochodzie.",
    de: "Ich arbeite schnell und lerne, was das Projekt gerade braucht, und mir liegt es am Herzen, Dinge zu bauen, die wirklich genutzt werden. Seit der Schule trainiere ich Oxford-Debatten, daher bin ich es gewohnt, Ideen zu präsentieren und Meinungsverschiedenheiten im Team sachlich zu lösen. Abseits des Codes trainiere ich Grappling und Muay Thai, produziere Musik in FL Studio, spiele einige Instrumente und bastle gelegentlich an meinem Auto."
  },

  categories: [
    { id: "embedded", key: "filterEmbedded" },
    { id: "web", key: "filterWeb" },
    { id: "game", key: "filterGame" },
    { id: "ml", key: "filterMl" },
    { id: "automation", key: "filterAutomation" }
  ],

  contact: {
    email: "f.wojtasinski@gmail.com",
    // Set to a real phone number (e.g. "+48 000 000 000") to show it on the site. Leave empty to hide.
    phone: "+48 721 313 271",
    // Set to a full LinkedIn URL to show it on the site. Leave empty to hide.
    linkedin: "https://www.linkedin.com/in/filip-wojtasiński-083287420",
    github: "https://github.com/wojtas-it"
  },

  projects: [
    {
      id: "food-ordering-system",
      index: "01",
      name: "Food Ordering System",
      categories: ["embedded", "web"],
      repo: "https://github.com/wojtas-it/food-ordering-system",
      demo: null,
      image: "assets/img/food-ordering-system/cover.jpg",
      imageAlt: {
        en: "Main screen of the food ordering web app",
        pl: "Główny ekran aplikacji do zamawiania jedzenia",
        de: "Hauptansicht der Essensbestell-Web-App"
      },
      tech: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "ESP32", "C++"],
      hook: {
        en: "Full-stack + custom ESP32 hardware",
        pl: "Fullstack i własny sprzęt na ESP32",
        de: "Full-Stack und eigene ESP32-Hardware"
      },
      description: {
        en: "A full-stack food ordering system tied to pagers I designed and built on ESP32 hardware. Customers order through a web app, a real-time kitchen dashboard tracks order status over WebSockets, and the physical pager buzzes and lights up when the order is ready. Frontend, backend, database, and the embedded firmware were all built by me.",
        pl: "Fullstackowy system zamawiania jedzenia połączony z pagerami, które zaprojektowałem i zbudowałem na ESP32. Klient składa zamówienie w aplikacji, panel kuchenny na żywo śledzi jego status przez WebSockety, a fizyczny pager buczy i świeci, gdy zamówienie jest gotowe. Frontend, backend, baza danych i firmware urządzenia to w całości moja praca.",
        de: "Ein Full-Stack-Bestellsystem für Speisen, verbunden mit Pagern, die ich auf ESP32-Hardware entworfen und gebaut habe. Die Kunden bestellen über eine Web-App, ein Echtzeit-Küchendashboard verfolgt den Bestellstatus über WebSockets, und der physische Pager vibriert und leuchtet auf, wenn die Bestellung fertig ist. Frontend, Backend, Datenbank und Embedded-Firmware habe ich vollständig selbst gebaut."
      }
    },
    {
      id: "banner-processor",
      index: "02",
      name: "Banner Processor",
      categories: ["automation"],
      repo: "https://github.com/wojtas-it/banner-processor",
      demo: null,
      image: "assets/img/banner-processor/cover.jpg",
      imageAlt: {
        en: "Banner Processor desktop application main window",
        pl: "Główne okno aplikacji Banner Processor",
        de: "Hauptfenster der Banner-Processor-Anwendung"
      },
      tech: ["Python", "Pillow", "PyInstaller"],
      hook: {
        en: "In production use",
        pl: "Używane produkcyjnie",
        de: "Im Produktiveinsatz"
      },
      description: {
        en: "A Python tool that automates prepress file preparation for large-format printing. It replaced a manual step in the print shop's workflow and is used there in daily production. It places registration marks and a fold border automatically, based on the banner's size, while preserving CMYK color profiles and DPI.",
        pl: "Narzędzie w Pythonie, które automatyzuje przygotowanie plików do druku wielkoformatowego. Zastąpiło ręczny etap procesu w drukarni i jest tam używane produkcyjnie na co dzień. Samo dobiera rozstaw celowników rejestracyjnych i dodaje ramkę na zagięcie, zachowując profil CMYK i DPI pliku.",
        de: "Ein Python-Tool, das die Druckvorbereitung für den Großformatdruck automatisiert. Es hat einen manuellen Arbeitsschritt im Workflow der Druckerei ersetzt und wird dort täglich im Produktivbetrieb eingesetzt. Es setzt Passmarken und einen Falzrahmen automatisch, basierend auf der Bannergröße, unter Beibehaltung der CMYK-Profile und DPI."
      }
    },
    {
      id: "citadel-architect",
      index: "03",
      name: "Citadel Architect",
      categories: ["game"],
      repo: "https://github.com/wojtas-it/citadel-architect",
      demo: null,
      image: "assets/img/citadel-architect/cover.jpg",
      imageAlt: {
        en: "Developed settlement in Citadel Architect, an isometric Unity strategy game",
        pl: "Rozwinięta osada w Citadel Architect, izometrycznej grze strategicznej w Unity",
        de: "Entwickelte Siedlung in Citadel Architect, einem isometrischen Unity-Strategiespiel"
      },
      tech: ["Unity", "C#"],
      hook: {
        en: "Team project",
        pl: "Projekt zespołowy",
        de: "Teamprojekt"
      },
      description: {
        en: "An isometric settlement builder made in Unity and C# with a two-person team: build a base, manage settlers and production chains, and defend it against night raids. I built the grid and building system, resource and population management, the event system, and the main menu, survival, and worker-assignment UI, plus the game's visual art and audio. My teammate handled combat, the barracks and hospital, the economy, and save and load.",
        pl: "Izometryczna gra strategiczna zrobiona w Unity i C# w dwuosobowym zespole: buduje się osadę, zarządza osadnikami i łańcuchami produkcji oraz broni bazy przed nocnymi najazdami. Zrobiłem system siatki i budowania, zarządzanie zasobami i populacją, system zdarzeń, menu główne, system przetrwania oraz interfejs przydzielania pracowników, a także grafikę i dźwięk gry. Współtwórca odpowiadał za walkę, koszary i szpital, ekonomię oraz zapis i wczytywanie stanu gry.",
        de: "Ein isometrisches Siedlungsbauspiel, entwickelt in Unity und C# mit einem zweiköpfigen Team: Basis aufbauen, Siedler und Produktionsketten verwalten und gegen nächtliche Überfälle verteidigen. Ich habe das Raster- und Gebäudesystem, die Ressourcen- und Bevölkerungsverwaltung, das Ereignissystem sowie Hauptmenü, Überlebenssystem und Arbeiterzuteilungs-UI gebaut, plus visuelle Gestaltung und Sound. Mein Teampartner übernahm Kampf, Kaserne und Krankenhaus, Wirtschaft sowie Speichern und Laden."
      }
    },
    {
      id: "life-quest",
      index: "04",
      name: "LifeQuest",
      categories: ["web"],
      repo: "https://github.com/wojtas-it/life-quest",
      demo: null,
      image: "assets/img/life-quest/cover.jpg",
      imageAlt: {
        en: "Home screen of the LifeQuest mobile app",
        pl: "Ekran główny aplikacji mobilnej LifeQuest",
        de: "Startbildschirm der LifeQuest-Mobile-App"
      },
      tech: ["React Native", "Expo", "Redux Toolkit", "Node.js", "MongoDB"],
      hook: {
        en: "Cross-platform mobile app",
        pl: "Wieloplatformowa aplikacja mobilna",
        de: "Plattformübergreifende Mobile-App"
      },
      description: {
        en: "A cross-platform mobile app, built from scratch in React Native, that turns everyday habits into an RPG. Users set up recurring quests, earn XP for completing them, and grow a character across categories like fitness, learning, or productivity, with streak multipliers and a skill tree that tracks progress over time.",
        pl: "Wieloplatformowa aplikacja mobilna, napisana od zera w React Native, która zamienia codzienne nawyki w grę RPG. Użytkownik tworzy powtarzalne questy, zdobywa za nie punkty doświadczenia i rozwija postać w kategoriach takich jak sport, nauka czy produktywność, z systemem serii i drzewkiem umiejętności śledzącym postępy.",
        de: "Eine plattformübergreifende Mobile-App, von Grund auf in React Native entwickelt, die alltägliche Gewohnheiten in ein RPG verwandelt. Nutzer richten wiederkehrende Quests ein, sammeln XP und entwickeln einen Charakter in Kategorien wie Fitness, Lernen oder Produktivität, mit Streak-Multiplikatoren und einem Fähigkeitsbaum, der den Fortschritt verfolgt."
      }
    },
    {
      id: "heart-disease-prediction",
      index: "05",
      name: "Heart Disease Prediction",
      categories: ["ml"],
      repo: "https://github.com/wojtas-it/heart-disease-prediction",
      demo: null,
      image: "assets/img/heart-disease-prediction/cover.jpg",
      imageAlt: {
        en: "Gradio web interface for the heart disease prediction model",
        pl: "Interfejs Gradio modelu przewidującego ryzyko choroby serca",
        de: "Gradio-Webinterface des Herzerkrankungs-Vorhersagemodells"
      },
      tech: ["Python", "scikit-learn", "pandas", "Gradio"],
      hook: {
        en: "ML model with a live demo",
        pl: "Model ML z demo w przeglądarce",
        de: "ML-Modell mit Live-Demo"
      },
      description: {
        en: "A machine learning model that estimates cardiovascular disease risk from clinical and lifestyle data such as blood pressure, cholesterol, and smoking habits. I compared six models on 70,000 patient records, picked the best performer on held-out test data, and wrapped it in a Gradio interface so anyone can try a prediction in the browser.",
        pl: "Model uczenia maszynowego, który szacuje ryzyko choroby sercowo-naczyniowej na podstawie danych klinicznych i stylu życia, takich jak ciśnienie krwi, cholesterol czy palenie. Porównałem sześć modeli na 70 tysiącach rekordów pacjentów, wybrałem najlepszy na podstawie zbioru testowego i opakowałem go w interfejs Gradio, w którym każdy może sprawdzić predykcję w przeglądarce.",
        de: "Ein Machine-Learning-Modell, das das Risiko von Herz-Kreislauf-Erkrankungen anhand klinischer Daten und Lebensstilfaktoren wie Blutdruck, Cholesterin und Rauchgewohnheiten schätzt. Ich habe sechs Modelle auf 70.000 Patientendatensätzen verglichen, den besten auf Basis der Testdaten ausgewählt und ihn in eine Gradio-Oberfläche eingebettet, sodass jeder eine Vorhersage im Browser ausprobieren kann."
      }
    },
    {
      id: "overdrive-od-1",
      index: "06",
      name: "OverDrive Unit OD-1",
      categories: ["embedded"],
      repo: "https://github.com/wojtas-it/overdrive-od-1",
      demo: null,
      image: "assets/img/overdrive-od-1/cover.jpg",
      imageAlt: {
        en: "PCB layout of the OD-1 analog overdrive guitar pedal, designed in KiCad",
        pl: "Projekt płytki PCB analogowego przestera gitarowego OD-1, zaprojektowany w KiCad",
        de: "PCB-Layout des analogen OD-1-Gitarren-Overdrive-Pedals, entworfen in KiCad"
      },
      tech: ["KiCad", "Analog circuit design"],
      hook: {
        en: "Analog circuit design (KiCad)",
        pl: "Projekt układu analogowego (KiCad)",
        de: "Analoges Schaltungsdesign (KiCad)"
      },
      description: {
        en: "A schematic and PCB design for an analog guitar overdrive pedal, laid out end to end in KiCad. The circuit follows a classic op-amp gain stage into diode clipping, with a passive tone filter, designed and routed by me alone. Not physically built yet, but the schematic passes ERC clean and the two-layer board is fully routed.",
        pl: "Schemat i projekt płytki PCB analogowego przestera gitarowego, w całości zaprojektowany w KiCad. Układ opiera się na klasycznym stopniu wzmocnienia na wzmacniaczu operacyjnym z diodowym ograniczaniem sygnału i pasywnym filtrem barwy, zaprojektowanym i routowanym przeze mnie. Pedał nie został jeszcze fizycznie zbudowany, ale schemat przechodzi ERC bez błędów, a dwuwarstwowa płytka jest w pełni poprowadzona.",
        de: "Ein Schaltplan und PCB-Design für ein analoges Gitarren-Overdrive-Pedal, komplett in KiCad erstellt. Die Schaltung folgt einer klassischen Op-Amp-Verstärkerstufe mit Diodenbegrenzung und einem passiven Klangregler, von mir allein entworfen und geroutet. Noch nicht physisch gebaut, aber der Schaltplan besteht den ERC ohne Fehler und die zweischichtige Platine ist vollständig geroutet."
      }
    }
  ]
};
