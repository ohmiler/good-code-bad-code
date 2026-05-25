import {
  defaultLanguage,
  languageCookieName,
  languageStorageKey,
} from "@/lib/i18n/language";

const languageCookieMaxAge = 60 * 60 * 24 * 365;

const languageBootstrapScript = `
(function () {
  try {
    var defaultLanguage = ${JSON.stringify(defaultLanguage)};
    var cookieName = ${JSON.stringify(languageCookieName)};
    var storageKey = ${JSON.stringify(languageStorageKey)};
    var cookiePattern = new RegExp("(?:^|; )" + cookieName.replace(/[$()*+./?[\\\\\\]^{|}-]/g, "\\\\$&") + "=([^;]*)");
    var cookieMatch = document.cookie.match(cookiePattern);
    var cookieLanguage = cookieMatch ? decodeURIComponent(cookieMatch[1]) : "";
    var storedLanguage = window.localStorage ? window.localStorage.getItem(storageKey) : "";
    var language =
      cookieLanguage === "en" || cookieLanguage === "th"
        ? cookieLanguage
        : storedLanguage === "en" || storedLanguage === "th"
          ? storedLanguage
          : defaultLanguage;

    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    if (!cookieLanguage) {
      document.cookie = cookieName + "=" + encodeURIComponent(language) + "; Path=/; Max-Age=${languageCookieMaxAge}; SameSite=Lax";
    }

    if (window.localStorage) {
      window.localStorage.setItem(storageKey, language);
    }

    if (language !== defaultLanguage) {
      document.documentElement.dataset.languagePending = "true";
      window.setTimeout(function () {
        document.documentElement.dataset.languageReady = "true";
        delete document.documentElement.dataset.languagePending;
      }, 1200);
    }
  } catch (error) {
    document.documentElement.lang = ${JSON.stringify(defaultLanguage)};
  }
})();
`;

export function LanguageBootstrapScript() {
  return (
    <script
      id="language-bootstrap"
      dangerouslySetInnerHTML={{ __html: languageBootstrapScript }}
    />
  );
}
