import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";

const STORAGE_KEY = "portfolio_lang";

const resources = {
  fr: {
    translation: {
      name: "Ahmad Abo-Alola",
      headline: "Développeur IA (en formation) — systèmes & data",

      nav: {
        about: "Profil",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact",
      },

      hero: {
        title: "Développeur IA ",
        training: "(en formation)",
        subtitle: "Systèmes • Data • Projets concrets",
        ctaPrimary: "Voir les projets",
        ctaSecondary: "Télécharger le CV",
      },

      highlights: {
        h1: {
          kicker: "Focus",
          title: "IA & Data",
          text: "Apprentissage des bases du machine learning et projets pratiques.",
        },
        h2: {
          kicker: "Atout",
          title: "Systèmes",
          text: "Linux, Windows, automatisation et environnements propres.",
        },
        h3: {
          kicker: "Hands-on",
          title: "Prototypage",
          text: "Électronique et impression 3D pour des solutions concrètes.",
        },
      },

      about: {
        title: "Profil",
        text:
          "Développeur en intelligence artificielle en formation, avec un solide parcours en électronique et programmation. J’aime construire des solutions concrètes : de l’architecture jusqu’à l’implémentation.",
      },

      projects: {
        title: "Projets",
        note: "Projets principaux & apprentissage",
        items: [
          {
            title: "Prima — Vérification Environnement",
            desc: "Script Bash pour vérifier l’installation des outils de développement (Python, Node, navigateurs) et tester l’environnement système.",
            year: "2026",
            tags: ["Bash", "Linux", "CLI", "Dev Environment"],
            git: "https://gitlab.com/ahmadola111-group/exercise-prima",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/prima/",
          },

          {
            title: "Secunda — Documentation avec MkDocs",
            desc: "Création d’un site de documentation statique avec MkDocs et déploiement automatique via GitLab Pages et CI/CD.",
            year: "2026",
            tags: ["MkDocs", "GitLab CI/CD", "Documentation", "Python"],
            git: "https://gitlab.com/ahmadola111-group/ahmad-docs",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/secunda/",
          },

          {
            title: "Tertia — Analyse Requête HTTP",
            desc: "Étude détaillée de la structure d’une requête HTTP (méthode, protocole, port, paramètres) et compréhension des réponses serveur JSON.",
            year: "2026",
            tags: ["HTTP", "API", "Web", "Networking"],
            git: "https://gitlab.com/ahmadola111-group/exercise-tertia",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/tertia/",
          },

          {
            title: "Quarta — Générateur de Groupes",
            desc: "Script pour créer des groupes aléatoires à partir d’une liste JSON, avec implémentations en JavaScript et Python.",
            year: "2026",
            tags: ["Python", "JavaScript", "JSON", "Algorithm"],
            git: "https://gitlab.com/ahmadola111-group/groupes-name-choices",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/quarta/",
          },

          {
            title: "Quinta — Base de Données SQL",
            desc: "Création d’une base de données SQLite avec tables liées, insertion de données et requêtes SQL (SELECT, JOIN, ORDER BY, agrégations).",
            year: "2026",
            tags: ["SQL", "SQLite", "Database", "Data"],
            git: "https://gitlab.com/ahmadola111-group/quinta-sql",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/quinta/",
          },

          {
            title: "Sexta — Analyse Application Notes",
            desc: "Rétro-engineering d’une application de prise de notes avec analyse fonctionnelle, UML (use case, séquence, activité, classes) et propositions d’amélioration.",
            year: "2026",
            tags: ["UML", "JavaScript", "HTML", "Architecture", "Analysis"],
            git: "https://gitlab.com/ahmadola111-group/note-app-retroengineering",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/sexta/",
          },

          {
            title: "Septima — Analyse de Données Python",
            desc: "Analyse d’un dataset JSON avec Python : filtrage, statistiques (âge, salaire), calculs de distance et résolution de questions algorithmiques.",
            year: "2026",
            tags: ["Python", "Data Analysis", "JSON", "Algorithm"],
            git: "https://gitlab.com/ahmadola111-group/exo-algo-trinker-python",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/septima/",
          },

          {
            title: "Octavia — Alpha / Beta / Gamma (ML & Data Quality)",
            desc: "Exercice pour comparer raisonnement humain (Alpha), apprentissage automatique avec arbre de décision (Beta) et impact du bruit/erreurs de labels sur les performances (Gamma).",
            year: "2026",
            tags: ["Python", "Machine Learning", "scikit-learn", "Decision Tree", "Data Quality"],
            git: "https://gitlab.com/ahmadola111-group/exo-octavia-python",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/octavia/",
          },

          {
            title: "Nona — Simulation Jeu de Cartes",
            desc: "Simulation d’un jeu de cartes en Python pour comparer différentes stratégies (aléatoire, carte max, carte min) sur de nombreuses parties.",
            year: "2026",
            tags: ["Python", "Simulation", "Algorithm", "Strategy"],
            git: "https://gitlab.com/ahmadola111-group/card-game-strategies",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/nona/",
          },

          {
            title: "Book Scraper — BeautifulSoup",
            desc: "Extraction automatique de données de livres depuis une page HTML avec BeautifulSoup, stockage en JSON puis insertion dans une base SQLite.",
            year: "2026",
            tags: ["Python", "BeautifulSoup", "Web Scraping", "SQLite", "Data"],
            git: "https://gitlab.com/ahmad-training-2026/beautiful_soup",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/beautiful_soup/",
          },

          {
            title: "Library API — Gestion Bibliothèque",
            desc: "API REST avec FastAPI pour gérer une bibliothèque (livres, auteurs, genres, prêts, images) avec base de données relationnelle SQLite.",
            year: "2026",
            tags: ["Python", "FastAPI", "SQLite", "Backend", "API"],
            git: "https://gitlab.com/ahmad-training-2026/bibliotheque",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/bibliotheque/",
          },

          {
            title: "LLM vs LLM — Tic Tac Toe (10x10)",
            desc: "Moteur Python d’un Tic Tac Toe 10x10 avec victoire en 5 alignés, détection de gagnant et stratégie fallback centrée.",
            year: "2026",
            tags: ["Python", "Game", "Algorithm", "AI Agents"],
            git: "https://gitlab.com/ahmad-training-2026/tictactoe",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/tictactoe/",
          },
          {
            title: "Kevin et Mimi — IA pour labyrinthes (Recherche de chemin et apprentissage par renforcement)",
            desc: "Projet IA combinant génération de labyrinthes (DFS, Prim), pathfinding (A*, Dijkstra) et apprentissage (Imitation Learning, DQN) pour entraîner un agent à trouver la sortie.",
            year: "2026",
            tags: ["Python", "AI", "Reinforcement Learning", "Pathfinding", "TensorFlow"],
            git: "https://gitlab.com/ahmad-training-2026/kevin_et_mimi_le_minotaure",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/kevin/",
          },

          {
            title: "Pingouins API — Multimodal ML",
            desc: "API FastAPI pour prédire des espèces de pingouins avec données tabulaires et image (fusion multimodale), modèles ML, logging SQLite et interface web.",
            year: "2026",
            tags: ["Python", "FastAPI", "Machine Learning", "Multimodal", "scikit-learn"],
            git: "https://gitlab.com/ahmad-training-2026/pingouins",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/pingouins/",

           },

          {
            title: "S Sont Fous Ces Gaulois — Base Astérix — Requêtes SQL",
            desc: "Exercices SQL sur une base de données relationnelle (Astérix) avec requêtes complexes, jointures et exploitation d’un schéma ER.",
            year: "2026",
            tags: ["SQL", "MySQL", "Database", "Docker"],
            git: "https://gitlab.com/ahmad-training-2026/s-sont-fous-ces-gaulois/-/tree/main?ref_type=heads",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/gaulois/",

           },

          {
            title: "Alerte Infection — Système de santé à microservices",
            desc: "POC d’un système de surveillance des infections basé sur une architecture microservices : gestion des cas, géolocalisation, visualisation cartographique et notifications.",
            year: "2026",
            tags: ["Python", "FastAPI", "Microservices", "Docker", "Data"],
            git: "https://github.com/massaines-cpu/ARCHI-PROJET/tree/main",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/alerte_infection/",
          },
          {
            title: "Fake News RAG (Ollama + ChromaDB)",
            desc: "Pipeline RAG pour détecter TRUE/FAKE/UNCERTAIN : nettoyage + chunking, embeddings (all-minilm), recherche ChromaDB, vote majoritaire, justification LLM (phi3:mini) et évaluation (Accuracy/F1/Coherence). Inclut CLI + notebooks + tests pytest.",
            year: "2026",
            tags: ["Python", "RAG", "Ollama", "ChromaDB", "Embeddings", "LLM", "pytest"],
            git: "https://gitlab.com/ahmad-training-2026/rag-pour-la-detection-de-fake-news",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/fake_news/",
          },
        ],
      },

      skills: {
        title: "Compétences",
        list: [
          "Python",
          "IA (bases)",
          "Git / GitLab",
          "Linux / Windows",
          "Systèmes & électronique",
          "Impression 3D",
        ],
      },

      contact: {
        title: "Contact",
        subtitle: "Ouvert aux stages / projets — Toulouse (Occitanie).",
        cta: "Me contacter",
      },

      footer: {
        rights: "Tous droits réservés",
      },
    },
  },

  en: {
    translation: {
      name: "Ahmad Abo-Alola",
      headline: "AI Developer (in training) — systems & data",

      nav: {
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },

      hero: {
        title: "AI Developer ",
        training: "(in training)",
        subtitle: "Systems • Data • Hands-on projects",
        ctaPrimary: "View projects",
        ctaSecondary: "Download CV",
      },

      highlights: {
        h1: {
          kicker: "Focus",
          title: "AI & Data",
          text: "Learning ML fundamentals and building real projects.",
        },
        h2: {
          kicker: "Strength",
          title: "Systems",
          text: "Linux, Windows, automation and clean setups.",
        },
        h3: {
          kicker: "Hands-on",
          title: "Prototyping",
          text: "Electronics and 3D printing for real-world solutions.",
        },
      },

      about: {
        title: "About",
        text:
          "AI developer in training with a strong background in electronics and programming. I build practical solutions end-to-end: from architecture to implementation.",
      },

      projects: {
        title: "Projects",
        note: "Main projects & learning",
        items: [
          {
            title: "Prima — Environmental Verification",
            desc: "Bash script to check the installation of development tools (Python, Node, browsers) and test the system environment.",
            year: "2026",
            tags: ["Bash", "Linux", "CLI", "Dev Environment"],
            git: "https://gitlab.com/ahmadola111-group/exercise-prima",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/prima/",
          },
          {
            title: "Secunda — Documentation with MkDocs",
            desc: "Creation of a static documentation website with MkDocs and automatic deployment via GitLab Pages and CI/CD.",
            year: "2026",
            tags: ["MkDocs", "GitLab CI/CD", "Documentation", "Python"],
            git: "https://gitlab.com/ahmadola111-group/ahmad-docs",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/secunda/",
          },
          {
            title: "Tertia — HTTP Request Analysis",
            desc: "Detailed study of the structure of an HTTP request (method, protocol, port, parameters) and understanding of JSON server responses.",
            year: "2026",
            tags: ["HTTP", "API", "Web", "Networking"],
            git: "https://gitlab.com/ahmadola111-group/exercise-tertia",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/tertia/",
          },

          {
            title: "Quarta — Group Generator",
            desc: "Script to generate random groups from a JSON list, with implementations in JavaScript and Python.",
            year: "2026",
            tags: ["Python", "JavaScript", "JSON", "Algorithm"],
            git: "https://gitlab.com/ahmadola111-group/groupes-name-choices",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/quarta/",
          },

          {
            title: "Quinta — SQL Database",
            desc: "Creation of a SQLite database with linked tables, data insertion and SQL queries (SELECT, JOIN, ORDER BY, aggregations).",
            year: "2026",
            tags: ["SQL", "SQLite", "Database", "Data"],
            git: "https://gitlab.com/ahmadola111-group/quinta-sql",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/quinta/",
          },

          {
            title: "Sexta — Analyse Application Notes",
            desc: "Reverse engineering of a note-taking application with functional analysis, UML (use case, sequence, activity, classes) and improvement proposals.",
            year: "2026",
            tags: ["UML", "JavaScript", "HTML", "Architecture", "Analysis"],
            git: "https://gitlab.com/ahmadola111-group/note-app-retroengineering",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/sexta/",
          },

          {
            title: "Septima — Python Data Analysis",
            desc: "Analysis of a JSON dataset with Python: filtering, statistics (age, salary), distance calculations and solving algorithmic questions.",
            year: "2026",
            tags: ["Python", "Data Analysis", "JSON", "Algorithm"],
            git: "https://gitlab.com/ahmadola111-group/exo-algo-trinker-python",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/septima/",
          },

          {
            title: "Octavia — Alpha / Beta / Gamma (ML & Data Quality)",
            desc: "Exercise to compare human reasoning (Alpha), machine learning with decision tree (Beta) and impact of noise/label errors on performance (Gamma).",
            year: "2026",
            tags: ["Python", "Machine Learning", "scikit-learn", "Decision Tree", "Data Quality"],
            git: "https://gitlab.com/ahmadola111-group/exo-octavia-python",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/octavia/",
          },

          {
            title: "Nona — Card Game Simulation",
            desc: "Simulation of a card game in Python to compare different strategies (random, max card, min card) over many games.",
            year: "2026",
            tags: ["Python", "Simulation", "Algorithm", "Strategy"],
            git: "https://gitlab.com/ahmadola111-group/card-game-strategies",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/nona/",
          },

          {
            title: "Book Scraper — BeautifulSoup",
            desc: "Automatic extraction of book data from an HTML page with BeautifulSoup, storage in JSON then insertion into a SQLite database.",
            year: "2026",
            tags: ["Python", "BeautifulSoup", "Web Scraping", "SQLite", "Data"],
            git: "https://gitlab.com/ahmad-training-2026/beautiful_soup",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/beautiful_soup/",
          },

          {
            title: "Library API — Library Management",
            desc: "API REST with FastAPI to manage a library (books, authors, genres, loans, images) with a relational SQLite database.",
            year: "2026",
            tags: ["Python", "FastAPI", "SQLite", "Backend", "API"],
            git: "https://gitlab.com/ahmad-training-2026/bibliotheque",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/bibliotheque/",
          },

          {
            title: "LLM vs LLM — Tic Tac Toe (10x10)",
            desc: "Python engine for a 10x10 Tic Tac Toe game with a win in 5 in a row, winner detection and centered fallback strategy.",
            year: "2026",
            tags: ["Python", "Game", "Algorithm", "AI Agents"],
            git: "https://gitlab.com/ahmad-training-2026/tictactoe",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/tictactoe/",
          },
          {
            title: "Kevin & Mimi — Maze AI (Pathfinding & RL)",
            desc: "AI project combining maze generation (DFS, Prim), pathfinding (A*, Dijkstra) and learning (Imitation Learning, DQN) to train an agent to find the exit.",
            year: "2026",
            tags: ["Python", "AI", "Reinforcement Learning", "Pathfinding", "TensorFlow"],
            git: "https://gitlab.com/ahmad-training-2026/kevin_et_mimi_le_minotaure",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/kevin/",
          },

          {
            title: "Pingouins API — Multimodal ML",
            desc: "API FastAPI to predict penguin species with tabular and image data (multimodal fusion), ML models, SQLite logging and web interface.",
            year: "2026",
            tags: ["Python", "FastAPI", "Machine Learning", "Multimodal", "scikit-learn"],
            git: "https://gitlab.com/ahmad-training-2026/pingouins",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/pingouins/",

           },

          {
            title: "Are These Gauls Crazy? — Asterix Database — SQL Queries",
            desc: "SQL exercises on a relational database (Asterix) with complex queries, joins and exploitation of an ER schema.",
            year: "2026",
            tags: ["SQL", "MySQL", "Database", "Docker"],
            git: "https://gitlab.com/ahmad-training-2026/s-sont-fous-ces-gaulois/-/tree/main?ref_type=heads",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/gaulois/",

           },

          {
            title: "Alerte Infection — Microservices Health System",
            desc: "POC d’un système de surveillance des infections basé sur une architecture microservices : gestion des cas, géolocalisation, visualisation cartographique et notifications.",
            year: "2026",
            tags: ["Python", "FastAPI", "Microservices", "Docker", "Data"],
            git: "https://github.com/massaines-cpu/ARCHI-PROJET/tree/main",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/alerte_infection/",
          },
          {
            title: "Fake News RAG (Ollama + ChromaDB)",
            desc: "RAG pipeline to classify news as TRUE/FAKE/UNCERTAIN: cleaning + chunking, embeddings (all-minilm), ChromaDB retrieval, majority-vote verdict, LLM justification (phi3:mini), and evaluation (Accuracy/F1/Coherence). Includes CLI + notebooks + pytest.",
            year: "2026",
            tags: ["Python", "RAG", "Ollama", "ChromaDB", "Embeddings", "LLM", "pytest"],
            git: "https://gitlab.com/ahmad-training-2026/rag-pour-la-detection-de-fake-news",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/fake_news/",
          },
        ],
      },

      skills: {
        title: "Skills",
        list: [
          "Python",
          "AI fundamentals",
          "Git / GitLab",
          "Linux / Windows",
          "Systems & electronics",
          "3D printing",
        ],
      },

      contact: {
        title: "Contact",
        subtitle: "Open to internships / projects — Toulouse (Occitanie).",
        cta: "Get in touch",
      },

      footer: {
        rights: "All rights reserved",
      },
    },
  },

  ar: {
    translation: {
      name: "أحمد أبو العلا",
      headline: "مطور ذكاء اصطناعي (قيد التكوين) — أنظمة وبيانات",

      nav: {
        about: "نبذة",
        projects: "المشاريع",
        skills: "المهارات",
        contact: "تواصل",
      },

      hero: {
        title: "مطور ذكاء اصطناعي ",
        training: "(قيد التكوين)",
        subtitle: "أنظمة • بيانات • مشاريع عملية",
        ctaPrimary: "عرض المشاريع",
        ctaSecondary: "تحميل السيرة الذاتية",
      },

      highlights: {
        h1: {
          kicker: "تركيز",
          title: "ذكاء اصطناعي وبيانات",
          text: "تعلّم أساسيات ML وبناء مشاريع عملية.",
        },
        h2: {
          kicker: "قوة",
          title: "أنظمة",
          text: "لينكس، ويندوز، أتمتة وتنظيم احترافي.",
        },
        h3: {
          kicker: "تطبيق",
          title: "نمذجة وبروتوتايب",
          text: "إلكترونيات وطباعة ثلاثية الأبعاد لحلول حقيقية.",
        },
      },

      about: {
        title: "نبذة",
        text:
          "مطور ذكاء اصطناعي قيد التكوين مع خلفية قوية في الإلكترونيات والبرمجة. أبني حلولًا عملية من المعمارية حتى التنفيذ.",
      },

      projects: {
        title: "المشاريع",
        note: "أهم المشاريع والتعلّم",
        items: [
          {
            title: "بريما - التحقق البيئي",
            desc: "برنامج نصي بلغة باش للتحقق من تثبيت أدوات التطوير (بايثون، نود، المتصفحات) واختبار بيئة النظام.",
            year: "2026",
            tags: ["باش", "لينكس", "واجهة سطر الأوامر", "بيئة التطوير"],
            git: "https://gitlab.com/ahmadola111-group/exercise-prima",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/prima/",
          },
          {
            title: "ثانيًا - التوثيق باستخدام ام كي دوكس",
            desc: "إنشاء موقع وثائق ثابت باستخدام ام كي دوكس والنشر التلقائي عبر صفحة جيت لاب و CI/CD.",
            year: "2026",
            tags: ["ام كي دوكس", "جيت لاب CI/CD", "التوثيق", "بايثون"],
            git: "https://gitlab.com/ahmadola111-group/ahmad-docs",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/secunda/",
          },
          {
            title: "تيرتيا - تحليل طلبات اتش تي تي بي",
            desc: "دراسة تفصيلية لبنية طلب اتش تي تي بي (الطريقة، البروتوكول، المنفذ، المعلمات) وفهم استجابات خادم جيسون.",
            year: "2026",
            tags: ["اتش تي تي بي", "اي بي اي", "ويب", "الشبكات"],
            git: "https://gitlab.com/ahmadola111-group/exercise-tertia",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/tertia/",
          },

          {
            title: "كوارتا - مولد المجموعة",
            desc: "برنامج نصي لإنشاء مجموعات عشوائية من قائمة جيسون، مع تطبيقات بلغة جافا سكريبت و بايثون.",
            year: "2026",
            tags: ["بايثون", "جافاسكربت", "جيسون", "الخوارزمية"],
            git: "https://gitlab.com/ahmadola111-group/groupes-name-choices",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/quarta/",
          },

          {
            title: "كوينتا - قاعدة بيانات اس كيو ال",
            desc: "إنشاء قاعدة بيانات اس كيو لايت مع جداول مرتبطة، إدخال بيانات وطلبات اس كيو ال (تحديد, دخول, ترتيب حسب , تجميع).",
            year: "2026",
            tags: ["اس كيو ال", "اس كيو لايت", "قاعدة البيانات", "البيانات"],
            git: "https://gitlab.com/ahmadola111-group/quinta-sql",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/quinta/",
          },

          {
            title: "سيكستا - تحليل ملاحظات التطبيق",
            desc: "تحليل تفصيلي لتطبيق ملاحظات باستخدام تحليل الوظائف، UML (حالات الاستخدام، التسلسل، النشاط، الفئات) واقتراحات التحسين.",
            year: "2026",
            tags: ["UML", "جافاسكربت", "اتش تي تي بي", "البنية", "تحليل"],
            git: "https://gitlab.com/ahmadola111-group/note-app-retroengineering",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/sexta/",
          },

          {
            title: "سبتيما - تحليل بيانات بايثون",
            desc: "تحليل dataset جيسون باستخدام بايثون: تصفية، إحصائيات (العمر، الراتب)، حسابات المسافات وحل أسئلة خوارزمية.",
            year: "2026",
            tags: ["بايثون", "تحليل البيانات", "جيسون", "الخوارزمية"],
            git: "https://gitlab.com/ahmadola111-group/exo-algo-trinker-python",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/septima/",
          },

          {
            title: "أوكتافيا - ألفا / بيتا / جاما (التعلم الآلي وجودة البيانات)",
            desc: "تمرين لمقارنة التفكير البشري (ألفا)، التعلم الآلي مع شجرة قرار (بيتا) وتأثير الضوضاء/الأخطاء في التسمية على الأداء (جاما).",
            year: "2026",
            tags: ["بايثون", "التعلم الآلي", "سايكيت ليرن", "شجرة القرار", "جودة البيانات"],
            git: "https://gitlab.com/ahmadola111-group/exo-octavia-python",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/octavia/",
          },

          {
            title: "نونا - محاكاة لعبة الكروت",
            desc: "محاكاة لعبة كروت باستخدام بايثون لمقارنة استراتيجيات مختلفة (عشوائية، أقصى كارت، أقل كارت) على عدد كبير من الألعاب.",
            year: "2026",
            tags: ["بايثون", "محاكاة", "خوارزمية", "استراتيجية"],
            git: "https://gitlab.com/ahmadola111-group/card-game-strategies",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/nona/",
          },

          {
            title: "مكشطة الكتب - بيوتيفول سوب",
            desc: "استخراج بيانات الكتاب تلقائيًا من صفحة اتش تي ام ال باستخدام بيوتيفول سوب، وتخزينها بصيغة جيسون ثم إدخالها في قاعدة بيانات اس كيو لايت.",
            year: "2026",
            tags: ["بايثون", "بيوتيفول سوب", "استخراج البيانات", "اس كيو لايت", "البيانات"],
            git: "https://gitlab.com/ahmad-training-2026/beautiful_soup",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/beautiful_soup/",
          },

          {
            title: "واجهة برمجة تطبيقات المكتبة — إدارة المكتبة",
            desc: "اي بي اي ريست مع فاست اي بي اي لإدارة مكتبة (كتب، مؤلفون، أنواع، استعارات، صور) باستخدام قاعدة بيانات اس كيو لايت عادية.",
            year: "2026",
            tags: ["بايثون", "فاست اي بي اي", "اس كيو لايت", "الواجهة البرمجية", "البيانات"],
            git: "https://gitlab.com/ahmad-training-2026/bibliotheque",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/bibliotheque/",
          },

          {
            title: "LLM vs LLM — لعبة إكس أو (10x10)",
            desc: "محرك بايثون ل لعبة إكس أو 10x10 مع اكتشاف الفائز وتحديد الاستراتيجية الاحتياطية.",
            year: "2026",
            tags: ["بايثون", "لعبة", "خوارزمية", "الذكاء الاصطناعي"],
            git: "https://gitlab.com/ahmad-training-2026/tictactoe",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/tictactoe/",
          },
          {
            title: "كيفن وميمي - الذكاء الاصطناعي للمتاهة (إيجاد المسار والتعلم المعزز)",
            desc: "مشروع الذكاء الاصطناعي الذي يجمع بين إنشاء متاهات (DFS، Prim)، إيجاد المسار (A*، Dijkstra) والتعلم (تعلم التكرار، DQN) لتدريب عميل على إيجاد الخروج.",
            year: "2026",
            tags: ["بايثون", "الذكاء الاصطناعي", "التعلم المعزز", "إيجاد المسار", "TensorFlow"],
            git: "https://gitlab.com/ahmad-training-2026/kevin_et_mimi_le_minotaure",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/kevin/",
          },

          {
            title: "طيور البطريق في واجهة برمجة التطبيقات — التعلم الآلي متعدد الوسائط",
            desc: "API FastAPI لتحديد أنواع البطاريق باستخدام بيانات جدولية وصور (دمج متعدد الوسائط)، نماذج التعلم الآلي، تسجيل SQLite وواجهة ويب.",
            year: "2026",
            tags: ["بايثون", "فاست اي بي اي", "التعلم الآلي", "متعدد الوسائط", "scikit-learn"],
            git: "https://gitlab.com/ahmad-training-2026/pingouins",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/pingouins/",

           },

          {
            title: "هل هؤلاء الغاليون مجانين؟ — قاعدة بيانات أستريكس — استعلامات SQL",
            desc: "تمارين SQL على قاعدة بيانات علائقية (Asterix) مع استعلامات معقدة، وعمليات ربط، واستخدام مخطط ER.",
            year: "2026",
            tags: ["اس كيوال", "ماي اس كيو ال", "داتا بيس", "دوكر"],
            git: "https://gitlab.com/ahmad-training-2026/s-sont-fous-ces-gaulois/-/tree/main?ref_type=heads",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/gaulois/",

           },

          {
            title: "نظام تنبيه بشأن العدوى الصحي المصغر",
            desc: "إثبات مفهوم نظام مراقبة العدوى القائم على بنية الخدمات المصغرة: إدارة الحالات، وتحديد الموقع الجغرافي، وعرض الخرائط والإشعارات.",
            year: "2026",
            tags: ["بايثون", "فاست اي بي اي", "الخدمات المصغرة", "دوكر", "البيانات"],
            git: "https://github.com/massaines-cpu/ARCHI-PROJET/tree/main",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/alerte_infection/",
          },
          {
            title: "مجموعة الأخبار الكاذبة (أولاما + كروما دي بي)",
            desc: "بايبلاين راج لتصنيف الأخبار صحيح/مزيف/غير مؤكد: تنظيف وتقسيم النص (تقسيم البيانات إلى أجزاء)، توليد Embeddings (الحد الأدنى)، استرجاع الأدلة عبر كروما دي بي، قرار بالتصويت، ثم تبرير بواسطة ال ال ام محلي (phi3:mini) مع تقييم (الدقة/F1/التماسك). يتضمن CLI + نوتبوكس + اختبارات باي تيست.",
            year: "2026",
            tags: ["بايثون", "راج", "اولاما", "كروما دي بي", "التضمينات", "ال ال ام", "باي تيست"],
            git: "https://gitlab.com/ahmad-training-2026/rag-pour-la-detection-de-fake-news",
            demo: "https://ahmad-docs-b3e3cc.gitlab.io/fake_news/",
          },
        ],
      },

      skills: {
        title: "المهارات",
        list: [
          "بايثون",
          "أساسيات الذكاء الاصطناعي",
          "جيت / جيت لاب",
          "لينيكس / ويندوز",
          "أنظمة وإلكترونيات",
          "طباعة ثلاثية الأبعاد",
        ],
      },

      contact: {
        title: "تواصل",
        subtitle: "متاح لتدريب أو مشاريع — تولوز.",
        cta: "تواصل معي",
      },

      footer: {
        rights: "جميع الحقوق محفوظة",
      },
    },
  },
};

function detectLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && ["fr", "en", "ar"].includes(saved)) return saved;

  const nav = (navigator.language || "fr").toLowerCase();
  if (nav.startsWith("ar")) return "ar";
  if (nav.startsWith("fr")) return "fr";
  return "en";
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export const STORAGE_LANG_KEY = STORAGE_KEY;
export default i18n;
