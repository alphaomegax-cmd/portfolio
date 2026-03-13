import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_OPTIONS,
  getPortfolioContent,
} from "../constants";

const STORAGE_KEY = "portfolio_language";
const supportedCodes = LANGUAGE_OPTIONS.map((language) => language.code);

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    return supportedCodes.includes(savedLanguage)
      ? savedLanguage
      : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const content = useMemo(() => getPortfolioContent(language), [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content,
      languageOptions: LANGUAGE_OPTIONS,
    }),
    [language, content]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
