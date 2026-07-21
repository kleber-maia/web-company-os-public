"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { COPY, normalizeLocale } from "./i18n";
import type { Locale } from "./i18n";

const sparkleStyles = Array.from({ length: 54 }, (_, index) => {
  const x = (index * 37 + 11) % 100;
  const y = (index * 61 + 7) % 100;
  const size = index % 9 === 0 ? 3 : index % 4 === 0 ? 2 : 1;
  return {
    "--x": `${x}%`,
    "--y": `${y}%`,
    "--size": `${size}px`,
    "--delay": `${(index % 12) * -0.43}s`,
    "--duration": `${3.8 + (index % 7) * 0.55}s`,
  } as CSSProperties;
});

const orbitParticleStyles = Array.from({ length: 18 }, (_, index) => ({
  "--particle-angle": `${index * 20}deg`,
  "--particle-distance": `${336 + (index % 3) * 54}px`,
  "--particle-delay": `${index * -0.38}s`,
} as CSSProperties));

function getInitialLocale(): Locale {
  const urlLocale = normalizeLocale(new URLSearchParams(window.location.search).get("lang"));
  if (urlLocale) return urlLocale;

  try {
    const savedLocale = normalizeLocale(window.localStorage.getItem("operaos-locale"));
    if (savedLocale) return savedLocale;
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }

  return normalizeLocale(window.navigator.language) ?? "en";
}

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const touchSlowRef = useRef(false);
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const copy = COPY[locale];
  const systemParts = copy.systemParts as Array<[string, string, string]>;
  const capabilities = copy.capabilities as Array<[string, string, string]>;
  const layers = copy.layers as Array<[string, string, string, string]>;
  const workflowSteps = copy.work.steps as Array<[string, string]>;
  const projectSummary = copy.structure.summary as Array<[string, string]>;
  const projectColumns = copy.structure.columns as Array<[string, Array<[string, string]>]>;
  const developmentHistory = copy.development.historyItems as Array<[string, string]>;
  const modules = copy.modules as Array<[string, string]>;
  const ownershipProofs = copy.ownership.proofs as Array<[string, string]>;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.meta.ogDescription);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale === "pt-BR" ? "pt_BR" : locale === "es-419" ? "es_419" : "en_US");

    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", url);

    try {
      window.localStorage.setItem("operaos-locale", locale);
    } catch {
      // The selected language still works for the current visit.
    }
  }, [copy, locale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  const setOrbitPlaybackRate = (rate: number) => {
    stageRef.current?.querySelectorAll<HTMLElement>(".orbiting-part, .part-billboard").forEach((element) => {
      element.getAnimations().forEach((animation) => animation.updatePlaybackRate(rate));
    });
  };

  const handleStagePointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") setOrbitPlaybackRate(0.5);
  };

  const handleStagePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") setOrbitPlaybackRate(touchSlowRef.current ? 0.5 : 1);
  };

  const handleStagePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return;
    touchSlowRef.current = !touchSlowRef.current;
    setOrbitPlaybackRate(touchSlowRef.current ? 0.5 : 1);
  };

  return (
    <main>
      <section className="hero" id="top">
        <div className="aurora aurora-one" aria-hidden="true" />
        <div className="aurora aurora-two" aria-hidden="true" />
        <div className="aurora aurora-three" aria-hidden="true" />
        <div className="sparkle-field" aria-hidden="true">
          {sparkleStyles.map((style, index) => (
            <span className="sparkle" style={style} key={index} />
          ))}
        </div>

        <nav className="site-nav" aria-label={copy.nav.aria}>
          <a className="brand" href="#top" aria-label={copy.nav.homeAria}>OperaOS</a>
          <div className="nav-links">
            <a href="#system">{copy.nav.system}</a>
            <a href="#work">{copy.nav.work}</a>
            <a href="#modules">{copy.nav.modules}</a>
            <a href="#ownership">{copy.nav.ownership}</a>
          </div>
          <div className="nav-actions">
            <label className="language-picker">
              <span>{copy.language.label}</span>
              <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={copy.language.label}>
                <option value="en">{copy.language.en}</option>
                <option value="pt-BR">{copy.language.pt}</option>
                <option value="es-419">{copy.language.es}</option>
              </select>
            </label>
            <span className="access-label"><i /> {copy.nav.access}</span>
          </div>
        </nav>

        <div className="hero-copy">
          <p className="hero-kicker"><span>{copy.hero.kickerOne}</span><i /><span>{copy.hero.kickerTwo}</span></p>
          <h1>{copy.hero.lineOne}<br />{copy.hero.lineTwo}<em>{copy.hero.emphasis}</em></h1>
          <p className="hero-lede">{copy.hero.lede}</p>
        </div>

        <div
          className="system-stage"
          aria-label={copy.hero.stageAria}
          ref={stageRef}
          onPointerEnter={handleStagePointerEnter}
          onPointerLeave={handleStagePointerLeave}
          onPointerUp={handleStagePointerUp}
        >
          <div className="orbit-haze" aria-hidden="true" />
          <div className="cross-orbit" aria-hidden="true"><i /><i /><span /></div>
          <div className="orbital-scene">
            <div className="stage-rings" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="orbit-spokes" aria-hidden="true">
              {systemParts.map(([, , className], index) => (
                <i key={className} style={{ "--spoke-angle": `${index * 60}deg`, "--signal-delay": `${index * -0.7}s` } as CSSProperties} />
              ))}
            </div>
            <div className="orbit-particles" aria-hidden="true">
              {orbitParticleStyles.map((style, index) => <i key={index} style={style} />)}
            </div>
            {systemParts.map(([label, detail, className], index) => (
              <div
                className={`orbiting-part ${className}`}
                key={className}
                style={{
                  "--orbit-phase": `${index * 60}deg`,
                  "--orbit-phase-end": `${index * 60 + 360}deg`,
                  "--orbit-phase-neg": `${index * -60}deg`,
                  "--orbit-phase-neg-end": `${index * -60 - 360}deg`,
                } as CSSProperties}
              >
                <div className="part-billboard">
                  <div className="system-part">
                    <span className="part-orb" aria-hidden="true"><i /></span>
                    <div><strong>{label}</strong><small>{detail}</small></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="core-glow" aria-hidden="true"><i /></div>

          <div className="company-core">
            <div className="core-header">
              <span>OperaOS</span>
              <span className="core-status"><i /> {copy.hero.status}</span>
            </div>
            <div className="core-body">
              <p className="core-context">{copy.hero.context}</p>
              <div className="agent-message">
                <span className="agent-avatar">Opera</span>
                <p>{copy.hero.message}</p>
              </div>
              <div className="agent-action">
                <span>{copy.hero.actionLabel}</span>
                <strong>{copy.hero.actionTitle}</strong>
                <small>{copy.hero.approval}</small>
              </div>
              <div className="context-track" aria-label={copy.hero.checked}>
                <span>{copy.hero.contextItems[0]}</span><i /><span>{copy.hero.contextItems[1]}</span><i /><span>{copy.hero.contextItems[2]}</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="system-section" id="system">
        <div className="section-intro reveal">
          <p className="section-kicker">{copy.system.kicker}</p>
          <h2>{copy.system.title}</h2>
          <p>{copy.system.body}</p>
        </div>

        <div className="agent-capabilities reveal" aria-label={copy.system.capabilitiesAria}>
          <div className="capability-heading">
            <p className="section-kicker">{copy.system.advantage}</p>
            <h3>{copy.system.advantageTitle}</h3>
            <p>{copy.system.advantageBody}</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([eyebrow, title, body], index) => (
              <article className="capability-item" key={index}>
                <div className="capability-meta"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /></div>
                <p>{eyebrow}</p>
                <h4>{title}</h4>
                <small>{body}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="layer-stack">
          {layers.map(([eyebrow, title, body, accent], index) => (
            <article className={`layer-card layer-${accent} reveal`} key={accent} style={{ "--layer-top": `${20 + index * 15}px` } as CSSProperties}>
              <div className="layer-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="layer-copy">
                <p>{eyebrow}</p>
                <h3>{title}</h3>
                <span>{body}</span>
              </div>
              <div className="layer-visual" aria-hidden="true">
                <span className="layer-sphere"><i /><i /><i /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading reveal">
          <p className="section-kicker">{copy.work.kicker}</p>
          <h2>{copy.work.titleBefore}<em>{copy.work.emphasis}</em>{copy.work.titleAfter}</h2>
        </div>

        <div className="workflow reveal">
          <div className="workflow-question">
            <span>{copy.work.you}</span>
            <p>{copy.work.question}</p>
          </div>
          <div className="workflow-rail" aria-hidden="true">
            <span className="rail-light" />
          </div>
          <div className="workflow-steps">
            {workflowSteps.map(([title, detail], index) => (
              <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><small>{detail}</small></div>
            ))}
          </div>
          <div className="workflow-result">
            <div>
              <span>{copy.work.recommended}</span>
              <strong>{copy.work.action}</strong>
              <small>{copy.work.result}</small>
            </div>
            <button type="button" aria-label={copy.work.approveAria}>{copy.work.approve}</button>
            <p>{copy.work.confirmation}</p>
          </div>
        </div>

        <div className="structure-story reveal">
          <div className="structure-copy">
            <p className="section-kicker">{copy.structure.kicker}</p>
            <h3>{copy.structure.title}</h3>
            <p>{copy.structure.body}</p>
            <div className="structure-prompt">
              <span>{copy.work.you}</span>
              <p>{copy.structure.prompt}</p>
            </div>
          </div>

          <div className="structure-output" aria-label={copy.structure.outputAria}>
            <div className="structure-topbar">
              <span>{copy.structure.created}</span>
              <small><i /> {copy.structure.ready}</small>
            </div>
            <div className="created-board-heading">
              <div>
                <span>{copy.structure.newProject}</span>
                <h4>{copy.structure.project}</h4>
              </div>
              <small>{copy.structure.owner}</small>
            </div>
            <div className="created-summary">
              {projectSummary.map(([value, label]) => <span key={label}><strong>{value}</strong> {label}</span>)}
            </div>
            <div className="created-columns">
              {projectColumns.map(([heading, cards]) => (
                <div key={heading}>
                  <p>{heading}</p>
                  {cards.map(([title, detail]) => <article key={title}><strong>{title}</strong><small>{detail}</small></article>)}
                </div>
              ))}
            </div>
            <div className="structure-update">
              <span>{copy.structure.later}</span>
              <p>{copy.structure.update}</p>
              <small>{copy.structure.updated}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="development-section">
        <div className="development-aura" aria-hidden="true" />
        <div className="development-copy reveal">
          <p className="section-kicker">{copy.development.kicker}</p>
          <h2>{copy.development.title}</h2>
          <p>{copy.development.body}</p>
        </div>

        <div className="development-console reveal">
          <div className="console-topbar">
            <span>OperaOS</span>
            <strong>{copy.development.mode}</strong>
            <span className="console-ready"><i /> {copy.development.connected}</span>
          </div>
          <div className="console-grid">
            <div className="console-history">
              <p>{copy.development.history}</p>
              <h3>{copy.development.next}</h3>
              {developmentHistory.map(([title, detail], index) => (
                <div className={`history-line${index === 0 ? " active" : ""}`} key={title}><i /><span><strong>{title}</strong><small>{detail}</small></span></div>
              ))}
            </div>
            <div className="console-chat">
              <div className="chat-user">{copy.development.user}</div>
              <div className="chat-agent"><span>Opera</span><p>{copy.development.agent}</p></div>
              <div className="build-progress">
                {copy.development.progress.map((item, index) => <span className={index === copy.development.progress.length - 1 ? "working" : undefined} key={item}><i /> {item}</span>)}
              </div>
            </div>
            <div className="new-module">
              <span>{copy.development.newCapability}</span>
              <div className="module-glyph" aria-hidden="true"><i /><i /><i /></div>
              <h3>{copy.development.module}</h3>
              <p>{copy.development.moduleBody}</p>
              <small><i /> {copy.development.appears}</small>
            </div>
          </div>
        </div>
      </section>

      <section className="modules-section" id="modules">
        <div className="modules-heading reveal">
          <p className="section-kicker">{copy.modulesSection.kicker}</p>
          <h2>{copy.modulesSection.title}</h2>
          <p>{copy.modulesSection.body}</p>
        </div>
        <div className="module-marquee" aria-label={copy.modulesSection.aria}>
          <div className="module-track">
            {[...modules, ...modules].map(([name, detail], index) => (
              <div className="module-item" key={`${name}-${index}`} aria-hidden={index >= modules.length}>
                <span>{String((index % modules.length) + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <small>{detail}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="workspace-story reveal">
          <div className="workspace-copy">
            <p className="section-kicker">{copy.modulesSection.workspaceKicker}</p>
            <h3>{copy.modulesSection.workspaceTitle}</h3>
            <p>{copy.modulesSection.workspaceBody}</p>
          </div>
          <div className="workspace-universe" aria-label={copy.modulesSection.workspaceAria}>
            <div className="workspace-orbit orbit-a"><span>North & Coast<small>{copy.modulesSection.workspaceTypes[0]}</small></span></div>
            <div className="workspace-orbit orbit-b"><span>Vela Studio<small>{copy.modulesSection.workspaceTypes[1]}</small></span></div>
            <div className="workspace-orbit orbit-c"><span>Fieldwork<small>{copy.modulesSection.workspaceTypes[2]}</small></span></div>
            <div className="workspace-center"><span>OperaOS<small>{copy.modulesSection.sharedAdmin}</small></span></div>
          </div>
        </div>
      </section>

      <section className="ownership-section" id="ownership">
        <div className="ownership-stars" aria-hidden="true">
          {sparkleStyles.slice(0, 28).map((style, index) => <span className="sparkle" style={style} key={index} />)}
        </div>
        <div className="ownership-copy reveal">
          <p className="section-kicker">{copy.ownership.kicker}</p>
          <h2>{copy.ownership.lineOne}<br />{copy.ownership.lineTwo}<br />{copy.ownership.lineThree}<em>{copy.ownership.emphasis}</em></h2>
          <p>{copy.ownership.body}</p>
        </div>
        <div className="ownership-proof reveal">
          {ownershipProofs.map(([title, detail], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><small>{detail}</small></div>)}
        </div>
        <div className="closing-mark reveal">
          <p className="closing-brand">OperaOS</p>
          <h3>{copy.ownership.closing}<br />{copy.ownership.closingSecond}</h3>
          <small>{copy.ownership.access}</small>
        </div>
      </section>
    </main>
  );
}
