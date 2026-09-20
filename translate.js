// =====================
//   SITE TRANSLATOR — IT (nativo) <-> EN
//   Dictionary-based, no HTML rewrite needed.
//   Aggiungi <script src="translate.js"></script> dopo cursor.js su ogni pagina.
// =====================
(function () {
  "use strict";

  const STORAGE_KEY = "segma_lang";

  // ---- Traduzioni del <title> (match esatto sul document.title corrente) ----
  const TITLES = {
    "SegmaSirra - Botanica Intelligente": "SegmaSirra - Smart Botany",
    "Features - SegmaSirra": "Features - SegmaSirra",
    "Team - SegmaSirra": "Team - SegmaSirra",
    "Contatti - SegmaSirra": "Contact - SegmaSirra",
    "Download - SegmaSirra": "Download - SegmaSirra",
    "Sostenibilità - SegmaSirra": "Sustainability - SegmaSirra"
  };

  // ---- Traduzioni degli attributi (placeholder...) ----
  const ATTR_DICT = {
    "Il tuo nome": "Your name",
    "tua@email.com": "your@email.com",
    "Di cosa vuoi parlare?": "What do you want to talk about?",
    "Scrivi qui il tuo messaggio...": "Write your message here..."
  };

  // ---- Dizionario principale: testo IT esatto (trim) -> EN ----
  const DICT = {
    // NAV / FOOTER condivisi
    "Contatti/FaQ": "Contact/FAQ",
    "Contatti": "Contact",
    "Sostenibilità": "Sustainability",
    "Tutti i diritti non riservati": "All rights not reserved",
    "Tutti i diritti non riservati.": "All rights not reserved.",

    // ===== INDEX =====
    "Serra automatizzata": "Automated greenhouse",
    "Coltiva il Futuro": "Grow the Future",
    "con Intelligenza": "with Intelligence",
    "Utilizziamo energia pulita per rendere green la coltivazione di qualsiasi pianta":
      "We use clean energy to make growing any plant green",
    "Scarica l'App": "Download the App",
    "Scopri le Features →": "Discover the Features →",
    "Scopri le Features": "Discover the Features",
    "Foto della serra assemblata": "Photo of the assembled greenhouse",
    "Slot 16:9 — sostituisci con <img>": "16:9 slot — replace with <img>",
    "Uptime Garantito": "Guaranteed Uptime",
    "Sensori Integrati": "Integrated Sensors",
    "Monitoraggio": "Monitoring",
    "Più produttività": "More Productivity",
    "FUNZIONALITÀ": "FEATURES",
    "Tecnologia al Servizio": "Technology at the Service",
    "della": "of",
    "Natura": "Nature",
    "Controllo Clima": "Climate Control",
    "Monitoraggio temperatura, umidità e luminosità in tempo reale con grafici storici":
      "Real-time temperature, humidity and light monitoring with historical charts",
    "Scopri →": "Discover →",
    "Irrigazione Smart": "Smart Irrigation",
    "Sistema automatizzato di irrigazione intelligente basato su sensori di umidità del suolo":
      "Automated smart irrigation system based on soil moisture sensors",
    "Dati e statistiche avanzate per ottimizzare la produzione e ridurre gli sprechi":
      "Advanced data and statistics to optimize production and reduce waste",
    "Notifiche": "Notifications",
    "Avvisi in tempo reale sullo stato della serra direttamente sul tuo smartphone":
      "Real-time alerts on your greenhouse's status straight to your smartphone",
    "Foto dei sensori / elettronica": "Photo of the sensors / electronics",
    "Foto delle piante / raccolto": "Photo of the plants / harvest",
    "Pronto a rivoluzionare la tua botanica?": "Ready to revolutionize your gardening?",
    "Scarica l'app SegmaSirra e inizia a monitorare le tue piante ovunque":
      "Download the SegmaSirra app and start monitoring your plants anywhere",
    "Scarica Gratis": "Download Free",

    // ===== FEATURES =====
    "Tutto ciò di cui hai": "Everything You",
    "bisogno": "Need",
    "Una piattaforma completa per il monitoraggio e l'automazione intelligente della tua serra":
      "A complete platform for monitoring and smart automation of your greenhouse",
    "Monitora in tempo reale temperatura, umidità e luminosità tramite sensori ad alta precisione (DHT11, SHT45). Visualizza grafici storici e imposta soglie di allarme personalizzate.":
      "Monitor temperature, humidity and light in real time with high-precision sensors (DHT11, SHT45). View historical charts and set custom alarm thresholds.",
    "Temperatura e umidità in tempo reale": "Real-time temperature and humidity",
    "Grafici storici a 24h / 7 giorni": "24h / 7-day historical charts",
    "Soglie di allarme configurabili": "Configurable alarm thresholds",
    "Supporto multi-sensore per zone diverse": "Multi-sensor support for different zones",
    "Il sistema legge i sensori di umidità del suolo e attiva automaticamente la pompa quando necessario. Puoi anche controllare manualmente tutto dall'app.":
      "The system reads the soil moisture sensors and automatically activates the pump when needed. You can also control everything manually from the app.",
    "Attivazione automatica basata su umidità suolo": "Automatic activation based on soil moisture",
    "Controllo manuale da remoto": "Remote manual control",
    "Scheduling programmabile": "Programmable scheduling",
    "Monitoraggio livello di acqua rimasta nella cisterna": "Monitoring of remaining water level in the tank",
    "Foto della dashboard / app": "Photo of the dashboard / app",
    "Analytics Avanzate": "Advanced Analytics",
    "Dashboard con dati aggregati, statistiche di produzione e trend. Ottimizza i consumi e identifica anomalie prima che diventino problemi.":
      "Dashboard with aggregated data, production statistics and trends. Optimize consumption and spot anomalies before they become problems.",
    "Dashboard in tempo reale": "Real-time dashboard",
    "Statistiche settimanali e mensili": "Weekly and monthly statistics",
    "Report automatici": "Automatic reports",
    "Notifiche Push": "Push Notifications",
    "Ricevi avvisi istantanei quando qualcosa non va: temperatura fuori soglia, umidità critica, pompa in errore o connessione persa.":
      "Get instant alerts when something's wrong: temperature out of range, critical humidity, pump error, or lost connection.",
    "Notifiche push su Android": "Push notifications on Android",
    "Alert configurabili per ogni parametro": "Configurable alerts for every parameter",
    "Log storico degli eventi": "Historical event log",
    "Priorità personalizzabile": "Customizable priority",
    "Energia Solare": "Solar Power",
    "Il sistema è progettato per funzionare con pannelli solari. L'ESP32 e tutti i componenti sono interamente alimentati da energia green!":
      "The system is designed to run on solar panels. The ESP32 and every component are entirely powered by green energy!",
    "Ottimizzato per basso consumo": "Optimized for low power consumption",
    "Compatibile con un piccolo pannelo solare": "Compatible with a small solar panel",
    "Deep sleep intelligente": "Smart deep sleep",
    "Monitoraggio stato batteria": "Battery status monitoring",
    "Connettività": "Connectivity",
    "ESP32 + WiFi per la connessione locale, con Firebase come backend cloud. Accesso remoto garantito da qualsiasi parte del mondo.":
      "ESP32 + WiFi for local connectivity, with Firebase as cloud backend. Remote access guaranteed from anywhere in the world.",
    "WiFi 2.4GHz integrato": "Built-in 2.4GHz WiFi",
    "Accesso remoto globale": "Global remote access",
    "OTA update firmware": "OTA firmware updates",
    "Foto del pannello solare": "Photo of the solar panel",
    "Convinto? Scarica l'app!": "Convinced? Download the app!",
    "Disponibile su Android": "Available on Android",
    "Scarica SegmaSirra": "Download SegmaSirra",

    // ===== TEAM =====
    "CHI SIAMO": "ABOUT US",
    "Il Nostro": "Our",
    "Le menti dietro la SegmaSirra": "The minds behind SegmaSirra",
    "Lavoriamo insieme per un futuro più pulito": "Working together for a cleaner future",
    "Progetta e assembla l'elettronica della serra: ESP32, sensori, alimentazione a pannello solare e tutto il firmware che tiene in vita le piante quando nessuno guarda.":
      "Designs and builds the greenhouse's electronics: ESP32, sensors, solar power, and all the firmware that keeps the plants alive when nobody's watching.",
    "Modella e stampa in 3D il case della serra, cura l'assemblaggio fisico di tutto l'hardware — e trova sempre il modo di far entrare ogni cavo anche quando sulla carta non ci stava.":
      "Models and 3D-prints the greenhouse case, handles the physical assembly of all the hardware — and somehow always finds a way to fit every cable in, even when it shouldn't fit on paper.",
    "Modelli 3D": "3D Models",
    "Assemblaggio": "Assembly",
    "Costruisce l'app Android e il backend Firebase che tengono traccia di ogni dato della serra — temperatura, umidità, irrigazione — in tempo reale, ovunque tu sia.":
      "Builds the Android app and Firebase backend that track every piece of greenhouse data — temperature, humidity, irrigation — in real time, wherever you are.",
    "Aperti ai": "Open to",
    "Contributi": "Contributions",
    "SegmaSirra è completamente open source. Nuovi driver per sensori, miglioramenti all'app, o semplicemente un occhio in più sul codice — le pull request sono benvenute.":
      "SegmaSirra is fully open source. New sensor drivers, app improvements, or just an extra pair of eyes on the code — pull requests are welcome.",
    "Contribuisci su GitHub →": "Contribute on GitHub →",

    // ===== DOWNLOAD =====
    "Scarica": "Download",
    "Controlla la tua serra ovunque tu sia.": "Control your greenhouse from anywhere.",
    "v4.6.0 — Stabile — Aprile 2026": "v4.6.0 — Stable — April 2026",
    "Versione 4.6.0": "Version 4.6.0",
    "Richiede Android 8.0+": "Requires Android 8.0+",
    "Abilita \"Origini sconosciute\" nelle impostazioni per installare l'APK":
      "Enable \"Unknown sources\" in settings to install the APK",
    "Non disponibile": "Not available",
    "e non lo sarà mai": "and never will be",
    "Non disponibile X": "Not available X",
    "Apple chiede 99$/anno per publicare. No grazie.": "Apple charges $99/year to publish. No thanks.",
    "Requisiti di sistema": "System Requirements",
    "Android 8.0 (Oreo) o superiore": "Android 8.0 (Oreo) or higher",
    "Connessione Internet per dati in tempo reale": "Internet connection for real-time data",
    "Permessi notifiche per gli alert": "Notification permissions for alerts",
    "~150MB di spazio libero": "~150MB of free space",

    // ===== CONTACT =====
    "CONTATTI": "CONTACT",
    "Scrivici": "Write to Us",
    "(se vuoi)": "(if you want)",
    "Non prometto che risponderemo, ma ci proviamo": "I don't promise we'll reply, but we'll try",
    "Risposta garantita* —": "Guaranteed reply* —",
    "*non garantita": "*not guaranteed",
    "Sede Operativa": "Operating Location",
    "Crema, Lombardia, Italia": "Crema, Lombardy, Italy",
    "Orari": "Hours",
    "Lun–Ven: 8:00–13:00": "Mon–Fri: 8:00 AM–1:00 PM",
    "Quando non siamo a scuola": "When we're not at school",
    "Manda un messaggio": "Send a message",
    "Questo form non fa niente ma è bello lo stesso": "This form doesn't do anything but it still looks nice",
    "Nome": "Name",
    "Oggetto": "Subject",
    "Messaggio": "Message",
    "Invia Messaggio": "Send Message",
    "Il progetto è open source": "The project is open source",
    "Codice firmware, schema PCB, app Android — tutto su GitHub.": "Firmware code, PCB schematic, Android app — all on GitHub.",
    "Dai un'occhiata, apri una issue, rubaci il codice.": "Take a look, open an issue, steal our code.",
    "Vai al Repository": "Go to Repository",
    "Domande": "Frequently",
    "frequenti": "Asked Questions",
    "Funziona senza internet?": "Does it work without internet?",
    "Sfortunatamente no: sia la serra sia il dispositivo su cui gira l'app devono essere connessi a internet — tuttavia la serra gestisce in automatico le funzioni base, e sull'app si può giocare a snake nell'attesa :)!":
      "Unfortunately no: both the greenhouse and the device running the app need to be connected to the internet — though the greenhouse handles the basic functions automatically, and you can play snake on the app while you wait :)!",
    "Qual'è la scheda grafica del tuo computer?": "What's your computer's graphics card?",
    "Quanto costa costruirlo?": "How much does it cost to build?",
    "I componenti principali (ESP32, sensori DHT11/SHT45, pompa) costano meno di 30€ in totale + pannello solare. Il software è completamente gratuito e open source.":
      "The core components (ESP32, DHT11/SHT45 sensors, pump) cost under €30 total + solar panel. The software is completely free and open source.",
    "È disponibile su iOS?": "Is it available on iOS?",
    "No. Apple chiede 99$/anno per pubblicare sull'App Store.": "No. Apple charges $99/year to publish on the App Store.",

    // ===== SOSTENIBILITÀ =====
    "SOSTENIBILITÀ": "SUSTAINABILITY",
    "Tecnologia": "Technology",
    "al Servizio del Pianeta": "Serving the Planet",
    "Perché abbiamo progettato SegmaSirra pensando all'impatto ambientale, non solo alla comodità":
      "Why we designed SegmaSirra with environmental impact in mind, not just convenience",
    "PERCHÉ CE NE OCCUPIAMO": "WHY WE CARE",
    "Piccoli Sistemi,": "Small Systems,",
    "Grande": "Big",
    "Differenza": "Difference",
    "Alimentato dal sole, non dalla rete": "Powered by the sun, not the grid",
    "SegmaSirra è pensato per funzionare interamente a pannello solare. L'ESP32 e tutti i sensori sono a basso consumo, con deep sleep intelligente tra una lettura e l'altra — niente cavi verso la rete elettrica, niente CO₂ aggiuntiva per tenere accesa una serra.":
      "SegmaSirra is designed to run entirely on solar power. The ESP32 and all sensors are low-power, with smart deep sleep between readings — no cables to the power grid, no extra CO₂ to keep a greenhouse running.",
    "Meno acqua sprecata": "Less wasted water",
    "L'irrigazione parte solo quando il sensore di umidità del suolo dice che serve davvero, non a orari fissi \"a occhio\". Un'irrigazione fatta bene può ridurre lo spreco d'acqua molto più di quanto si pensi, specialmente nei mesi più caldi.":
      "Irrigation only kicks in when the soil moisture sensor says it's actually needed, not on a fixed \"guess\" schedule. Well-designed irrigation can cut water waste far more than people expect, especially in the hottest months.",
    "Dati che aiutano a decidere meglio": "Data that helps you decide better",
    "Vedere temperatura, umidità e trend nel tempo aiuta a capire cosa serve davvero alla pianta, invece di sovra-innaffiare o sovra-concimare \"per sicurezza\" — che è anche una delle cause più comuni di spreco nell'orticoltura amatoriale.":
      "Seeing temperature, humidity and trends over time helps you understand what the plant actually needs, instead of over-watering or over-fertilizing \"just in case\" — which is also one of the most common causes of waste in home gardening.",
    "Foto del pannello solare / impianto": "Photo of the solar panel / setup",
    "IL QUADRO GENERALE": "THE BIGGER PICTURE",
    "Il Cambiamento Climatico": "Climate Change",
    "e Cosa": "and What",
    "Possiamo Fare Noi": "We Can Do",
    "Non pretendiamo che una serra automatizzata da studenti risolva il cambiamento climatico. Ma crediamo che progetti piccoli, replicabili e open source contino: ogni sistema che riduce lo spreco d'acqua, usa energia pulita e rende l'agricoltura domestica più efficiente è un mattoncino in più nella direzione giusta.":
      "We're not claiming a student-built automated greenhouse will solve climate change. But we believe small, replicable, open-source projects matter: every system that cuts water waste, uses clean energy, and makes home growing more efficient is one more brick in the right direction.",
    "Open source, quindi replicabile": "Open source, so it's replicable",
    "Tutto il progetto — firmware, schema elettronico, app — è pubblico su GitHub. Chiunque può costruirsi la propria versione, adattarla, migliorarla. La sostenibilità di un progetto tecnico passa anche da quanto è facile riusarlo, senza dover reinventare tutto da zero.":
      "The whole project — firmware, circuit schematic, app — is public on GitHub. Anyone can build their own version, adapt it, improve it. A technical project's sustainability also depends on how easy it is to reuse, without reinventing everything from scratch.",
    "Educazione, non solo tecnologia": "Education, not just technology",
    "Costruire SegmaSirra ci ha fatto capire quanto sia facile sprecare acqua ed energia senza rendercene conto. Condividere il progetto è anche un modo per far riflettere altri studenti — e famiglie — su questi temi, in modo pratico invece che solo teorico.":
      "Building SegmaSirra made us realize how easy it is to waste water and energy without noticing. Sharing the project is also a way to get other students — and families — thinking about these issues, in a practical way rather than just a theoretical one.",
    "Vuoi vedere come funziona": "Want to see how it works",
    "nel dettaglio?": "in detail?",
    "Dai un'occhiata alle funzionalità o scarica l'app per iniziare a monitorare la tua serra.":
      "Take a look at the features or download the app to start monitoring your greenhouse."
  };

  // ---- Snapshot dei testi originali (per ripristino IT esatto) ----
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let originalTitle = document.title;

  function shouldSkip(node) {
    const p = node.parentElement;
    if (!p) return true;
    const tag = p.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return true;
    if (p.closest("svg")) return true;
    return false;
  }

  function walkTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) {
      if (!shouldSkip(n)) nodes.push(n);
    }
    return nodes;
  }

  function applyLang(lang) {
    const textNodes = walkTextNodes(document.body);

    textNodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.data);
      const original = originalText.get(node);
      const trimmed = original.trim();
      if (!trimmed) return;

      if (lang === "en") {
        const translation = DICT[trimmed];
        if (translation) {
          const lead = original.match(/^\s*/)[0];
          const trail = original.match(/\s*$/)[0];
          node.data = lead + translation + trail;
        }
      } else {
        node.data = original;
      }
    });

    document.querySelectorAll("[placeholder]").forEach((el) => {
      if (!originalAttrs.has(el)) originalAttrs.set(el, {});
      const store = originalAttrs.get(el);
      if (store.placeholder === undefined) store.placeholder = el.getAttribute("placeholder");
      const orig = store.placeholder;
      if (lang === "en") {
        el.setAttribute("placeholder", ATTR_DICT[orig] || orig);
      } else {
        el.setAttribute("placeholder", orig);
      }
    });

    if (lang === "en") {
      document.title = TITLES[originalTitle] || originalTitle;
    } else {
      document.title = originalTitle;
    }

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateButton(lang);
  }

  let btn;
  function createButton() {
    btn = document.createElement("button");
    btn.id = "langToggleBtn";
    btn.type = "button";
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      zIndex: "1001",
      padding: "10px 18px",
      background: "rgba(255,255,255,0.75)",
      border: "1.5px solid rgba(255,255,255,0.9)",
      borderRadius: "50px",
      fontFamily: "'Inter', sans-serif",
      fontSize: "13px",
      fontWeight: "600",
      color: "#1a2a1a",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s"
    });
    btn.addEventListener("mouseenter", () => { btn.style.transform = "translateY(-2px)"; });
    btn.addEventListener("mouseleave", () => { btn.style.transform = "translateY(0)"; });
    btn.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "it";
      applyLang(current === "en" ? "it" : "en");
    });
    document.body.appendChild(btn);
  }

  function updateButton(lang) {
    if (!btn) return;
    btn.textContent = lang === "en" ? "🌐 IT" : "🌐 EN";
    btn.title = lang === "en" ? "Passa all'italiano" : "Switch to English";
  }

  function init() {
    createButton();
    const saved = localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "it";
    applyLang(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();