export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// CV content per locale (same structure in both files)
export function getCv(locale: Locale) {
  return locale === "pt"
    ? require("./cv-data-pt.js").cvData
    : require("./cv-data.js").cvData;
}
