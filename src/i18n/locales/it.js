// Dizionario italiano. Stessa struttura di en.js.
export const it = {
  nav: {
    language: "Lingua",
    links: {
      aboutme: "Chi sono",
      skills: "Competenze",
      experience: "Esperienza",
      projects: "Progetti",
      contacts: "Contatti",
    },
  },

  hero: {
    badge: "Disponibile per aziende di prodotto",
    role: "Sviluppatore Fullstack — Specialista AI & Agenti",
    subtitle:
      "Costruisco con codice e AI — dalla logistica enterprise alle esperienze digitali. In questo momento porto Claude Code in produzione.",
    ctaCv: "Scarica il CV",
    ctaContact: "Contattami",
    scroll: "Scorri",
  },

  about: {
    label: "Chi sono",
    title: "Uno sviluppatore concentrato su",
    highlight: "impatto ed evoluzione",
    subtitle:
      "Esperienza professionale. Profondità guidata dalla passione. In questo momento sviluppo software enterprise potenziato dall'AI.",
    tags: ["AI & Agenti", "Software Enterprise", "Focus Frontend", "Crescita Continua"],
    panels: {
      profile: {
        title: "Profilo Professionale",
        body: `Sono uno sviluppatore fullstack con una forte propensione al frontend e un interesse crescente per l'AI engineering. Passo molto tempo fuori dall'orario di lavoro a spingere i miei limiti — il divario tra l'esperienza sulla carta e la profondità reale lo dimostra.

Attualmente lavoro come Software Developer in LeviaHub, un'azienda multinazionale di logistica, dove mi occupo di bug fixing e sviluppi completi sul sistema esistente, ho fondato il loro portale di amministrazione interno e ora sono frontend lead su un nuovo progetto costruito interamente con Claude Code. Prima, sono cresciuto rapidamente in ALTEN a Genova, dove gli standard da consulenza hanno plasmato il mio approccio al software di produzione.

Il mio focus attuale: agenti AI, server MCP e tutto l'ecosistema Anthropic.`,
      },
      beyond: {
        title: "Oltre il Codice",
        body: `Fuori dal lavoro mi appassionano la musica, i viaggi e il mettermi continuamente alla prova in nuove direzioni. Mi piace esplorare idee che stanno al limite di ciò che è possibile oggi — tecnicamente e non solo.

Credo che la curiosità sia la competenza professionale più sottovalutata. È ciò che ha trasformato un hobby da pandemia in una carriera, e ciò che mi spinge verso ogni nuova frontiera. Porto questa stessa energia costruttiva in ogni team di cui faccio parte.`,
      },
    },
  },

  skills: {
    label: "Stack",
    title: "Una panoramica veloce del",
    highlight: "mio stack tecnico",
    subtitle:
      "Scorri per esplorare. Tocca una card per i dettagli. Frontend, backend, database — e sopra il livello AI.",
    categories: ["Frontend", "Backend", "Database", "AI & Agenti", "Strumenti"],
    hint: "← scorri · tocca per i dettagli →",
    since: "Dal",
    levels: { Advanced: "Avanzato", Intermediate: "Intermedio", Beginner: "Base" },
    categoryMap: {
      Frontend: "Frontend",
      "Frontend Framework": "Framework Frontend",
      Backend: "Backend",
      "Backend Framework": "Framework Backend",
      Database: "Database",
      "AI & Agents": "AI & Agenti",
      Tools: "Strumenti",
    },
    items: {
      html: "Base solida per struttura semantica, accessibilità e organizzazione pulita dei contenuti.",
      css: "Layout responsive, sistemi di styling e costruzione di UI moderne con attenzione al dettaglio.",
      jsts: "Linguaggio centrale per interfacce interattive, comportamenti dinamici e logica frontend.",
      react: "Sviluppo UI a componenti per web app moderne, scalabili e interattive.",
      angular: "Framework strutturato per applicazioni frontend su larga scala e flussi enterprise.",
      vue: "Sviluppo frontend flessibile e leggero con pattern reattivi puliti.",
      node: "Runtime JavaScript per logica server-side e servizi backend moderni.",
      csharp: "Sviluppo object-oriented strutturato per logica backend e soluzioni software.",
      dotnet: "Ecosistema di framework per costruire applicazioni backend e API robuste.",
      python: "Linguaggio versatile per scripting, automazione e sperimentazione.",
      php: "Sviluppo backend per siti dinamici e logica applicativa server-side.",
      laravel: "Elegante framework PHP per architetture backend strutturate e applicazioni web.",
      mysql: "Gestione di database relazionali per dati strutturati e livelli di persistenza.",
      sqlserver: "Soluzione database enterprise per storage, query e integrazioni backend.",
      claudeapi: "I modelli Claude di Anthropic per costruire applicazioni intelligenti e flussi automatizzati. Attualmente in produzione in LeviaHub.",
      claudecode: "CLI di sviluppo AI-native. Costruisco applicazioni enterprise complete con Claude Code in produzione.",
      mcp: "Model Context Protocol — creazione e utilizzo di server MCP per estendere le capacità degli agenti.",
      anthropicsdk: "Uso completo dell'SDK Anthropic: messaggi, tool use, streaming e prompt engineering.",
      openai: "Integrazione dell'API OpenAI per completion, embedding e architetture multi-modello.",
      git: "Fondamenti di version control, strategie di branching e flussi collaborativi.",
      vite: "Build tool frontend di nuova generazione. HMR veloce, build ottimizzate: questo portfolio gira su Vite.",
      docker: "Basi sui container per ambienti coerenti e flussi di deploy.",
    },
  },

  experience: {
    label: "Carriera",
    title: "Il percorso che",
    highlight: "mi ha formato",
    subtitle:
      "Da un hobby nato in pandemia al software in produzione — tra bootcamp, consulenza enterprise e sviluppo AI-native.",
    items: {
      leviahub: {
        role: "Sviluppatore Software",
        location: "Italia",
        period: "2025 — Presente",
        summary:
          "Bug fixing e sviluppo completo di funzionalità su sistemi esistenti, fondatore del portale di amministrazione interno e ora frontend lead su un nuovo progetto costruito end-to-end con Claude Code.",
      },
      alten: {
        role: "Sviluppatore Software",
        location: "Genova, Italia",
        period: "2025",
        summary:
          "Entrato in una società di consulenza multinazionale. Standard professionali e veri progetti enterprise — è qui che ho costruito velocemente la mia solidità.",
      },
      boolean: {
        role: "Bootcamp di Sviluppo Web",
        location: "Online",
        period: "2024",
        summary:
          "Completato un bootcamp professionale di sviluppo web. Ho formalizzato le basi e mi sono spinto verso framework moderni, sviluppo backend e flussi di lavoro in team.",
      },
      "self-taught": {
        role: "Sviluppatore Autodidatta",
        company: "Personale — era COVID",
        location: "Casa",
        period: "2020",
        summary:
          "Ho iniziato a programmare da zero durante il lockdown. Mi sono innamorato di HTML, CSS e JavaScript. Nessun corso, nessuna roadmap — solo curiosità e ossessione.",
      },
      metalworker: {
        role: "Metalmeccanico Freelance",
        company: "In proprio",
        location: "Italia",
        period: "2016 — 2023",
        summary:
          "Sette anni da lavoratore autonomo — e non solo riparando e mettendo a punto macchine di produzione in azienda. Ho gestito l'attività a 360°: rapporti con i clienti, vendita e negoziazione, capire l'interlocutore e dire la cosa giusta al momento giusto, preventivi e gestione delle scadenze sotto pressione. La base umana dietro il modo in cui lavoro con le persone e i problemi oggi.",
        tech: ["Gestione clienti", "Vendita & negoziazione", "Comunicazione", "Gestione del tempo", "Problem solving"],
      },
    },
  },

  projects: {
    label: "Lavori",
    title: "Lavori selezionati, fatti con",
    highlight: "cura",
    subtitle: "Interfacce pulite, struttura solida, vera user experience. Altro su GitHub.",
    live: "Live ↗",
    github: "GitHub",
    items: {
      "montanarosrls-shop": {
        category: "E-commerce",
        shortDescription:
          "Un'esperienza e-commerce moderna, focalizzata su usabilità, chiarezza di navigazione e presentazione dei prodotti.",
      },
      "my-portfolio-react": {
        category: "Brand personale",
        shortDescription:
          "Questo portfolio — creato per mostrare progetti, profilo tecnico e una presenza digitale moderna. Completamente custom, progettato e sviluppato da zero.",
      },
      "gamesandtoys-website": {
        category: "Sito aziendale",
        shortDescription:
          "Un concept di sito aziendale strutturato, pensato per presentare i prodotti e migliorare l'esperienza di navigazione.",
      },
    },
  },

  contact: {
    label: "Contatti",
    title: "Costruiamo qualcosa di",
    highlight: "solido",
    subtitle:
      "Cerchi uno sviluppatore che tenga a interfacce pulite, codice manutenibile e vera user experience? Parliamone.",
    tags: ["Disponibile per aziende di prodotto", "Niente pura consulenza"],
    formTitle: "Inviami un messaggio",
    formSubtitle: "Raccontami il tuo progetto o la tua idea — ti risponderò.",
    socials: {
      linkedin: { description: "Profilo professionale, esperienza e network.", button: "Vai a LinkedIn ↗" },
      github: { description: "Repository di codice, progetti e workflow tecnico.", button: "Vedi GitHub ↗" },
      instagram: { description: "Un lato più personale e ispirazione creativa quotidiana.", button: "Vai a Instagram ↗" },
      cv: { subtitle: "Download PDF", description: "Panoramica completa di competenze, esperienza e progetti.", button: "Scarica il CV ↓" },
    },
  },

  form: {
    name: "Nome",
    email: "Email",
    message: "Messaggio",
    code: "Codice di conferma",
    placeholders: {
      name: "Il tuo nome",
      email: "La tua email",
      message: "Il tuo messaggio",
      code: "Inserisci il codice di conferma",
    },
    sendConfirm: "Invia email di conferma",
    verify: "Verifica codice",
    send: "Invia messaggio",
    messages: {
      confirmSent: "Ti ho inviato un'email di conferma. Controlla la posta e inserisci il codice per confermare.",
      confirmFail: "Invio dell'email di conferma non riuscito.",
      confirmedOk: "Email confermata! Ora puoi inviare il tuo messaggio.",
      codeWrong: "Codice di conferma errato. Riprova.",
      confirmFirst: "Conferma prima la tua email.",
      sentOk: "Il tuo messaggio è stato inviato con successo!",
      sendFail: "Invio del messaggio non riuscito.",
    },
  },

  footer: {
    tagline: "Sviluppatore Fullstack — Specialista AI & Agenti",
    rights: "Progettato e sviluppato da zero",
  },

  agent: {
    title: "L'agente di Luca",
    status: "Chiedimi qualsiasi cosa",
    online: "online",
    intro: "Ehi 👾 — sono l'assistente digitale di Luca. Chiedimi qualsiasi cosa su competenze, progetti o esperienza.",
    placeholder: "Scrivi qualcosa...",
    hint: 'prova: "fai il glitch del sito" 👾',
    triggerTitle: "Chatta con l'AI di Luca",
    default: "Mmm, su questo non sono sicuro. Prova a chiedermi di competenze, progetti, esperienza di Luca, oppure salutami. 🤔",
    topics: {
      glitch: "⚠ SISTEMA CORROTTO... scherzo. Però ti avevo avvisato. 😈",
      greet: "Ehi! Cosa vuoi sapere su Luca? Competenze, progetti, esperienza — c'è tutto. 🤙",
      skills:
        "Luca copre tutto lo stack: React, Angular, Vue sul frontend — Node.js, C#, .NET, Python sul backend. Ma il suo vero punto di forza ora è AI/Agenti: Claude API, Claude Code, MCP, Anthropic SDK. È lì che mette la maggior parte delle energie.",
      ai: "L'AI è l'ossessione principale di Luca in questo momento. Sta costruendo un'app enterprise completa con Claude Code in produzione in LeviaHub. Lavora con Claude API, server MCP, Anthropic SDK, LangChain e OpenAI API. Roba vera, non solo tutorial. 🤖",
      projects:
        "Ha 3 progetti pubblici: un e-commerce (Montanaro SRLS Shop), un sito aziendale (Games and Toys) e questo portfolio stesso. Altri in arrivo. Li trovi nella sezione Progetti qui sotto. 👇",
      experience:
        "Percorso: 7 anni da metalmeccanico freelance (2016–2023) → Boolean Bootcamp nel 2024 → consulenza in ALTEN a Genova (2025) → ora Software Developer in LeviaHub a costruire software enterprise AI-native. ⚡",
      contact:
        "Puoi raggiungere Luca dalla sezione Contatti in fondo, su LinkedIn (@Luca Cirio) o GitHub (@Lucaalex00). È aperto ad aziende di prodotto — niente pura consulenza. Scrivigli! 📬",
      cv: "Il CV è scaricabile direttamente dalla sezione Hero (in cima alla pagina) — basta premere il pulsante Scarica il CV. Oppure scorri su. 📄",
      who: "Luca Cirio — sviluppatore fullstack italiano, orientato al frontend, ossessionato dall'AI. Lavora in LeviaHub su un'app Claude Code in produzione. Autodidatta dai tempi del COVID, ora costruisce cose che pensano davvero. Questo portfolio è la sua estetica: pulita, minimale, con un po' di glow. 🌙",
      why: "La maggior parte degli sviluppatori parla di AI. Luca la porta in produzione. Unisce precisione frontend, ampiezza backend E vera esperienza di AI engineering — combinazione rara nel 2025. E programma come uno stile di vita, non come un lavoro. 🚀",
      easter: "Oh, hai trovato la pagina 404? Quell'HackerTerminal è un easter egg voluto. Un po' di personalità non ha mai fatto male a nessuno. 😏",
    },
  },
};
