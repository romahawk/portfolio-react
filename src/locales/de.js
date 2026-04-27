// src/locales/de.js
export default {
  nav: {
    results: "Ergebnisse",
    projects: "Projekte",
    services: "Leistungen",
    framework: "Framework",
    about: "Über mich",
    contact: "Kontakt",
    toggleNav: "Navigation umschalten",
    backToTop: "Nach oben",
  },

  results: {
    title: "Ergebnisse",
    intro: "14+ Jahre belastbare Delivery-Erfahrung in regulierten Branchen, operativer Skalierung und KI-augmentierten Produktsystemen.",
    tiles: [
      { metric: "10+ Jahre", label: "Produkt- & System-Leadership in regulierten Branchen." },
      { metric: "$50M+", label: "Jahresumsatz unter Executive Leadership verantwortet." },
      { metric: "Full-Stack", label: "Systemarchitektur über einen KI-augmentierten SDLC." },
      { metric: "4+ Domänen", label: "Expertise in MedTech, Pharma, Logistik und B2B SaaS." },
      { metric: "KI-Nativ", label: "10x Delivery-Geschwindigkeit durch agentische Orchestrierung." },
    ],
  },

  hero: {
    eyebrow: "TECHNISCHES PRODUKTPORTFOLIO",
    headline: "Technical Product Manager | Systeme & KI-Automatisierung",
    subtitle:
      "Ich ersetze operatives Chaos durch skalierbare, KI-gestützte Systeme. Über 10 Jahre Domänenexpertise in MedTech und Pharma, mit Verantwortung für mehr als $50M Jahresumsatz. Ich schließe die Lücke zwischen Executive Strategy und schneller technischer Umsetzung mit einem KI-orchestrierten SDLC.",
    ctaSDLC: "Wie ich baue (KI-Stack)",
    ctaProjects: "Ausgelieferte Systeme ansehen",
    downloadCV: "Lebenslauf herunterladen",
    scroll: "Scrollen",
  },

  servicesPage: {
    nav: {
      hero: "Leistungen",
      overview: "Überblick",
      details: "Details",
      process: "Ablauf",
      proof: "Kontext",
      book: "Termin",
    },
    cta: {
      book: "Termin buchen",
      how: "Ablauf ansehen",
      diagnosis: "Mit einer Friction Diagnosis starten",
      viewSystems: "Systeme ansehen",
    },
    hero: {
      eyebrow: "Produktisierte Systeme",
      title: "Einfache Systeme, die Kunden bringen und Zeit sparen – schnell umgesetzt",
      subtitle:
        "Wir konzipieren und bauen fokussierte Web-, Workflow- und Automatisierungssysteme für Teams, die mehr Klarheit, weniger manuelle Arbeit und schnellere Umsetzung brauchen.",
      panelLabel: "Signale zur Umsetzung",
      signals: [
        { label: "Startpunkt", value: "Ein konkretes Business-Problem" },
        { label: "Umsetzung", value: "Schlank, klar begrenzt, launchbereit" },
        { label: "Best Fit", value: "B2B, Operations, regulierte Teams" },
      ],
    },
    friction: {
      kicker: "Mit dem Engpass starten",
      title: "Business-Reibung wird meist sichtbar, bevor klar ist, welches Tool wirklich gebraucht wird",
      intro:
        "Der Einstieg beginnt damit, zu lokalisieren, wo das Unternehmen qualifizierte Anfragen, Zeit oder Entscheidungsklarheit verliert. Danach installieren wir das kleinste System mit messbarer Verbesserung.",
    },
    frictionPoints: [
      {
        icon: "LineChart",
        title: "Lead-Reibung",
        text: "Die Website bekommt Besuche, aber Angebot, Vertrauen oder Qualitaet der Anfragen bleiben zu schwach.",
      },
      {
        icon: "BarChart3",
        title: "Operativer Drag",
        text: "Arbeit wird ueber Tabellen, Postfaecher und getrennte Tools verfolgt, sodass Status zu spaet sichtbar wird.",
      },
      {
        icon: "Bot",
        title: "Manuelle Wiederholung",
        text: "Dieselben Admin- und Follow-up-Aufgaben wiederholen sich jede Woche ohne simples System dahinter.",
      },
      {
        icon: "Gauge",
        title: "Conversion-Verlust",
        text: "Es gibt Interesse, aber Seiten, CTAs oder Buchungswege erzeugen Zoegern vor der Aktion.",
      },
    ],
    diagnosisOffer: {
      kicker: "Start hier",
      title: "Friction Diagnosis Sprint",
      copy:
        "Nicht sicher, ob Ihr groesstes Problem Leads, Conversion, manuelle Arbeit oder operative Transparenz ist? Wir starten mit einer fokussierten Diagnose, um die wirksamsten Engpaesse zu identifizieren und den schnellsten Verbesserungsweg zu skizzieren.",
      timeline: "3-5 Tage",
      outputs: [
        "Top 3 Reibungspunkte",
        "ROI-priorisierte Verbesserungsfelder",
        "Empfohlener Systempfad",
        "Klare Umsetzungs-Roadmap",
      ],
      cta: "Diagnose buchen",
    },
    systemsIntro: {
      kicker: "Empfohlene Systeme",
      title: "Waehlen Sie das System, das den Business-Output veraendert",
      intro:
        "Das sind keine isolierten Websites oder Dashboards. Jedes System ist darauf zugeschnitten, einen Engpass zu entfernen und ein klareres operatives Ergebnis zu erzeugen.",
    },
    systems: [
      {
        id: "lead-generation-system",
        icon: "LineChart",
        title: "Lead Generation System",
        purpose: "Fuer Unternehmen, die mehr qualifizierte Anfragen brauchen.",
        recommendedWhen: "Schwache Pipeline, unklare Positionierung, wenig Vertrauen auf der Seite",
        includes: [
          "Positionierung und Messaging",
          "Conversion-orientierte Landingpage",
          "CTA- und Buchungsfluss",
          "Trust-Elemente",
          "Basis-Tracking",
        ],
        timeline: "7 Tage",
        outcome: "Klareres Angebot, staerkeres Vertrauen, mehr qualifizierte Gespraeche.",
      },
      {
        id: "operations-visibility-system",
        icon: "BarChart3",
        title: "Operations Visibility System",
        purpose: "Fuer Teams, die Arbeit ueber Tabellen, E-Mail oder getrennte Tools steuern.",
        recommendedWhen: "Status-Chasing, Tabellen-Drift, unklare Verantwortlichkeit",
        includes: [
          "Workflow-Mapping",
          "Status-Dashboard",
          "Bottleneck-Transparenz",
          "Rollenbasierte Views bei Bedarf",
          "Einfache Reporting-Schicht",
        ],
        timeline: "2-3 Wochen",
        outcome: "Weniger Tabellen-Drift, schnellere Entscheidungen, klarere Verantwortlichkeit.",
      },
      {
        id: "automation-leverage-system",
        icon: "Bot",
        title: "Automation Leverage System",
        purpose: "Fuer repetitive manuelle Arbeit, die sicher reduziert oder strukturiert werden kann.",
        recommendedWhen: "Woechentliche Wiederholung, Handoff-Verzoegerungen, unklare Automatisierungs-Prioritaeten",
        includes: [
          "Prozess-Audit",
          "Data-Flow-Mapping",
          "Ranking von Automatisierungschancen",
          "KI-/Tool-Empfehlungen",
          "Umsetzungs-Roadmap",
        ],
        timeline: "3-5 Tage",
        outcome: "Priorisierte Automatisierungs-Roadmap mit realistischen naechsten Schritten.",
      },
      {
        id: "conversion-optimization-system",
        icon: "Gauge",
        title: "Conversion Optimization System",
        purpose: "Fuer Websites oder Funnels mit vorhandenem Traffic, aber schwacher Conversion.",
        recommendedWhen: "Traffic ist da, aber Besucher zoegern oder springen ab",
        includes: [
          "Messaging-Audit",
          "CTA-Struktur",
          "Verbesserungen im Seitenfluss",
          "Trust- und Einwandbehandlung",
          "Vorher-/Nachher-Empfehlungen",
        ],
        timeline: "5-10 Tage",
        outcome: "Schaerferer Conversion-Pfad ohne kompletten Relaunch.",
      },
    ],
    labels: {
      timeline: "Zeitrahmen",
      output: "Output",
      includes: "Enthaelt",
      outcome: "Ergebnis",
      recommendedWhen: "Empfohlen bei",
    },
    overview: {
      kicker: "Leistungen",
      title: "Wählen Sie das System, das die meiste Reibung entfernt",
      intro:
        "Jedes Angebot ist auf ein sichtbares Ergebnis ausgerichtet: mehr qualifizierte Leads, weniger manuelle Arbeit, bessere Conversion oder eine klare Automatisierungs-Roadmap.",
      items: [
        {
          id: "lead-generation-website",
          icon: "LineChart",
          title: "Lead-Generation-Website",
          description: "Eine fokussierte Website, die das Angebot erklärt, Vertrauen schafft und Besucher in Gespräche führt.",
          timeline: "7 Tage",
          outcome: "Klare Positionierung und mehr qualifizierte Anfragen",
        },
        {
          id: "workflow-dashboard",
          icon: "BarChart3",
          title: "Workflow- / Operations-Dashboard",
          description: "Ein praktisches Dashboard für Arbeit, Übergaben, Status und operative Engpässe.",
          timeline: "2–3 Wochen",
          outcome: "Weniger Tabellen-Chaos und schnellere Entscheidungen",
        },
        {
          id: "ai-automation-audit",
          icon: "Bot",
          title: "KI- & Automatisierungs-Audit",
          description: "Ein schneller Scan von repetitiver Arbeit, Datenflüssen und sicheren Automatisierungschancen.",
          timeline: "3–5 Tage",
          outcome: "Priorisierte Automatisierungs-Roadmap mit nächsten Schritten",
        },
        {
          id: "conversion-optimization-sprint",
          icon: "Gauge",
          title: "Conversion-Optimierungs-Sprint",
          description: "Ein fokussierter Sprint für Messaging, Nutzerfluss, CTAs und Seitenstruktur bei bestehender Nachfrage.",
          timeline: "5–10 Tage",
          outcome: "Klarerer Conversion-Pfad ohne kompletten Relaunch",
        },
      ],
    },
    details: {
      kicker: "Details",
      title: "Was jede Leistung konkret liefert",
      expectedLabel: "Erwartetes Ergebnis",
      items: [
        {
          id: "lead-generation-website",
          icon: "LineChart",
          title: "Lead-Generation-Website",
          timeline: "7 Tage",
          expected: "Eine live geschaltete, glaubwürdige Seite, die das Angebot schnell verständlich macht und einen klaren nächsten Schritt bietet.",
          blocks: [
            { label: "Problem", items: ["Besucher verstehen das Angebot nicht schnell genug", "Vertrauenssignale sind verstreut", "Anfragen hängen nur an Empfehlungen"] },
            { label: "Was wir tun", items: ["Positionierung und Seitenfluss klären", "Responsive Sektionen bauen", "CTA- und Anfrageweg verbinden"] },
            { label: "Was Sie bekommen", items: ["Live-Website oder Landingpage", "Conversion-orientierte Copy-Struktur", "Analytics-bereiter CTA-Pfad"] },
            { label: "Zeitplan", items: ["Tag 1 Analyse und Struktur", "Tage 2–6 Umsetzung", "Tag 7 Launch-Check"] },
          ],
        },
        {
          id: "workflow-dashboard",
          icon: "BarChart3",
          title: "Workflow- / Operations-Dashboard",
          timeline: "2–3 Wochen",
          expected: "Eine zentrale operative Sicht, die Statusabfragen reduziert und Übergaben sichtbar macht.",
          blocks: [
            { label: "Problem", items: ["Arbeit verteilt sich auf mehrere Tools", "Manuelles Reporting bremst Entscheidungen", "Ownership ist unklar"] },
            { label: "Was wir tun", items: ["Workflow abbilden", "Rollen, Zustände und Datenpunkte definieren", "Ein nutzbares Dashboard bauen"] },
            { label: "Was Sie bekommen", items: ["Dashboard-Prototyp oder internes Live-Tool", "Workflow-Logik und Statusmodell", "Klare Übergabe-Dokumentation"] },
            { label: "Zeitplan", items: ["Woche 1 Modell und Prototyp", "Woche 2 Umsetzung", "Optional Woche 3 Härtung"] },
          ],
        },
        {
          id: "ai-automation-audit",
          icon: "Bot",
          title: "KI- & Automatisierungs-Audit",
          timeline: "3–5 Tage",
          expected: "Eine kurze Liste von Automatisierungschancen, priorisiert nach Wert, Risiko und Umsetzungsaufwand.",
          blocks: [
            { label: "Problem", items: ["KI-Ideen bleiben unkonkret", "Manuelle Aufgaben wiederholen sich jede Woche", "Risiko ist schwer einzuschätzen"] },
            { label: "Was wir tun", items: ["Workflows und Dateneingaben prüfen", "Sichere Automatisierungskandidaten finden", "Aufwand und Grenzen einschätzen"] },
            { label: "Was Sie bekommen", items: ["Übersicht der Automatisierungschancen", "Pilot-Empfehlung", "Richtung für Prompts und Tooling"] },
            { label: "Zeitplan", items: ["Kickoff und Zugriffsprüfung", "Workflow-Scan", "Roadmap-Übergabe"] },
          ],
        },
        {
          id: "conversion-optimization-sprint",
          icon: "Gauge",
          title: "Conversion-Optimierungs-Sprint",
          timeline: "5–10 Tage",
          expected: "Ein klarerer Conversion-Pfad, der Zögern reduziert und qualifizierte Besucher zur nächsten Aktion führt.",
          blocks: [
            { label: "Problem", items: ["Traffic ist da, aber Intent geht verloren", "CTAs konkurrieren miteinander", "Messaging wirkt generisch"] },
            { label: "Was wir tun", items: ["Hierarchie und Reibung auditieren", "Wichtige Sektionen neu schreiben", "CTA-Platzierung und Flow verbessern"] },
            { label: "Was Sie bekommen", items: ["Priorisierte Conversion-Fixes", "Aktualisierte Seitensektionen", "Mess-Checkliste"] },
            { label: "Zeitplan", items: ["Schneller Audit", "Copy- und UI-Update", "Launch-Review"] },
          ],
        },
      ],
    },
    process: {
      kicker: "Arbeitsweise",
      title: "Ein kleines System vor einer großen Entscheidung",
      intro:
        "Die Seite folgt derselben Logik wie die Umsetzung selbst: Engpass diagnostizieren, passendes System installieren und dann messen, ob die Reibung wirklich sinkt.",
      steps: [
        {
          icon: "SearchCheck",
          title: "Kurze Analyse",
          desc: "Wir identifizieren ein konkretes Problem in Ihrem Prozess.",
        },
        {
          icon: "Settings2",
          title: "Schnelle Umsetzung",
          desc: "Wir setzen eine einfache Lösung in 5–10 Tagen um.",
        },
        {
          icon: "Rocket",
          title: "Start & Optimierung",
          desc: "Sie nutzen das System direkt und wir verbessern es weiter.",
        },
      ],
    },
    processSteps: [
      {
        icon: "SearchCheck",
        title: "Schritt 1 - Reibung diagnostizieren",
        text: "Identifizieren, wo das Unternehmen Leads, Zeit oder Entscheidungsklarheit verliert.",
      },
      {
        icon: "Settings2",
        title: "Schritt 2 - Das richtige System installieren",
        text: "Die fokussierte Loesung bauen: Landingpage, Dashboard, Automatisierungs-Map oder Conversion-System.",
      },
      {
        icon: "Rocket",
        title: "Schritt 3 - Messen und verbessern",
        text: "Output verfolgen und das System anhand realer Nutzung verbessern.",
      },
    ],
    router: {
      kicker: "Decision Router",
      title: "Welches System brauchen Sie?",
      intro:
        "Wenn die Tool-Wahl unklar ist, starten wir nicht beim Deliverable, sondern beim Business-Problem.",
    },
    decisionRouterItems: [
      {
        problem: "Wir bekommen nicht genug qualifizierte Anfragen",
        system: "Lead Generation System",
      },
      {
        problem: "Wir steuern zu viel ueber Tabellen",
        system: "Operations Visibility System",
      },
      {
        problem: "Wir wiederholen jede Woche dieselben manuellen Aufgaben",
        system: "Automation Leverage System",
      },
      {
        problem: "Menschen besuchen die Seite, konvertieren aber nicht",
        system: "Conversion Optimization System",
      },
      {
        problem: "Wir sind nicht sicher",
        system: "Friction Diagnosis Sprint",
      },
    ],
    proof: {
      kicker: "Kontext",
      title: "Systeme gebaut aus echter Operations-Erfahrung, nicht aus Agentur-Guesswork",
      text:
        "Ich entwerfe Systeme aus der Operator-Perspektive – dort, wo Workflows brechen, Entscheidungen stocken und Zeit verloren geht. Jeder Build wird so geschnitten, dass er Reibung entfernt und messbaren Hebel im Tagesgeschäft erzeugt.",
      note:
        "Basiert auf operator-seitiger Delivery-Erfahrung und Workflow-Analyse.",
      stats: [
        { value: "10+ Jahre", label: "Delivery in MedTech, Logistik, FinTech" },
        { value: "$40M+", label: "Operations verantwortet / unterstützt" },
        { value: "5+ Systeme", label: "in realen Umgebungen ausgeliefert" },
        { value: "30 – 50%", label: "Potenzial zur Reduktion manueller Arbeit" },
      ],
    },
    credibility: {
      kicker: "Gebaut als wiederholbares Delivery-System",
      title: "Gebaut als wiederholbares Delivery-System",
      text:
        "Die Methode ist bewusst einfach: vor dem Bauen diagnostizieren, Business-Output statt Dekoration priorisieren, mit simplen Tools starten und ein System hinterlassen, das wiederholt oder verbessert werden kann.",
      points: [
        "Vor dem Bauen diagnostizieren.",
        "Business-Output priorisieren, nicht Dekoration.",
        "Einfache Tools vor komplexer Automatisierung einsetzen.",
        "Schnell und messbar verbessern.",
        "Das System dokumentieren, damit es wiederholt oder verbessert werden kann.",
      ],
    },
    trust: {
      kicker: "Vertrauen",
      title: "Aufgebaut von der Operator-Seite",
      text:
        "Vor Design oder Code bilde ich ab, wie die Arbeit wirklich abläuft: wo Entscheidungen ins Stocken geraten, wo Übergaben scheitern und wo Zeit verloren geht.",
      text2:
        "Dann scope ich das kleinste System, das sichtbaren Hebel schafft — schnellere Klarheit, saubere Ausführung oder messbare Zeitersparnis.",
    },
    note: {
      kicker: "Vertrauen",
      title: "Kurze Notiz von Roman",
      text:
        "Ich baue zuerst aus Operator-Perspektive. Vor Design oder Code suche ich nach Workflow-Logik, Entscheidungspunkten und dem kleinsten System, das sichtbaren Hebel schafft.",
    },
    final: {
      kicker: "Nächster Schritt",
      title: "Lassen Sie uns ein konkretes Problem lösen",
      text:
        "Bringen Sie einen Engpass mit: schwache Lead-Generierung, manuelles Reporting, unklare Conversion oder eine Automatisierungsidee, die Struktur braucht. Wir machen daraus einen kleinen Pilot.",
      secondary: "Mit einem kleinen Piloten starten",
      primaryCta: "Friction Diagnosis buchen",
      secondaryCta: "Kontakt aufnehmen",
    },
  },

  about: {
    title: "Über mich",
    eyebrow: "Brücke zwischen $50M+ operativer Komplexität und KI-orchestrierter Umsetzung.",
    heading: "Technical Product Manager | Systeme & KI-Automatisierung",
    profileAlt: "Roman Mazuryk Profilbild",
    para1:
      "Mit über 10 Jahren Erfahrung in der Führung von MedTech- und regulierter B2B-Delivery arbeite ich an der Schnittstelle von Produktstrategie und KI-augmentierter Architektur. Ich spezialisiere mich darauf, mehrdeutige, compliance-intensive Anforderungen in vorhersehbare Systeme zu überführen und nutze meine Erfahrung aus der Steuerung von $50M+ Operations, um die Lücke zwischen Business-P&L und technischer Umsetzung zu schließen.",
    para2:
      "Mein Betriebsmodell basiert auf Entscheidungskomprimierung. Ich nutze KI als Werkzeug für systemische Geschwindigkeit, nicht als Coding-Abkürzung. Das Ziel ist, Ambiguität in auditierbare Umsetzung zu übersetzen und mit weniger Übergaben, klareren Trade-offs und stärkerer Delivery-Control schneller zu produktionsreifen Ergebnissen zu kommen.",
    pillars: {
      strategy: {
        title: "Strategie",
        text: "Maximal 3 aktive Workstreams. Fokus auf Outcome-Velocity statt Feature-Volumen.",
      },
      architecture: {
        title: "Architektur",
        text: "Gründliche Systemvalidierung, bevor eine einzige Zeile Code geschrieben wird.",
      },
      execution: {
        title: "Ausführung",
        text: "Kleine, tägliche Deployments. Was nicht in Produktion ist, hat das Problem noch nicht gelöst.",
      },
    },
    operatingModel: {
      eyebrow: "Betriebsmodell",
      heading: "Mein Betriebsmodell: Entscheidungskomprimierung",
      text:
        "Ich reduziere organisationalen Reibungsverlust, indem ich komplexe operative Anforderungen in schlanke Systemprimitiven übersetze. Durch den Einsatz KI-agentischer Workflows (Cursor, ClaudeCode) verkürze ich die Distanz zwischen Business Requirement und produktionsreifem System, sodass Delivery nicht nur schnell, sondern auch auditierbar und wirksam ist.",
      principles: {
        strategy: {
          label: "Strategie:",
          text: "Maximal 3 aktive Workstreams. Fokus auf Outcome-Velocity statt Feature-Volumen.",
        },
        architecture: {
          label: "Architektur:",
          text: "Gründliche Systemvalidierung, bevor eine einzige Zeile Code geschrieben wird.",
        },
        execution: {
          label: "Ausführung:",
          text: "Kleine, tägliche Deployments. Was nicht in Produktion ist, hat das Problem noch nicht gelöst.",
        },
      },
      cta: "Das KI-Produktionssystem ansehen",
    },
    bestFit: {
      eyebrow: "Optimales Umfeld",
      heading: "Wo ich am besten wirke",
      para1:
        "Konzipiert für Remote-First- und English-First-Umgebungen mit Fokus auf EU- und globales B2B SaaS. Dieses Modell wirkt am stärksten dort, wo technische Ambiguität hoch ist, Umsetzungsgeschwindigkeit zählt und Leadership klare Kontrolle über Produkt, Engineering und Operations braucht.",
      para2:
        "Ich arbeite direkt mit Engineering an der Architektur zusammen und richte gleichzeitig das Leadership auf die Trade-offs aus, die Geschwindigkeit, Zuverlässigkeit und langfristigen Leverage bestimmen. In regulierten MedTech- und Pharma-Kontexten ist Auditierbarkeit der USP: Micro-Scope, explizite Akzeptanzkriterien und KI-gestützte Dokumentation schaffen Nachvollziehbarkeit, ohne Delivery zu verlangsamen.",
      para3:
        "Vollständige Systemeigentümerschaft – von der Unklarheit bis zum ausgelieferten operativen Impact.",
    },
    outside: {
      eyebrow: "Außerhalb der Plattform",
      heading: "Außerhalb der Plattform",
      basketball: "Systemdenken auf Teamdynamik angewendet.",
      training: "Feedback-Schleifen akkumulieren sich über Zeit.",
      travel: "Mustererkennung in verschiedenen Umgebungen.",
      quote:
        "„Manche wollen, dass es passiert, manche wünschen es sich, andere machen es möglich.“",
      quoteAttrib: "- Michael Jordan",
    },
  },

  aiSdlc: {
    title: "KI-augmentierter SDLC",
    intro:
      "Ein Operating Model für Executive Control in produktionsreifer Delivery. KI übernimmt Leverage, Scaffolding und Signal-Synthese; menschliches Urteilsvermögen verantwortet Architektur, Trade-offs und Release-Qualität. Konzipiert für High-Velocity-Teams in EU-/globalem B2B SaaS und regulierten Umgebungen, in denen Auditierbarkeit die Umsetzung nicht verlangsamen darf.",
    badge1: "Remote-First-Architektur",
    badge2: "MedTech- / Pharma-Auditierbarkeit",
    badge3: "EU- / global marktreif",
    badge4: "FinTech- / Blockchain-ready",
    cta: "Workflow in Aktion ansehen",
    strategy: {
      heading: "Strategie & Governance",
      p1label: "Betriebsregeln:",
      p1text:
        "Maximal 3 aktive Projekte, ein Outcome pro Woche und eine strikte „Kein Refactoring ohne Shipping Impact“-Regel. Scope ist eine Entscheidung, kein Backlog.",
      p2label: "Entscheidungsprotokolle:",
      p2text:
        "erfassen Trade-off-Begründungen, akzeptierte Risiken und Systemimplikationen, um langfristigen Leverage über Releases hinweg aufzubauen. Jede Architekturentscheidung hat ein Protokoll – kein institutionelles Wissen bleibt in Slack-Threads eingeschlossen.",
      p3label: "Compliance-Vorteil:",
      p3text:
        "In regulierten MedTech-/Pharma-Umgebungen erfüllen explizite Betriebsregeln und Entscheidungsprotokolle Audit-Anforderungen, ohne Delivery-Overhead zu erzeugen. Governance ist ein automatisiertes Nebenprodukt des Workflows und kein manueller Overhead.",
    },
    buildLoop: {
      heading: "Die tägliche Build-Schleife",
      p1label: "Micro-Scope-Umsetzung:",
      p1text:
        "Ein GitHub-Issue auswählen, Akzeptanzkriterien und Datenschemata definieren, bevor Code angefasst wird, und dann über kleine tägliche PRs implementieren. Der Scope wird beim Öffnen des Issues eingefroren – zum Schutz der Scope-Integrität und vorhersehbarer Velocity.",
      p2label: "Architektur-Gate & Risikobewertung:",
      p2text:
        "ist ein hartes Gate vor jeder Implementierung: Architekturlogik, Zustandsübergänge und Edge Cases werden vom Architekten validiert, bevor die Umsetzung in Cursor und ClaudeCode als architektengeführte Implementierung startet. Die Modellschicht übernimmt KI-gestütztes Scaffolding; die menschliche Schicht verifiziert Architektur, Constraints und Production Readiness.",
      p3label: "Auditierbarkeit in regulierten Kontexten:",
      p3text:
        "Micro-Scope plus explizite Akzeptanzkriterien liefern einen nachvollziehbaren Audit-Trail für MedTech-/Pharma-Auslieferung ohne Verlangsamung der Kadenz. Jeder PR entspricht direkt einer abgegrenzten Anforderung, wobei KI-gestütztes Scaffolding und menschlich verifizierte Architektur die Executive Control über das ausgelieferte Ergebnis sichern.",
    },
    hardening: {
      heading: "Der Produktions-Hardening-Stack",
      lighthouse: "Performance-Baselines und Release-Gating. Eine Verschlechterung des Scores blockiert den Merge.",
      sentry: "Sichtbarkeit von Laufzeitfehlern und Fehler-Triage mit umgebungsbasiertem Alerting.",
      posthog: "Nutzungsanalysen und Post-Release-Signal-Tracking zur Validierung des Delivery-Impacts.",
      aiObservability:
        "LLMs synthetisieren Sentry-Logs und PostHog-Signale zu umsetzbaren Produktiterationen, damit Teams schneller vom Rauschen zu priorisierten Entscheidungen kommen.",
      aiReview:
        "sind ein Standard-Implementierungsgate vor dem Merge, neben menschlicher Freigabe bei architekturkritischen Änderungen. Jeder PR durchläuft automatisierte KI-Qualitäts-Gates, damit menschliche Ingenieursleistung für Business-Probleme statt für Boilerplate-Debugging eingesetzt wird.",
    },
  },

  skills: {
    title: "Kompetenzen & Leverage",
    statement:
      "Ich nutze Code als Leverage-Instrument, um Systemgrenzen zu validieren, Trade-offs zu klären und produktionsreife Auslieferung zu beschleunigen –",
    statementEm: "nicht als Selbstzweck.",
    pillars: {
      "product-systems-leadership": {
        title: "Produktsystem-Leadership",
        cards: [
          {
            title: "System- & Plattformdenken",
            items: [
              "Operative Workflows in Produktprimitiven übersetzen: Rollen, Zustände, Berechtigungen und Übergaben",
              "Datenmodelle, APIs und Integrationsgrenzen mit Auditierbarkeit und Compliance-by-Design definieren",
              "Explizite Trade-offs vorantreiben: Build vs. Buy, Geschwindigkeit vs. Zuverlässigkeit, MVP vs. langfristige Wartbarkeit",
            ],
          },
          {
            title: "Produkt-Leadership",
            items: [
              "Mehrdeutige Probleme in klare Outcomes und ausführbaren Produktscope überführen",
              "Roadmap- und Priorisierungsentscheidungen über Produkt, Engineering und Operations hinweg leiten",
              "Pragmatische Scrum-/Kanban-Kadenzen betreiben; Scope kontrollieren, Abhängigkeiten erfassen und Releases für vorhersehbare Ausführung sequenzieren",
            ],
          },
          {
            title: "Stakeholder-Leadership",
            items: [
              "Führungsebene und Delivery-Teams auf Trade-offs, Zeitpläne und messbare Outcomes abstimmen",
              "Workshops, Anforderungsinterviews und Entscheidungssitzungen mit klarer Verantwortung moderieren",
              "Präzise Artefakte erstellen: PRDs, Specs, ADRs und operative Updates",
            ],
          },
        ],
      },
      "technical-leverage": {
        title: "Technischer Leverage",
        cards: [
          {
            title: "KI-beschleunigte Produktabläufe",
            items: [
              "LLM-Workflows für schnelleres Prototyping, Dokumentation und Architekturerkundung einsetzen",
              "Wiederverwendbare Prompting-Muster für wiederkehrende Specs, Audits und Delivery-Artefakte aufbauen",
              "Manuelle Koordination durch Automatisierung und sauberere Interface-Verträge reduzieren",
            ],
          },
          {
            title: "Schnelles Prototyping & Validierung",
            items: [
              "Hochrisiko-Pfade früh prototypisieren: Workflows, Berechtigungen, Datenintegrität und UX-Logik",
              "Constraint-getriebenes MVP-Slicing nutzen, um Annahmen vor dem Skalieren zu validieren",
              "Kleine Inkremente ausliefern, schnell validieren und Systemgrenzen gezielt weiterentwickeln",
            ],
          },
          {
            title: "Kern-Engine & Stack",
            items: [
              "React, JavaScript, Python (Flask/FastAPI) und Node.js für produktive Web-Systeme und Service-Prototypen",
              "PostgreSQL, Firebase, REST APIs und rollenbasierte Zugriffskontrolle für operatives Datenmodellieren",
              "Git/GitHub, Docker, Vercel; Mermaid für Architekturdiagramme; Linear/Jira für Delivery-Governance",
            ],
          },
        ],
      },
      "operating-edge": {
        title: "Operative Stärke",
        cards: [
          {
            title: "Vorteil in regulierten Domänen",
            items: [
              "MedTech- und Pharma-Ausführungsvorteil: Entwicklung für Umgebungen, in denen Betriebszeit, Auditierbarkeit und Sicherheit nicht verhandelbar sind",
              "Micro-Scope-Kontrolle und explizite Akzeptanzkriterien halten die Auslieferung für regulierte SDLC-Anforderungen nachvollziehbar",
              "14+ Jahre in compliance-intensiven Beschaffungs-, klinischen und Logistik-Workflows",
            ],
          },
          {
            title: "Eigenverantwortung & Operator Mindset",
            items: [
              "Auslieferung von Anfang bis Ende verantworten: vom Problem-Framing über Deployment bis zum operativen Impact",
              "Strukturierte Schleifen nutzen – Constraints → Modell → Entscheidung → Iteration – um Ambiguität in Ausführung zu überführen",
              "Für System-Outcomes verantwortlich bleiben, nicht Output-Volumen; ruhige Auslieferung unter hohem Druck aufrechterhalten",
            ],
          },
        ],
      },
    },
  },

  projects: {
    title: "Produktsysteme",
    tabs: {
      tech: "Produktsysteme",
      medtech: "Regulierte Delivery-Systeme",
    },
    filters: {
      All: "Alle",
      "Workflow Systems": "Workflow-Systeme",
      "Decision Support": "Entscheidungsunterstützung",
      "Real-Time Systems": "Echtzeitsysteme",
      "Internal Tools": "Interne Tools",
      "Trading Systems": "Trading-Systeme",
      FinTech: "FinTech",
      Productivity: "Produktivität",
      B2B: "B2B",
      MedTech: "MedTech",
    },
    ariaLabel: "Portfolio-Kategorien",
    filtersAriaLabel: "Produktsystem-Tags filtern",
    techSectionTitle: "Produktsysteme",
    techIntro:
      "Systeme, die ich entwerfe und ausliefere, um operative Komplexität in skalierbare Produkte zu überführen – von internen Tools und Datenintegritätsschichten bis hin zu Echtzeit-Interaktions-Workflows.",
    medSectionTitle: "MedTech – Integration & Auslieferung",
    medIntro:
      "Regulierte Auslieferung in klinischen Umgebungen: Multi-Vendor-Integrationen, Workflow-Governance, Adoption Enablement und Lifecycle-Zuverlässigkeit unter realen Constraints.",
    medMgmtSectionTitle: "MedTech – Programme & kommerzielle Ausführung",
    medMgmtIntro:
      "Multi-Site-Rollout-Governance, Beschaffung/Ausschreibungen, Vendor-Orchestrierung und Adoption Enablement.",
    empty: "Keine Projekte entsprechen diesem Filter.",
    clearFilter: "Filter zurücksetzen",
    viewLink: "Ansehen",
    inProgress: "In Entwicklung",
    caseStudy: "Fallstudie",
    loadingCaseStudy: "Fallstudie wird geladen",
    comingSoon: "Demnächst verfügbar…",
    items: {
      livesurgery: {
        title: "LiveSurgery – Echtzeit-Plattform für chirurgische Zusammenarbeit",
        summary:
          "Founder-geführtes MedTech-PoC mit einem vollständig funktionalen OP-Workspace: Multi-Panel-Videokoordination, Drag-and-Drop-Quellzuweisung, rollenbasierter Zugriff (Chirurg / Beobachter / Admin) und WebSocket-gestützte Echtzeit-Layout-Synchronisation mit optimistischer Nebenläufigkeit. Unterstützt durch eine FastAPI- + SQLite-REST-API mit Session-Lifecycle-Management, Analytics-Dashboard und durchsuchbarem Session-Archiv.",
      },
      flowlogics: {
        title: "Flowlogics – API-gesteuerte Supply-Visibility und Lifecycle-Kontrolle",
        summary:
          "Logistik-Betriebsplattform, die Bestellungen, Lagereingang und Auslieferungsübergänge mit einem strikten API-Vertrag, rollengesteuerten Workflows, Read-only-Demo-Modus und zeitlinienbasierter ETA-Risikosichtbarkeit zentralisiert.",
      },
      alpharhythm: {
        title: "AlphaRhythm – Trading-Ausführungs- und Disziplinsystem",
        summary:
          "Regelbasiertes Trading-Ausführungssystem zur Verbesserung von Disziplin, Durchsetzung von Strategie-Compliance und Umwandlung diskretionärer Entscheidungen in einen wiederholbaren Workflow. Enthält Trade-Journaling, Ausführungsgates, Regelverletzungs-Tracking und Performance-Review-Schleifen für konsistenteres Trader-Verhalten.",
      },
      jobsprint: {
        title: "JobSprint – Workflow-Manager für die Jobsuche",
        summary:
          "Ausführungsorientiertes Jobsuche-System für Einzelkandidaten aus Product und Engineering, das verstreute Notizen und Tabellen durch eine Drag-and-Drop-Bewerbungspipeline, wöchentliches Execution-Tracking, Funnel-Analytics und eine Angebots-Wahrscheinlichkeitsansicht ersetzt.",
      },
      "surgiris-lights": {
        title: "SURGIRIS LED-Operationsleuchten (Multi-Site-Auslieferung)",
        summary:
          "Standardisierte Multi-Site-OP-Beleuchtungsdeployments in über 15 OP-Sälen mit Ausrichtung klinischer Workflow-Anforderungen an Installationsgovernance, Schulung und Lifecycle-Zuverlässigkeit unter Störungsbedingungen.",
      },
      surgimedia: {
        title: "SURGIMEDIA Integrierte OP-Systeme",
        summary:
          "End-to-end-OP-Integrationsprogramme für Visualisierungs-, Routing- und Dokumentations-Workflows über Fachbereiche hinweg orchestriert, mit Multi-Vendor-Governance und klinischer Abstimmung.",
      },
      "gas-pendants": {
        title: "Medizinische Gas- & Geräteversorgungseinheiten (ICU/OP)",
        summary:
          "ICU/OP-Pendelsystem-Deployments für Sicherheit, Ergonomie und operative Zuverlässigkeit unter Ausrichtung technischer Anforderungen an klinische Nutzung und Einrichtungsconstraints verantwortet.",
      },
      "diagnostic-therapeutic": {
        title: "Diagnostische & Therapeutische Systeme (Launch + Deployment)",
        summary:
          "Launch und Deployment fortschrittlicher Diagnostik- und Therapiesysteme durch strukturierte Adoption-Governance, Stakeholder-Onboarding und Lifecycle-Bereitschaft orchestriert.",
      },
      "surgical-monitors": {
        title: "Chirurgische Monitore & Rekorder (Imaging-Workflow)",
        summary:
          "Displays und Rekorder für Echtzeit-Imaging und HD/4K-Routing integriert, mit Vendor-Orchestrierung, Installationsbereitschaft und klinischem Onboarding für Workflow-Zuverlässigkeit.",
      },
      "national-launches": {
        title: "Nationale Produktlaunches (MedTech)",
        summary:
          "MedTech-Produkte national eingeführt: Positionierung, Demos, KOL-Engagement, Schulung und frühe Adoption – Abstimmung von Vendor-Zielen mit Krankenhausrealitäten.",
      },
      "or-lighting-rollout": {
        title: "OP-Beleuchtungs-Upgrade-Programm (Multi-Hospital)",
        summary:
          "Multi-Hospital-OP-Beleuchtungsrollout über Budgetierung, Ausschreibungen, Terminplanung, Vendor-Orchestrierung, Installationsstandards und klinisches Onboarding verantwortet.",
      },
      "hyperbaric-deployment": {
        title: "Hyperbare Therapie Deployment (Turnkey)",
        summary:
          "Turnkey-Deployment hyperbarer Therapie von Anfang bis Ende orchestriert: Importkontrollen, Sicherheits-Compliance, Site-Bereitschaft, klinisches Onboarding und Lifecycle-Wartungsprozesse.",
      },
    },
    caseStudySections: {
      "founder-lens": "Gründerperspektive",
      "problem-context": "Problem & Kontext",
      constraints: "Rahmenbedingungen",
      "product-decisions": "Schlüsselentscheidungen",
      architecture: "Architektur",
      roadmap: "Roadmap",
      outcomes: "Ergebnisse",
      gtm: "Geschäftsmodell",
    },
    caseStudyTitles: {
      livesurgery: "LiveSurgery – Fallstudie",
      flowlogics: "Flowlogics – Fallstudie",
      alphorythm: "AlphaRhythm – Fallstudie",
      jobsprint: "JobSprint – Fallstudie",
    },
  },

  certifications: {
    title: "Zertifizierungen",
    inProgress: "In Bearbeitung",
    viewCredential: "Zertifikat ansehen",
    ongoing: "Laufend",
    items: [
      {
        title: "GoIT — Project Management Certificate",
        issuer: "GoIT (2025)",
        summary:
          "End-to-end-Delivery-Governance: Scope in Roadmaps und Ausführungspläne überführen, Risiken und Abhängigkeiten managen sowie Stakeholder-Abstimmung durch strukturiertes Reporting und Artefakte sicherstellen.",
        stack: [
          "Agile Delivery",
          "Scope & Roadmaps",
          "Backlog & Priorisierung",
          "Risiken & Abhängigkeiten",
          "Stakeholder Management",
          "Delivery-Artefakte (SOW/WBS/RACI)",
        ],
      },
      {
        title: "Neoversity — Master’s in Software Development (Technical Deepening)",
        issuer: "Woolf University (2024–2026)",
        summary:
          "Formale technische Vertiefung zur Leitung von Produktsystemen mit weniger Abstraktion – Stärkung von Architekturkompetenz, Datenmodellierung und Engineering-Zusammenarbeit.",
        stack: [
          "System Design",
          "Datenmodellierung",
          "Full-Stack-Grundlagen",
          "APIs",
          "Cloud & DevOps Basics",
        ],
      },
      {
        title: "DataCamp – Associate AI Engineer for Developers",
        issuer: "DataCamp (2025)",
        summary:
          "Angewandter KI-Integrations-Track mit Fokus auf den Aufbau KI-gestützter Produktfeatures mittels APIs und modernen Workflows – Betonung auf praktischen Implementierungsmustern statt Theorie.",
        stack: [
          "KI-Integration",
          "OpenAI API",
          "Prompting",
          "Tooling-Muster",
          "Produktisierte KI-Features",
        ],
      },
    ],
  },

  contact: {
    title: "Kontakt",
    subtitle: "Anfragen zu Systemen & KI-Strategie",
    para1:
      "Ich evaluiere selektiv Technical-Product-Manager-Rollen in wachstumsstarken, English-First-Organisationen. Meine Spezialisierung liegt darin, $50M+ operative Komplexität mit KI-augmentierter Delivery zu verbinden.",
    para2label: "Besonders geeignet für:",
    para2items: [
      "Komplexität: Organisationen, die über \"Excel-basierte\" Koordination hinaus skalieren.",
      "Hochkritische Operations: Logistik, FinTech und B2B SaaS, in denen Auditierbarkeit nicht verhandelbar ist.",
      "KI-Orchestrierung: Teams, die ihre Delivery-Geschwindigkeit durch agentische Workflows (Cursor, ClaudeCode, v0) verzehnfachen wollen.",
    ],
    para2text:
      "KI-agentische Workflows, Plattformen mit hohen Compliance-Anforderungen, Architektur interner Tools und Zero-to-One-Systemvalidierung.",
    emailLabel: "E-Mail",
    locationLabel: "Standort",
    location: "Deutschland (MEZ)",
    socialLabel: "Soziale Medien",
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    emailFieldLabel: "E-Mail",
    emailFieldPlaceholder: "sie@beispiel.de",
    messageLabel: "Nachricht",
    messagePlaceholder: "Wie kann ich helfen?",
    hint: "Wird über Ihren E-Mail-Client gesendet – keine Datenspeicherung",
    submitBtn: "Anfrage senden",
    emailDirectBtn: "Direkt per E-Mail",
    copied: "Kopiert!",
    submitted: "Ihr E-Mail-Client wird mit dem Entwurf geöffnet…",
  },

  footer: {
    tagline:
      "Technical Product Manager | Systeme & KI-Automatisierung\nIch architektiere skalierbare Systeme in regulierten Branchen. Mit 10+ Jahren Domänenexpertise und KI-orchestrierter Delivery mache ich Ergebnisse vorhersehbar.",
    nav: "Navigation",
    availability: "Selektiver Fokus",
    availabilityText:
      "Ich nehme eine begrenzte Anzahl an Projekten an, bei denen die Behebung eines Systems echten operativen Hebel freisetzen kann.",
    availabilityText2:
      "Jedes Engagement ist auf ein einziges hochrelevantes Problem ausgerichtet — mit einem klaren Weg zu schnellerer Ausführung, saubereren Workflows oder messbaren Effizienzgewinnen.",
    sendEmail: "E-Mail senden",
    copyright: "Alle Rechte vorbehalten.",
    location: "Deutschland (MEZ) · Selektiv offen für Remote & Hybrid",
    navLinks: {
      Results: "Ergebnisse",
      Projects: "Projekte",
      Services: "Leistungen",
      Framework: "Framework",
      About: "Über mich",
      Contact: "Kontakt",
    },
  },

  modal: {
    onThisPage: "Auf dieser Seite",
    share: "Teilen",
    copied: "Kopiert!",
    copyLinkLabel: "Teilbaren Link kopieren",
    closeLabel: "Schließen",
  },

  timeline: {
    title: "Werdegang",
    showMilestones: "3 Meilensteine anzeigen",
    viewFull: "Vollständigen Werdegang anzeigen (11)",
    ariaFull: "Zur 3-Meilenstein-Übersicht wechseln",
    ariaSummary: "Zum vollständigen Werdegang wechseln (11 Einträge)",
  },

  backToTop: "Nach oben",
};
