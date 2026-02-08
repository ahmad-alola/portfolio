import i18n from "i18next";
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
        title: "Développeur IA (en formation)",
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
            title: "SmartVR Media Browser",
            desc: "Concept de navigateur média VR pour Meta Quest.",
            year: "2025–2026",
            tags: ["React", "VR", "UI/UX"],
            git: "https://github.com/ahmad-alola",
            demo: "",
          },
          {
            title: "Pingouins API",
            desc: "API FastAPI + ML pour classification d’images.",
            year: "2026",
            tags: ["Python", "FastAPI", "ML"],
            git: "https://gitlab.com/ahmadola111",
            demo: "",
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
        title: "AI Developer (in training)",
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
            title: "SmartVR Media Browser",
            desc: "VR media browser concept for Meta Quest.",
            year: "2025–2026",
            tags: ["React", "VR", "UI/UX"],
            git: "https://github.com/ahmad-alola",
            demo: "",
          },
          {
            title: "Pingouins API",
            desc: "FastAPI + ML image classification API.",
            year: "2026",
            tags: ["Python", "FastAPI", "ML"],
            git: "https://gitlab.com/ahmadola111",
            demo: "",
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
        title: "مطور ذكاء اصطناعي (قيد التكوين)",
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
            title: "SmartVR Media Browser",
            desc: "فكرة متصفح وسائط واقع افتراضي لـ Meta Quest.",
            year: "2025–2026",
            tags: ["React", "VR", "واجهة"],
            git: "https://github.com/ahmad-alola",
            demo: "",
          },
          {
            title: "Pingouins API",
            desc: "واجهة برمجية FastAPI + ML لتصنيف الصور.",
            year: "2026",
            tags: ["Python", "FastAPI", "ML"],
            git: "https://gitlab.com/ahmadola111",
            demo: "",
          },
        ],
      },

      skills: {
        title: "المهارات",
        list: [
          "Python",
          "أساسيات الذكاء الاصطناعي",
          "Git / GitLab",
          "Linux / Windows",
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
