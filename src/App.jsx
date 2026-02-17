import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { STORAGE_LANG_KEY } from "./i18n";

const base = import.meta.env.BASE_URL;

function LangButton({ code, current, onClick, label }) {
  const active = current === code;
  return (
    <button
      onClick={() => onClick(code)}
      className={[
        "px-3 py-1 rounded-full text-sm transition",
        "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-0",
        active
          ? "bg-accent text-black shadow-soft"
          : "bg-panel2 text-text hover:bg-panel border border-white/10",
      ].join(" ")}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

function SectionTitle({ id, children, kicker }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-4">
      <div>
        {kicker ? (
          <div className="text-xs uppercase tracking-widest text-muted/80">
            {kicker}
          </div>
        ) : null}
        <h2 id={id} className="text-xl md:text-2xl font-semibold tracking-tight">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent shadow-soft" />
            {children}
          </span>
        </h2>
      </div>
      <div className="hidden md:block text-xs text-muted/70">
        <span className="inline-block w-24 h-px bg-white/10" />
      </div>
    </div>
  );
}

function NeonABackdrop() {
  return (
    <div className="a-backdrop" aria-hidden="true">
      {/* first copy */}
      <svg className="a-svg a-one" viewBox="0 0 200 200">
        <path
          className="a-path a-glow"
          d="M100 18 L28 182 H55 L72 142 H128 L145 182 H172 L100 18 Z
             M84 116 L100 78 L116 116 Z"
        />
        <path
          className="a-path a-core"
          d="M100 18 L28 182 H55 L72 142 H128 L145 182 H172 L100 18 Z
             M84 116 L100 78 L116 116 Z"
        />
      </svg>

      {/* second copy */}
      <svg className="a-svg a-two" viewBox="0 0 200 200">
        <path
          className="a-path a-glow"
          d="M100 18 L28 182 H55 L72 142 H128 L145 182 H172 L100 18 Z
             M84 116 L100 78 L116 116 Z"
        />
        <path
          className="a-path a-core"
          d="M100 18 L28 182 H55 L72 142 H128 L145 182 H172 L100 18 Z
             M84 116 L100 78 L116 116 Z"
        />
      </svg>

      <div className="a-vignette" />
    </div>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();

  const [activeSection, setActiveSection] = useState("about");

  const sectionIds = useMemo(() => ["about", "projects", "skills", "contact"], []);

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.08, 0.12, 0.2, 0.35],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

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

      <NeonABackdrop />

      {/* Header */}
      <header className="sticky top-0 z-50">
        <div className="header-surface">
          <div className="mx-auto max-w-6xl px-5 py-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`${base}logo/logo-128.png`}
                  alt="Ahmad Abo-Alola logo"
                  className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow"
                />

                <div className="leading-tight">
                  <div className="text-base md:text-lg font-bold tracking-tight">
                    {t("name")}
                  </div>
                  <div className="text-muted/80 text-xs md:text-sm">
                    {t("headline")}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 justify-between md:justify-end">
                <nav className="flex flex-wrap items-center gap-3 text-sm">
                  <a
                    className={`nav-link ${
                      activeSection === "about" ? "nav-link-active" : ""
                    }`}
                    href="#about"
                  >
                    {t("nav.about")}
                  </a>
                  <span className="text-muted/30">•</span>
                  <a
                    className={`nav-link ${
                      activeSection === "projects" ? "nav-link-active" : ""
                    }`}
                    href="#projects"
                  >
                    {t("nav.projects")}
                  </a>
                  <span className="text-muted/30">•</span>
                  <a
                    className={`nav-link ${
                      activeSection === "skills" ? "nav-link-active" : ""
                    }`}
                    href="#skills"
                  >
                    {t("nav.skills")}
                  </a>
                  <span className="text-muted/30">•</span>
                  <a
                    className={`nav-link ${
                      activeSection === "contact" ? "nav-link-active" : ""
                    }`}
                    href="#contact"
                  >
                    {t("nav.contact")}
                  </a>
                </nav>

                <div className="flex items-center gap-2">
                  <LangButton
                    code="fr"
                    current={i18n.language}
                    onClick={setLang}
                    label="FR"
                  />
                  <LangButton
                    code="en"
                    current={i18n.language}
                    onClick={setLang}
                    label="EN"
                  />
                  <LangButton
                    code="ar"
                    current={i18n.language}
                    onClick={setLang}
                    label="AR"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10">
        {/* Hero */}
        <section className="hero-card">
          {/* Watermark logo */}
          <img
            src={`${base}logo/logo-128.png`}
            alt=""
            className="pointer-events-none absolute -right-10 -top-10 w-56 md:w-72 opacity-[0.06] blur-[0.2px]"
          />

          {/* Inner lighting */}
          <div className="pointer-events-none absolute -top-40 left-6 h-72 w-72 rounded-full bg-accent/18 blur-3xl" />
          <div className="pointer-events-none absolute top-10 left-32 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left */}
            <div className="relative flex flex-col gap-4">
              <div className="pointer-events-none absolute -top-10 -left-8 h-40 w-72 bg-accent/10 blur-3xl rounded-full" />

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-2 rounded-full bg-accent/15 blur-xl" />
                  <img
                    src={`${base}profile.png`}
                    alt="Ahmad Abo-Alola"
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-white/15 shadow-xl ring-2 ring-accent/25"
                  />
                </div>

                <div className="text-xs text-muted/80">
                  <div className="inline-flex items-center gap-2 bg-panel2/70 border border-white/10 rounded-full px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {t("hero.subtitle")}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[28px] sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.12] md:leading-[1.05]">
                <span className="relative block">
                  <span className="pointer-events-none absolute -inset-3 blur-2xl bg-accent/10 rounded-xl" />
                  <span className="relative block">{t("hero.title")}</span>

                  {/* PRO: training stays on same line on desktop */}
                  <span className="relative block md:inline md:ms-3 text-lg md:text-2xl font-medium text-muted mt-2 md:mt-0">
                    {t("hero.training")}
                  </span>
                </span>
              </h1>

              <p className="text-muted leading-relaxed max-w-xl">
                {t("about.text")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-5 py-2 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition shadow-soft focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  {t("hero.ctaPrimary")}
                </a>

                <a
                  href={`${base}CV_Ahmad_Abo-Alola_Developpeur_IA.pdf`}
                  download
                  className="px-5 py-2 rounded-xl bg-transparent border border-white/15 hover:bg-panel2/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  {t("hero.ctaSecondary")}
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 gap-4">
              <div className="card-pro group">
                <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-accent/14 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute left-0 top-0 h-full w-[2px] bg-accent/35 opacity-60" />
                <div className="text-sm text-muted">{t("highlights.h2.kicker")}</div>
                <div className="mt-1 text-lg font-semibold">{t("highlights.h2.title")}</div>
                <div className="text-sm text-muted mt-2 leading-relaxed">
                  {t("highlights.h2.text")}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-pro group">
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-60 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-accent/30 opacity-60" />
                  <div className="text-sm text-muted">{t("highlights.h1.kicker")}</div>
                  <div className="font-semibold mt-1">{t("highlights.h1.title")}</div>
                  <div className="text-sm text-muted mt-2">{t("highlights.h1.text")}</div>
                </div>

                <div className="card-pro group">
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-60 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-accent/30 opacity-60" />
                  <div className="text-sm text-muted">{t("highlights.h3.kicker")}</div>
                  <div className="font-semibold mt-1">{t("highlights.h3.title")}</div>
                  <div className="text-sm text-muted mt-2">{t("highlights.h3.text")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="pt-12">
          <SectionTitle id="about-title" kicker="PROFILE">
            {t("about.title")}
          </SectionTitle>

          <div className="card-soft p-6 md:p-7">
            <p className="text-text/90 leading-relaxed">{t("about.text")}</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pt-12">
          <SectionTitle id="projects-title" kicker="WORK">
            {t("projects.title")}
          </SectionTitle>

          <div className="text-sm text-muted mb-4">{t("projects.note")}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t("projects.items", { returnObjects: true }).map((p, idx) => (
              <div
                key={idx}
                className="card-soft group p-6 hover:-translate-y-[1px] transition-transform"
              >
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute left-0 top-0 h-full w-[2px] bg-accent/25 opacity-60" />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{p.title}</div>
                    <div className="text-sm text-muted mt-1 leading-relaxed">{p.desc}</div>
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
                      className="text-xs text-text/90 bg-panel2/70 border border-white/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* I Will Try To Make It Here */}
                

                {/* Finish My Code Here*/}

                <div className="flex flex-wrap gap-3 mt-5">
                  {p.git && (
                    <a
                      className="text-sm px-4 py-2 rounded-xl bg-panel2/70 border border-white/10 hover:bg-panel transition"
                      href={p.git}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Git
                    </a>
                  )}
                  {p.demo && (
                    <a
                      className="text-sm px-4 py-2 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition shadow-soft"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pt-12">
          <SectionTitle id="skills-title" kicker="STACK">
            {t("skills.title")}
          </SectionTitle>

          <div className="card-soft p-6 md:p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t("skills.list", { returnObjects: true }).map((s, idx) => (
                <li key={idx} className="text-text/90">
                  <span className="text-accent">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-12">
          <SectionTitle id="contact-title" kicker="LET'S TALK">
            {t("contact.title")}
          </SectionTitle>

          <div className="card-soft p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-muted">{t("contact.subtitle")}</div>

            <div className="flex flex-wrap gap-3">
              <a
                className="px-4 py-2 rounded-xl bg-transparent border border-white/15 hover:bg-panel2/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30"
                href="mailto:Ahmadola111@gmail.com"
              >
                Email
              </a>
              <a
                className="px-4 py-2 rounded-xl bg-transparent border border-white/15 hover:bg-panel2/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30"
                href="https://www.linkedin.com/in/ahmad-abo-alola-21b80b204/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="px-4 py-2 rounded-xl bg-transparent border border-white/15 hover:bg-panel2/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30"
                href="https://github.com/ahmad-alola"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="px-4 py-2 rounded-xl bg-transparent border border-white/15 hover:bg-panel2/60 transition focus:outline-none focus:ring-2 focus:ring-accent/30"
                href="https://gitlab.com/ahmadola111"
                target="_blank"
                rel="noreferrer"
              >
                GitLab
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 pb-10 text-center">
        <div className="text-sm md:text-base text-muted">
          © {new Date().getFullYear()} — {t("footer.rights")}{" "}
          <span className="font-semibold">Ahmad Abo-Alola</span>
        </div>
      </footer>
    </div>
  );
}
