import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { STORAGE_LANG_KEY } from "./i18n";

function LangButton({ code, current, onClick, label }) {
  const active = current === code;
  return (
    <button
      onClick={() => onClick(code)}
      className={[
        "px-3 py-1 rounded-full text-sm transition",
        active
          ? "bg-accent text-black"
          : "bg-panel2 text-text hover:bg-panel",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();

  // RTL + lang persistence
  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_LANG_KEY, lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg to-black">
      <header className="mx-auto max-w-7xl px-5 pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">{t("name")}</div>
            <div className="text-muted text-sm">{t("headline")}</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-between md:justify-end">
            <nav className="flex flex-wrap gap-2 text-sm">
              <a className="text-muted hover:text-text transition" href="#about">{t("nav.about")}</a>
              <span className="text-muted/40">•</span>
              <a className="text-muted hover:text-text transition" href="#projects">{t("nav.projects")}</a>
              <span className="text-muted/40">•</span>
              <a className="text-muted hover:text-text transition" href="#skills">{t("nav.skills")}</a>
              <span className="text-muted/40">•</span>
              <a className="text-muted hover:text-text transition" href="#contact">{t("nav.contact")}</a>
            </nav>

            <div className="flex items-center gap-2">
              <LangButton code="fr" current={i18n.language} onClick={setLang} label="FR" />
              <LangButton code="en" current={i18n.language} onClick={setLang} label="EN" />
              <LangButton code="ar" current={i18n.language} onClick={setLang} label="AR" />
            </div>
          </div>
        </div>
      </header>


      <main className="mx-auto max-w-7xl px-5 py-10">
        {/* Hero Card */}
        <section className="rounded-2xl bg-panel/60 border border-white/5 shadow-soft p-6 md:p-10">
          <div className="flex flex-col gap-4">

            <img src="/profile.png" alt="Ahmad Abo-Alola" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-white/15 shadow-xl ring-2 ring-accent/20 mb-2"/>

            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-muted">{t("hero.subtitle")}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition"
              >
                {t("hero.ctaPrimary")}
              </a>
              <a
                href="/CV_Ahmad_Abo-Alola_Developpeur_IA.pdf"
                download="CV_Ahmad_Abo-Alola_Developpeur_IA.pdf"
                className="px-5 py-2 rounded-xl bg-panel2 border border-white/10 hover:bg-panel transition"
              >
                {t("hero.ctaSecondary")}
              </a>
            </div>
          </div>
        </section>

        <section className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-panel/40 border border-white/5 p-5">
              <div className="text-sm text-muted">{t("highlights.h1.kicker")}</div>
              <div className="font-semibold mt-1">{t("highlights.h1.title")}</div>
              <div className="text-sm text-muted mt-2">{t("highlights.h1.text")}</div>
            </div>

            <div className="rounded-2xl bg-panel/40 border border-white/5 p-5">
              <div className="text-sm text-muted">{t("highlights.h2.kicker")}</div>
              <div className="font-semibold mt-1">{t("highlights.h2.title")}</div>
              <div className="text-sm text-muted mt-2">{t("highlights.h2.text")}</div>
            </div>

            <div className="rounded-2xl bg-panel/40 border border-white/5 p-5">
              <div className="text-sm text-muted">{t("highlights.h3.kicker")}</div>
              <div className="font-semibold mt-1">{t("highlights.h3.title")}</div>
              <div className="text-sm text-muted mt-2">{t("highlights.h3.text")}</div>
            </div>
          </div>
        </section>


        {/* About */}
        <section id="about" className="pt-10">
          <h2 className="text-xl font-semibold mb-3">{t("about.title")}</h2>
          <div className="rounded-2xl bg-panel/40 border border-white/5 p-6">
            <p className="text-text/90 leading-relaxed">{t("about.text")}</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pt-10">
          <div className="flex items-center justify-between gap-4 mb-3">
            <h2 className="text-xl font-semibold">{t("projects.title")}</h2>
            <div className="text-sm text-muted">{t("projects.note")}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t("projects.items", { returnObjects: true }).map((p, idx) => (
              <div key={idx} className="rounded-2xl bg-panel/40 border border-white/5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{p.title}</div>
                    <div className="text-sm text-muted mt-1">{p.desc}</div>
                  </div>
                  {p.year && (
                    <div className="text-xs text-muted bg-panel2 border border-white/10 px-2 py-1 rounded-full">
                      {p.year}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs text-text/90 bg-panel2 border border-white/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-5">
                  {p.git && (
                    <a className="text-sm px-4 py-2 rounded-xl bg-panel2 border border-white/10 hover:bg-panel transition"
                      href={p.git} target="_blank" rel="noreferrer">
                      Git
                    </a>
                  )}
                  {p.demo && (
                    <a className="text-sm px-4 py-2 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition"
                      href={p.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Skills */}
        <section id="skills" className="pt-10">
          <h2 className="text-xl font-semibold mb-3">{t("skills.title")}</h2>
          <div className="rounded-2xl bg-panel/40 border border-white/5 p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t("skills.list", { returnObjects: true }).map((s, idx) => (
                <li key={idx} className="text-text/90">
                  • {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-10">
          <h2 className="text-xl font-semibold mb-3">{t("contact.title")}</h2>

          <div className="rounded-2xl bg-panel/40 border border-white/5 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-muted">
              {t("contact.subtitle")}
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="px-4 py-2 rounded-xl bg-panel2 border border-white/10 hover:bg-panel transition"
                href="mailto:Ahmadola111@gmail.com">
                Email
              </a>
              <a className="px-4 py-2 rounded-xl bg-panel2 border border-white/10 hover:bg-panel transition"
                href="https://www.linkedin.com/in/ahmad-abo-alola-21b80b204/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="px-4 py-2 rounded-xl bg-panel2 border border-white/10 hover:bg-panel transition"
                href="https://github.com/ahmad-alola" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="px-4 py-2 rounded-xl bg-panel2 border border-white/10 hover:bg-panel transition"
                href="https://gitlab.com/ahmadola111" target="_blank" rel="noreferrer">
                GitLab
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-16 pb-8 text-center">
        <div className="text-sm md:text-base text-muted">
          © {new Date().getFullYear()} — {t("footer.rights")}{" "}
          <span className="font-semibold">Ahmad Abo-Alola</span>
        </div>
      </footer>

    </div>
  );
}
