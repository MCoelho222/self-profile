import Link from "next/link";
import { Locale, localeNames, locales } from "../lib/i18n";

// EN | PT segmented switch, fixed in the top-right corner
const LanguageSwitch = ({ current, label }: { current: Locale; label: string }) => {
  return (
    <nav className="lang-switch" aria-label={label}>
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            title={localeNames[locale]}
            aria-current={active ? "page" : undefined}
            className={active ? "lang-switch-opt lang-switch-active" : "lang-switch-opt"}
            scroll={false}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
};

export default LanguageSwitch;
