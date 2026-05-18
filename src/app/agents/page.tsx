import { useTranslations } from "next-intl";

const Agents = () => {
  const t = useTranslations();

  return (
    <main className="flex flex-col gap-16 py-10 text-sm leading-5 text-gray-100">
      <section className="px-6 py-2">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-50">{t("agents.markdown.title")}</h1>
            <p className="max-w-lg text-gray-200">
              {t("site.description")} {t("home.description")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-gray-50">{t("agents.directory.products")}</p>
              <ul className="mt-1 flex flex-col">
                <li>
                  <a
                    href={t("agents.directory.links.claudebin.url")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-50"
                  >
                    [{t("agents.directory.links.claudebin.label")}]
                    <span className="text-gray-200">({t("agents.directory.links.claudebin.url")})</span>
                  </a>
                </li>
                <li>
                  <a
                    href={t("agents.directory.links.openable.url")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-50"
                  >
                    [{t("agents.directory.links.openable.label")}]
                    <span className="text-gray-200">({t("agents.directory.links.openable.url")})</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-50">{t("agents.directory.social")}</p>
              <ul className="mt-1 flex flex-col">
                <li>
                  <a
                    href={t("agents.directory.links.github.url")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-50"
                  >
                    [{t("agents.directory.links.github.label")}]
                    <span className="text-gray-200">({t("agents.directory.links.github.url")})</span>
                  </a>
                </li>
                <li>
                  <a href={t("agents.directory.links.x.url")} target="_blank" rel="noreferrer" className="text-gray-50">
                    [{t("agents.directory.links.x.label")}]
                    <span className="text-gray-200">({t("agents.directory.links.x.url")})</span>
                  </a>
                </li>
                <li>
                  <a
                    href={t("agents.directory.links.community.url")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-50"
                  >
                    [{t("agents.directory.links.community.label")}]
                    <span className="text-gray-200">({t("agents.directory.links.community.url")})</span>
                  </a>
                </li>
                <li>
                  <a
                    href={t("agents.directory.links.events.url")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-50"
                  >
                    [{t("agents.directory.links.events.label")}]
                    <span className="text-gray-200">({t("agents.directory.links.events.url")})</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 px-6 py-2">
        <h2 className="text-gray-50">{t("agents.markdown.focusTitle")}</h2>

        <div className="flex flex-col gap-8">
          <article>
            <p className="font-semibold text-gray-50">{t("agents.markdown.harnessesTitle")}</p>
            <p className="max-w-lg text-gray-200">{t("lab.pillars.eval.description")}</p>
          </article>

          <article>
            <p className="font-semibold text-gray-50">{t("agents.markdown.agenticDevEnvsTitle")}</p>
            <p className="max-w-lg text-gray-200">{t("lab.pillars.execution.description")}</p>
          </article>

          <article>
            <p className="font-semibold text-gray-50">{t("agents.markdown.humanInTheLoopTitle")}</p>
            <p className="max-w-lg text-gray-200">{t("lab.pillars.telemetry.description")}</p>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-8 px-6 py-2">
        <h2 className="text-gray-50">{t("agents.markdown.projectsTitle")}</h2>

        <div className="flex flex-col gap-8">
          <article>
            <h3 className="font-semibold text-gray-50">{t("agents.markdown.claudebinTitle")}</h3>
            <p className="max-w-lg text-gray-200">{t("projects.cards.claudebin.description.p1")}</p>
            <p>
              <span className="text-gray-50">- </span>
              <a
                href={t("agents.projects.claudebin.website.url")}
                target="_blank"
                rel="noreferrer"
                className="text-gray-50"
              >
                [{t("agents.projects.claudebin.website.label")}]
                <span className="text-gray-200">({t("agents.projects.claudebin.website.url")})</span>
              </a>
            </p>
          </article>

          <article>
            <h3 className="font-semibold text-gray-50">{t("agents.markdown.openableTitle")}</h3>
            <p className="max-w-lg text-gray-200">{t("projects.cards.openable.description")}</p>
            <p>
              <span className="text-gray-50">- </span>
              <a
                href={t("agents.projects.openable.website.url")}
                target="_blank"
                rel="noreferrer"
                className="text-gray-50"
              >
                [{t("agents.projects.openable.website.label")}]
                <span className="text-gray-200">({t("agents.projects.openable.website.url")})</span>
              </a>
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 py-2">
        <h2 className="text-gray-50">{t("agents.markdown.communityTitle")}</h2>
        <p className="max-w-lg text-gray-200">{t("agents.community.through")}</p>
        <p className="max-w-lg text-gray-200">
          {t("community.stat.value")} {t("community.stat.description")}
        </p>
        <div className="mt-2 flex flex-col">
          <p>
            <span className="text-gray-50">- </span>
            <a
              href={t("agents.community.links.community.url")}
              target="_blank"
              rel="noreferrer"
              className="text-gray-50"
            >
              [{t("agents.community.links.community.label")}]
              <span className="text-gray-200">({t("agents.community.links.community.url")})</span>
            </a>
          </p>
          <p>
            <span className="text-gray-50">- </span>
            <a href={t("agents.community.links.events.url")} target="_blank" rel="noreferrer" className="text-gray-50">
              [{t("agents.community.links.events.label")}]
              <span className="text-gray-200">({t("agents.community.links.events.url")})</span>
            </a>
          </p>
          <p>
            <span className="text-gray-50">- </span>
            <a href={t("agents.community.links.github.url")} target="_blank" rel="noreferrer" className="text-gray-50">
              [{t("agents.community.links.github.label")}]
              <span className="text-gray-200">({t("agents.community.links.github.url")})</span>
            </a>
          </p>
          <p>
            <span className="text-gray-50">- </span>
            <a href={t("agents.community.links.x.url")} target="_blank" rel="noreferrer" className="text-gray-50">
              [{t("agents.community.links.x.label")}]
              <span className="text-gray-200">({t("agents.community.links.x.url")})</span>
            </a>
          </p>
        </div>
      </section>

      <section className="px-6 py-2">
        <h2 className="text-gray-50">{t("agents.markdown.contactTitle")}</h2>
        <p className="max-w-lg text-gray-200">{t("contact.description")}</p>
        <p>
          <span className="text-gray-50">- </span>
          <a href={t("agents.contact.email.url")} className="text-gray-50">
            [{t("agents.contact.email.label")}]<span className="text-gray-200">({t("agents.contact.email.text")})</span>
          </a>
        </p>
        <p>
          <span className="text-gray-50">- </span>
          <a href={t("agents.contact.website.url")} target="_blank" rel="noreferrer" className="text-gray-50">
            [{t("agents.contact.website.label")}]
            <span className="text-gray-200">({t("agents.contact.website.url")})</span>
          </a>
        </p>
      </section>
    </main>
  );
};

export default Agents;
