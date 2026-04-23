// src/locales/de.js
export default {
  nav: {
    results: "Ergebnisse",
    projects: "Projekte",
    services: "Leistungen",
    framework: "Framework",
    about: "\u00DCber mich",
    contact: "Kontakt",
    toggleNav: "Navigation umschalten",
    backToTop: "Nach oben",
  },

  results: {
    title: "Ergebnisse",
    intro: "\u00DCber 10 Jahre Liefernachweise in regulierten Branchen und dom\u00E4nen\u00FCbergreifenden Produktsystemen.",
    tiles: [
      { metric: "10+", label: "Jahre in MedTech & Pharma" },
      // TODO: Genaue Zahl aus Kundenunterlagen pr\u00FCfen
      { metric: "$40M+", label: "Operativer Skalierungsbereich" },
      // TODO: Endg\u00FCltige Anzahl gelieferter Systeme pr\u00FCfen
      { metric: "5+", label: "Systeme in mehreren Dom\u00E4nen geliefert" },
      { metric: "3", label: "Regulierte Branchen: MedTech, Pharma, B2B SaaS" },
      { metric: "100%", label: "Remote-first Liefermodell, verteilte Teams" },
    ],
  },

  hero: {
    eyebrow: "Technical Product Portfolio",
    headline: "Technical Product Manager & Delivery Lead",
    subtitle:
      "KI-gest\u00FCtzter SDLC f\u00FCr produktionsreife Auslieferung in regulierten Branchen. \u00DCber 10 Jahre Erfahrung in der Leitung von MedTech- und Pharma-Plattformen \u2013 von $40M+ Operationen bis zur Full-Stack-Systemarchitektur. Ich mache Trade-offs explizit und Auslieferung planbar.",
    ctaSDLC: "AI-Augmented SDLC ansehen",
    ctaProjects: "Produktsysteme ansehen",
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
          timeline: "2-3 Wochen",
          outcome: "Weniger Tabellen-Chaos und schnellere Entscheidungen",
        },
        {
          id: "ai-automation-audit",
          icon: "Bot",
          title: "KI- & Automatisierungs-Audit",
          description: "Ein schneller Scan von repetitiver Arbeit, Datenflüssen und sicheren Automatisierungschancen.",
          timeline: "3-5 Tage",
          outcome: "Priorisierte Automatisierungs-Roadmap mit nächsten Schritten",
        },
        {
          id: "conversion-optimization-sprint",
          icon: "Gauge",
          title: "Conversion-Optimierungs-Sprint",
          description: "Ein fokussierter Sprint für Messaging, Nutzerfluss, CTAs und Seitenstruktur bei bestehender Nachfrage.",
          timeline: "5-10 Tage",
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
            { label: "Timeline", items: ["Tag 1 Analyse und Struktur", "Tage 2-6 Umsetzung", "Tag 7 Launch-Check"] },
          ],
        },
        {
          id: "workflow-dashboard",
          icon: "BarChart3",
          title: "Workflow- / Operations-Dashboard",
          timeline: "2-3 Wochen",
          expected: "Eine zentrale operative Sicht, die Statusabfragen reduziert und Übergaben sichtbar macht.",
          blocks: [
            { label: "Problem", items: ["Arbeit verteilt sich auf mehrere Tools", "Manuelles Reporting bremst Entscheidungen", "Ownership ist unklar"] },
            { label: "Was wir tun", items: ["Workflow abbilden", "Rollen, Zustände und Datenpunkte definieren", "Ein nutzbares Dashboard bauen"] },
            { label: "Was Sie bekommen", items: ["Dashboard-Prototyp oder internes Live-Tool", "Workflow-Logik und Statusmodell", "Klare Übergabe-Dokumentation"] },
            { label: "Timeline", items: ["Woche 1 Modell und Prototyp", "Woche 2 Umsetzung", "Optional Woche 3 Härtung"] },
          ],
        },
        {
          id: "ai-automation-audit",
          icon: "Bot",
          title: "KI- & Automatisierungs-Audit",
          timeline: "3-5 Tage",
          expected: "Eine kurze Liste von Automatisierungschancen, priorisiert nach Wert, Risiko und Umsetzungsaufwand.",
          blocks: [
            { label: "Problem", items: ["KI-Ideen bleiben unkonkret", "Manuelle Aufgaben wiederholen sich jede Woche", "Risiko ist schwer einzuschätzen"] },
            { label: "Was wir tun", items: ["Workflows und Dateneingaben prüfen", "Sichere Automatisierungskandidaten finden", "Aufwand und Grenzen einschätzen"] },
            { label: "Was Sie bekommen", items: ["Map der Automatisierungschancen", "Pilot-Empfehlung", "Prompt- und Tooling-Richtung"] },
            { label: "Timeline", items: ["Kickoff und Zugriffsprüfung", "Workflow-Scan", "Roadmap-Übergabe"] },
          ],
        },
        {
          id: "conversion-optimization-sprint",
          icon: "Gauge",
          title: "Conversion-Optimierungs-Sprint",
          timeline: "5-10 Tage",
          expected: "Ein klarerer Conversion-Pfad, der Zögern reduziert und qualifizierte Besucher zur nächsten Aktion führt.",
          blocks: [
            { label: "Problem", items: ["Traffic ist da, aber Intent geht verloren", "CTAs konkurrieren miteinander", "Messaging wirkt generisch"] },
            { label: "Was wir tun", items: ["Hierarchie und Reibung auditieren", "Wichtige Sektionen neu schreiben", "CTA-Platzierung und Flow verbessern"] },
            { label: "Was Sie bekommen", items: ["Priorisierte Conversion-Fixes", "Aktualisierte Seitensektionen", "Mess-Checkliste"] },
            { label: "Timeline", items: ["Schneller Audit", "Copy- und UI-Update", "Launch-Review"] },
          ],
        },
      ],
    },
    process: {
      kicker: "Arbeitsweise",
      title: "Ein kleines System vor einer großen Entscheidung",
      steps: [
        {
          icon: "SearchCheck",
          title: "Kurze Analyse",
          desc: "Wir identifizieren ein konkretes Problem in Ihrem Prozess.",
        },
        {
          icon: "Settings2",
          title: "Schnelle Umsetzung",
          desc: "Wir setzen eine einfache Lösung in 5-10 Tagen um.",
        },
        {
          icon: "Rocket",
          title: "Start & Optimierung",
          desc: "Sie nutzen das System direkt und wir verbessern es weiter.",
        },
      ],
    },
    proof: {
      kicker: "Kontext",
      title: "Gebaut aus echter Operations-Erfahrung, nicht aus Agentur-Theater",
      text:
        "Die Arbeit basiert auf Systemen aus MedTech, Logistik, internen Operations und Produkt-Workflows. Wir achten auf klare Zustände, saubere Übergaben und Tools, die im Alltag funktionieren.",
      stats: [
        { value: "10+", label: "Jahre in MedTech- und Pharma-Delivery" },
        { value: "5+", label: "produktisierte Systeme gebaut oder prototypisiert" },
        { value: "3", label: "Domänen: MedTech, Logistik, B2B SaaS" },
        { value: "1", label: "fokussiertes Problem zum Start" },
      ],
    },
    trust: {
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
      secondary: "Start mit einem kleinen Pilot",
    },
  },

  about: {
    title: "\u00DCber mich",
    eyebrow: "Operative Ausrichtung",
    heading: "Technical Product Manager | Systems & Delivery",
    profileAlt: "Roman Mazuryk Profilbild",
    para1:
      "Mit \u00FCber 10 Jahren Erfahrung in MedTech und regulierter B2B-Auslieferung arbeite ich an der Schnittstelle von Produktstrategie, Systemarchitektur und operativer Exzellenz. Ich spezialisiere mich darauf, mehrdeutige Compliance-Anforderungen in vorhersehbare, hochverf\u00FCgbare Systeme zu \u00FCberf\u00FChren.",
    para2:
      "Mein Betriebsmodell basiert auf Entscheidungskomprimierung. Ich reduziere organisationalen Reibungsverlust, indem ich komplexe operative Anforderungen in schlanke Systemprimitiven \u00FCbersetze. Ich verwalte nicht nur Backlogs; ich entwerfe die Logik, die vorhersehbare, regelkonforme und wirkungsvolle Auslieferung sicherstellt.",
    pillars: {
      strategy: {
        title: "Strategie",
        text: "Maximal 3 aktive Workstreams. Fokus auf Outcome-Velocity statt Feature-Volumen.",
      },
      architecture: {
        title: "Architektur",
        text: "Gr\u00FCndliche Systemvalidierung, bevor eine einzige Zeile Code geschrieben wird.",
      },
      execution: {
        title: "Ausf\u00FChrung",
        text: "Kleine, t\u00E4gliche Deployments. Was nicht in Produktion ist, hat das Problem noch nicht gel\u00F6st.",
      },
    },
    operatingModel: {
      eyebrow: "Betriebsmodell",
      heading: "Mein Betriebsmodell: Entscheidungskomprimierung",
      text:
        "Ich reduziere organisationalen Reibungsverlust, indem ich komplexe operative Anforderungen in schlanke Systemprimitiven \u00FCbersetze. Ich verwalte nicht nur Backlogs; ich entwerfe die Logik, die vorhersehbare, regelkonforme und wirkungsvolle Auslieferung sicherstellt.",
      principles: {
        strategy: {
          label: "Strategie:",
          text: "Maximal 3 aktive Workstreams. Fokus auf Outcome-Velocity statt Feature-Volumen.",
        },
        architecture: {
          label: "Architektur:",
          text: "Gr\u00FCndliche Systemvalidierung, bevor eine einzige Zeile Code geschrieben wird.",
        },
        execution: {
          label: "Ausf\u00FChrung:",
          text: "Kleine, t\u00E4gliche Deployments. Was nicht in Produktion ist, hat das Problem noch nicht gel\u00F6st.",
        },
      },
      cta: "Vollst\u00E4ndige Systemarchitektur ansehen",
    },
    bestFit: {
      eyebrow: "Optimales Umfeld",
      heading: "Wo ich am besten wirke",
      para1:
        "Konzipiert f\u00FCr Remote-First-Agile-Umgebungen. Dieser Ansatz eignet sich besonders f\u00FCr compliance-intensive Systeme, Multi-Stakeholder-Auslieferung und Zero-to-One-Plattformarbeit \u2013 insbesondere in EU und globalem B2B SaaS, internen Tools und regulierten Branchen.",
      para2:
        "Ich arbeite direkt mit Engineering an der Architektur zusammen und stimme gleichzeitig das Leadership auf die Trade-offs ab, die Geschwindigkeit, Zuverl\u00E4ssigkeit und langfristigen Leverage bestimmen. In regulierten MedTech- und Pharma-Kontexten sorgen Micro-Scope und explizite Akzeptanzkriterien f\u00FCr Auditierbarkeit ohne Verlangsamung der Auslieferung.",
      para3:
        "Vollst\u00E4ndige Systemeigent\u00FCmerschaft \u2013 von der Unklarheit bis zum ausgelieferten operativen Impact.",
    },
    outside: {
      eyebrow: "Au\u00DFerhalb der Plattform",
      heading: "Au\u00DFerhalb der Plattform",
      basketball: "Systemdenken auf Teamdynamik angewendet.",
      training: "Feedback-Schleifen akkumulieren sich \u00FCber Zeit.",
      travel: "Mustererkennung in verschiedenen Umgebungen.",
      quote:
        "\u201EManche wollen, dass es passiert, manche w\u00FCnschen es sich, andere machen es m\u00F6glich.\u201C",
      quoteAttrib: "- Michael Jordan",
    },
  },

  aiSdlc: {
    title: "AI-Augmented SDLC",
    intro:
      "Das Systems-First-SDLC f\u00FCr produktionsreife Auslieferung. Trade-offs bleiben explizit, Entscheidungen bleiben sichtbar, Scope bleibt auf das Lieferbare beschr\u00E4nkt. Konzipiert f\u00FCr Remote-First-Agile-Umgebungen mit Fokus auf EU/globale B2B-SaaS und regulierte Branchen.",
    badge1: "Remote-First-Architektur",
    badge2: "MedTech / Pharma Auditierbarkeit",
    badge3: "EU / Global Market Ready",
    cta: "Workflow in Aktion erleben",
    strategy: {
      heading: "Strategie & Governance",
      p1label: "Betriebsregeln:",
      p1text:
        "maximal 3 aktive Projekte, ein Outcome pro Woche und eine strikte \u201EKein Refactoring ohne Shipping Impact\u201C-Policy. Scope ist eine Entscheidung, kein Backlog.",
      p2label: "Decision Logs",
      p2text:
        "erfassen Trade-off-Begr\u00FCndungen, akzeptierte Risiken und Systemimplikationen, um langfristigen Leverage \u00FCber Releases hinweg aufzubauen. Jede Architekturentscheidung hat ein Protokoll \u2013 kein institutionelles Wissen bleibt in Slack-Threads gesperrt.",
      p3label: "Compliance-Vorteil:",
      p3text:
        "In regulierten MedTech/Pharma-Umgebungen erf\u00FCllen explizite Betriebsregeln und Decision Logs Audit-Anforderungen, ohne Delivery-Overhead zu erzeugen. Governance ist in den Workflow eingebaut, nicht nachtr\u00E4glich hinzugef\u00FCgt.",
    },
    buildLoop: {
      heading: "Die t\u00E4gliche Build-Schleife",
      p1label: "Micro-Scope-Ausf\u00FChrung:",
      p1text:
        "GitHub-Issue ausw\u00E4hlen, Akzeptanzkriterien und Datenschemata definieren, bevor Code angefasst wird, dann durch kleine t\u00E4gliche PRs implementieren. Scope wird bei Issue-Er\u00F6ffnung eingefroren \u2013 zum Schutz der Scope-Integrit\u00E4t und vorhersehbarer Velocity.",
      p2label: "Architektur-Gate & Risikobewertung",
      p2text:
        "ist ein hartes Gate vor jeder Implementierung: Architekturlogik, Zustands\u00FCberg\u00E4nge und Edge Cases werden vom Architekten validiert. KI unterst\u00FCtzt \u2013 der Architekt entscheidet.",
      p3label: "Auditierbarkeit in regulierten Kontexten:",
      p3text:
        "Micro-Scope plus explizite Akzeptanzkriterien liefern einen nachvollziehbaren Audit-Trail f\u00FCr MedTech/Pharma-Auslieferung ohne Verlangsamung des Kadenz. Jeder PR entspricht direkt einer abgegrenzten Anforderung.",
    },
    hardening: {
      heading: "Der Production-Hardening-Stack",
      lighthouse:
        "Performance-Baselines und Release-Gating. Score-Regression blockiert den Merge.",
      sentry:
        "Laufzeitfehler-Sichtbarkeit und Fehler-Triage mit umgebungsbasiertem Alerting.",
      posthog:
        "Nutzungsanalytics und Post-Release-Signal-Tracking zur Validierung des Delivery-Impacts.",
      aiReview:
        "sind ein Standard-Implementierungsgate vor dem Merge, neben menschlicher Freigabe bei architekturkritischen \u00C4nderungen. Jeder PR durchl\u00E4uft automatisierte Qualit\u00E4tspr\u00FCfungen bevor er die Architekten-Review-Ebene erreicht.",
    },
  },

  skills: {
    title: "Kompetenzen & Leverage",
    statement:
      "Ich nutze Code als Leverage-Instrument, um Systemgrenzen zu validieren, Trade-offs zu kl\u00E4ren und produktionsreife Auslieferung zu beschleunigen \u2013",
    statementEm: "nicht als Selbstzweck.",
    pillars: {
      "product-systems-leadership": {
        title: "Produktsystem-Leadership",
        cards: [
          {
            title: "System- & Plattformdenken",
            items: [
              "Operative Workflows in Produktprimitiven \u00FCbersetzen: Rollen, Zust\u00E4nde, Berechtigungen und \u00DCbergaben",
              "Datenmodelle, APIs und Integrationsgrenzen mit Auditierbarkeit und Compliance-by-Design definieren",
              "Explizite Trade-offs vorantreiben: Build vs. Buy, Geschwindigkeit vs. Zuverl\u00E4ssigkeit, MVP vs. langfristige Wartbarkeit",
            ],
          },
          {
            title: "Product Leadership",
            items: [
              "Mehrdeutige Probleme in klare Outcomes und ausf\u00FChrbaren Produktscope \u00FCberf\u00FChren",
              "Roadmap- und Priorisierungsentscheidungen \u00FCber Produkt, Engineering und Operations hinweg leiten",
              "Pragmatische Scrum/Kanban-Kadenz betreiben; Scope kontrollieren, Abh\u00E4ngigkeiten erfassen und Releases f\u00FCr vorhersehbare Ausf\u00FChrung sequenzieren",
            ],
          },
          {
            title: "Stakeholder Leadership",
            items: [
              "F\u00FChrungsebene und Delivery-Teams auf Trade-offs, Zeitpl\u00E4ne und messbare Outcomes abstimmen",
              "Workshops, Anforderungsinterviews und Entscheidungssitzungen mit klarer Verantwortung moderieren",
              "Pr\u00E4zise Artefakte erstellen: PRDs, Specs, ADRs und operative Updates",
            ],
          },
        ],
      },
      "technical-leverage": {
        title: "Technischer Leverage",
        cards: [
          {
            title: "KI-beschleunigte Product Ops",
            items: [
              "LLM-Workflows f\u00FCr schnelleres Prototyping, Dokumentation und Architekturerkundung einsetzen",
              "Wiederverwendbare Prompting-Muster f\u00FCr wiederkehrende Specs, Audits und Delivery-Artefakte aufbauen",
              "Manuelle Koordination durch Automatisierung und sauberere Interface-Vertr\u00E4ge reduzieren",
            ],
          },
          {
            title: "Rapid Prototyping & Validierung",
            items: [
              "Hochrisiko-Pfade fr\u00FCh prototypisieren: Workflows, Berechtigungen, Datenintegrit\u00E4t und UX-Logik",
              "Constraint-getriebenes MVP-Slicing nutzen, um Annahmen vor dem Skalieren zu validieren",
              "Kleine Inkremente ausliefern, schnell validieren und Systemgrenzen gezielt weiterentwickeln",
            ],
          },
          {
            title: "Core Engine & Stack",
            items: [
              "React, JavaScript, Python (Flask/FastAPI) und Node.js f\u00FCr produktive Web-Systeme und Service-Prototypen",
              "PostgreSQL, Firebase, REST APIs und rollenbasierte Zugriffskontrolle f\u00FCr operatives Datenmodeling",
              "Git/GitHub, Docker, Vercel; Mermaid f\u00FCr Architekturdiagramme; Linear/Jira f\u00FCr Delivery-Governance",
            ],
          },
        ],
      },
      "operating-edge": {
        title: "Operative St\u00E4rke",
        cards: [
          {
            title: "Vorteil in regulierten Dom\u00E4nen",
            items: [
              "MedTech- und Pharma-Ausf\u00FChrungsvorteil: Entwicklung f\u00FCr Umgebungen, in denen Betriebszeit, Auditierbarkeit und Sicherheit nicht verhandelbar sind",
              "Micro-Scope-Kontrolle und explizite Akzeptanzkriterien halten die Auslieferung f\u00FCr regulierte SDLC-Anforderungen nachvollziehbar",
              "14+ Jahre in compliance-intensiven Beschaffungs-, klinischen und Logistik-Workflows",
            ],
          },
          {
            title: "Eigenverantwortung & Operator Mindset",
            items: [
              "Auslieferung von Anfang bis Ende verantworten: vom Problem-Framing \u00FCber Deployment bis zum operativen Impact",
              "Strukturierte Schleifen nutzen \u2013 Constraints \u2192 Modell \u2192 Entscheidung \u2192 Iteration \u2013 um Ambigu\u00E4t in Ausf\u00FChrung zu \u00FCberf\u00FChren",
              "F\u00FCr System-Outcomes verantwortlich bleiben, nicht Output-Volumen; ruhige Auslieferung unter hohem Druck aufrechterhalten",
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
      medtech: "Regulierte Systemauslieferung",
    },
    filters: {
      All: "Alle",
      "Workflow Systems": "Workflow-Systeme",
      "Decision Support": "Entscheidungsunterst\u00FCtzung",
      "Real-Time Systems": "Echtzeitsysteme",
      "Internal Tools": "Interne Tools",
      Productivity: "Produktivit\u00E4t",
      B2B: "B2B",
      MedTech: "MedTech",
    },
    ariaLabel: "Portfolio-Kategorien",
    filtersAriaLabel: "Produktsystem-Tags filtern",
    techSectionTitle: "Produktsysteme",
    techIntro:
      "Systeme, die ich entwerfe und ausliefere, um operative Komplexit\u00E4t in skalierbare Produkte zu \u00FCberf\u00FChren \u2013 von internen Tools und Datenintegrit\u00E4tsschichten bis hin zu Echtzeit-Interaktions-Workflows.",
    medSectionTitle: "MedTech \u2013 Integration & Auslieferung",
    medIntro:
      "Regulierte Auslieferung in klinischen Umgebungen: Multi-Vendor-Integrationen, Workflow-Governance, Adoption Enablement und Lifecycle-Zuverl\u00E4ssigkeit unter realen Constraints.",
    medMgmtSectionTitle: "MedTech \u2013 Programme & kommerzielle Ausf\u00FChrung",
    medMgmtIntro:
      "Multi-Site-Rollout-Governance, Beschaffung/Ausschreibungen, Vendor-Orchestrierung und Adoption Enablement.",
    empty: "Keine Projekte entsprechen diesem Filter.",
    clearFilter: "Filter zur\u00FCcksetzen",
    viewLink: "Ansehen",
    inProgress: "In Entwicklung",
    caseStudy: "Case Study",
    loadingCaseStudy: "Case Study wird geladen",
    comingSoon: "Demn\u00E4chst verf\u00FCgbar\u2026",
    items: {
      livesurgery: {
        title: "LiveSurgery \u2013 Echtzeit-Plattform f\u00FCr chirurgische Zusammenarbeit",
        summary:
          "Founder-gef\u00FChrtes MedTech-PoC mit einem vollst\u00E4ndig funktionalen OP-Workspace: Multi-Panel-Videokoordination, Drag-and-Drop-Quellzuweisung, rollenbasierter Zugriff (Chirurg / Beobachter / Admin) und WebSocket-gest\u00FCtzte Echtzeit-Layout-Synchronisation mit optimistischer Nebenl\u00E4ufigkeit. Unterst\u00FCtzt durch eine FastAPI + SQLite REST API mit Session-Lifecycle-Management, einem Analytics-Dashboard und einem durchsuchbaren Session-Archiv.",
      },
      flowlogics: {
        title: "Flowlogics \u2013 API-gesteuerte Supply-Visibility und Lifecycle-Kontrolle",
        summary:
          "Logistik-Betriebsplattform, die Bestellungen, Lagereingang und Auslieferungs\u00FCberg\u00E4nge mit einem strikten API-Vertrag, rollengesteuerten Workflows, Read-only-Demo-Modus und zeitlinienbasierter ETA-Risikosichtbarkeit zentralisiert.",
      },
      jobsprint: {
        title: "JobSprint \u2013 Workflow-Manager f\u00FCr die Jobsuche",
        summary:
          "Ausf\u00FChrungsorientiertes Jobsuche-System f\u00FCr Einzel-Kandidaten aus Product und Engineering, das verstreute Notizen und Tabellen durch eine Drag-and-Drop-Bewerbungspipeline, w\u00F6chentliches Execution-Tracking, Funnel-Analytics und eine Angebots-Wahrscheinlichkeitsansicht ersetzt.",
      },
      "surgiris-lights": {
        title: "SURGIRIS LED-Operationsleuchten (Multi-Site-Auslieferung)",
        summary:
          "Standardisierte Multi-Site-OP-Beleuchtungsdeployments in \u00FCber 15 OP-S\u00E4len mit Ausrichtung klinischer Workflow-Anforderungen an Installationsgovernance, Schulung und Lifecycle-Zuverl\u00E4ssigkeit unter St\u00F6rungsbedingungen.",
      },
      surgimedia: {
        title: "SURGIMEDIA Integrierte OP-Systeme",
        summary:
          "End-to-end-OP-Integrationsprogramme f\u00FCr Visualisierungs-, Routing- und Dokumentations-Workflows \u00FCber Fachbereiche hinweg orchestriert, mit Multi-Vendor-Governance und klinischer Abstimmung.",
      },
      "gas-pendants": {
        title: "Medizinische Gas- & Ger\u00E4teversorgungseinheiten (ICU/OP)",
        summary:
          "ICU/OP-Pendelsystem-Deployments f\u00FCr Sicherheit, Ergonomie und operative Zuverl\u00E4ssigkeit unter Ausrichtung technischer Anforderungen an klinische Nutzung und Einrichtungsconstraints verantwortet.",
      },
      "diagnostic-therapeutic": {
        title: "Diagnostische & Therapeutische Systeme (Launch + Deployment)",
        summary:
          "Launch und Deployment fortschrittlicher Diagnostik- und Therapiesysteme durch strukturierte Adoption-Governance, Stakeholder-Onboarding und Lifecycle-Bereitschaft orchestriert.",
      },
      "surgical-monitors": {
        title: "Chirurgische Monitore & Rekorder (Imaging-Workflow)",
        summary:
          "Displays und Rekorder f\u00FCr Echtzeit-Imaging und HD/4K-Routing integriert, mit Vendor-Orchestrierung, Installationsbereitschaft und klinischem Onboarding f\u00FCr Workflow-Zuverl\u00E4ssigkeit.",
      },
      "national-launches": {
        title: "Nationale Produktlaunches (MedTech)",
        summary:
          "MedTech-Produkte national eingef\u00FChrt: Positionierung, Demos, KOL-Engagement, Schulung und fr\u00FChe Adoption \u2013 Abstimmung von Vendor-Zielen mit Krankenhausrealit\u00E4ten.",
      },
      "or-lighting-rollout": {
        title: "OP-Beleuchtungs-Upgrade-Programm (Multi-Hospital)",
        summary:
          "Multi-Hospital-OP-Beleuchtungsrollout \u00FCber Budgetierung, Ausschreibungen, Terminplanung, Vendor-Orchestrierung, Installationsstandards und klinisches Onboarding verantwortet.",
      },
      "hyperbaric-deployment": {
        title: "Hyperbare Therapie Deployment (Turnkey)",
        summary:
          "Turnkey-Deployment hyperbare Therapie von Anfang bis Ende orchestriert: Importkontrollen, Sicherheits-Compliance, Site-Bereitschaft, klinisches Onboarding und Lifecycle-Wartungsprozesse.",
      },
    },
    caseStudySections: {
      "founder-lens": "Gr\u00FCnderperspektive",
      "problem-context": "Problem & Kontext",
      constraints: "Rahmenbedingungen",
      "product-decisions": "Schl\u00FCsselentscheidungen",
      architecture: "Architektur",
      roadmap: "Roadmap",
      outcomes: "Ergebnisse",
      gtm: "Gesch\u00E4ftsmodell",
    },
    caseStudyTitles: {
      livesurgery: "LiveSurgery \u2013 Case Study",
      flowlogics: "Flowlogics \u2013 Case Study",
      jobsprint: "JobSprint \u2013 Case Study",
    },
  },

  certifications: {
    title: "Zertifizierungen",
    inProgress: "In Bearbeitung",
    viewCredential: "Zertifikat ansehen",
    ongoing: "Laufend",
    items: [
      {
        title: "GoIT \u2014 Project Management Certificate",
        issuer: "GoIT (2025)",
        summary:
          "End-to-end Delivery-Governance: Scope in Roadmaps und Ausf\u00FChrungspl\u00E4ne \u00FCberf\u00FChren, Risiken und Abh\u00E4ngigkeiten managen sowie Stakeholder-Abstimmung durch strukturiertes Reporting und Artefakte sicherstellen.",
        stack: [
          "Agile Delivery",
          "Scope & Roadmaps",
          "Backlog & Priorisierung",
          "Risiken & Abh\u00E4ngigkeiten",
          "Stakeholder Management",
          "Delivery-Artefakte (SOW/WBS/RACI)",
        ],
      },
      {
        title: "Neoversity \u2014 Master\u2019s in Software Development (Technical Deepening)",
        issuer: "Woolf University (2024\u20132026)",
        summary:
          "Formale technische Vertiefung zur Leitung von Produktsystemen mit weniger Abstraktion \u2013 St\u00E4rkung von Architekturkompetenz, Datenmodellierung und Engineering-Zusammenarbeit.",
        stack: [
          "System Design",
          "Datenmodellierung",
          "Full-Stack-Grundlagen",
          "APIs",
          "Cloud & DevOps Basics",
        ],
      },
      {
        title: "DataCamp \u2013 Associate AI Engineer for Developers",
        issuer: "DataCamp (2025)",
        summary:
          "Angewandter KI-Integrations-Track mit Fokus auf den Aufbau KI-gest\u00FCtzter Produktfeatures mittels APIs und modernen Workflows \u2013 Betonung auf praktischen Implementierungsmustern statt Theorie.",
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
    subtitle: "Produktsystem-Anfragen",
    para1:
      "Offen f\u00FCr Technical Product Manager- und Product Owner-Positionen sowie ausgew\u00E4hlte Founder/Operator-Kooperationen in komplexen, regulierten Umgebungen.",
    para2label: "Besonders geeignet f\u00FCr:",
    para2text:
      "interne Tools, Workflow-Automatisierung, Entscheidungsunterst\u00FCtzungs-Dashboards, Echtzeit-PoCs und MVP-Validierung.",
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
    hint: "Wird \u00FCber Ihren E-Mail-Client gesendet \u2013 keine Datenspeicherung",
    submitBtn: "Anfrage senden",
    emailDirectBtn: "Direkt per E-Mail",
    copied: "Kopiert!",
    submitted: "Ihr E-Mail-Client wird mit dem Entwurf ge\u00F6ffnet\u2026",
  },

  footer: {
    tagline:
      "Technical Product Manager & Founder\u2011Operator.\nSkalierbare Systeme f\u00FCr regulierte Branchen.",
    nav: "Navigation",
    availability: "Verf\u00FCgbarkeit",
    availabilityText:
      "Offen f\u00FCr Technical PM & Product Owner-Positionen und ausgew\u00E4hlte Founder\u2011Operator-Kooperationen.",
    sendEmail: "E-Mail senden",
    copyright: "Alle Rechte vorbehalten.",
    location: "Deutschland (MEZ) \u00B7 Verf\u00FCgbar f\u00FCr Remote & Hybrid",
    navLinks: {
      Results: "Ergebnisse",
      Projects: "Projekte",
      Services: "Leistungen",
      Framework: "Framework",
      About: "\u00DCber mich",
      Contact: "Kontakt",
    },
  },

  modal: {
    onThisPage: "Auf dieser Seite",
    share: "Teilen",
    copied: "Kopiert!",
    copyLinkLabel: "Teilbaren Link kopieren",
    closeLabel: "Schlie\u00DFen",
  },

  timeline: {
    title: "Werdegang",
    showMilestones: "3 Meilensteine anzeigen",
    viewFull: "Vollst\u00E4ndigen Werdegang anzeigen (11)",
    ariaFull: "Zur 3-Meilenstein-\u00DCbersicht wechseln",
    ariaSummary: "Zum vollst\u00E4ndigen Werdegang wechseln (11 Eintr\u00E4ge)",
  },

  backToTop: "Nach oben",
};
