import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
      <header className="flex items-center justify-between text-sm font-medium text-neutral-500">
        <span>{t("site.domain")}</span>
        <span>{t("site.label")}</span>
      </header>

      <section className="py-24 sm:py-32">
        <p className="mb-5 text-sm font-medium uppercase tracking-wide text-blue-600">{t("home.kicker")}</p>
        <h1 className="max-w-3xl text-5xl font-semibold text-neutral-950 sm:text-7xl">{t("home.title")}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">{t("home.description")}</p>
      </section>

      <footer className="flex flex-col gap-2 border-t border-neutral-200 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span>{t("footer.description")}</span>
        <a className="text-neutral-950 transition-colors hover:text-blue-600" href="mailto:hello@wunderlabs.dev">
          {t("footer.email")}
        </a>
      </footer>
    </main>
  );
};

export default Home;
