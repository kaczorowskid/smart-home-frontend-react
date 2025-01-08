import { IntlProvider } from "react-intl";
import { useState, useEffect } from "react";
import { LOCALE_STORAGE_KEY } from "./Localization.consts";
import { LocalizationContext } from "./Localization.context";
import { getLocale, getMessages } from "./Localization.utils";
import {
  type Locale,
  type LocalizationProviderProps,
} from "./Localization.types";

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  const [locale, setLocale] = useState<Locale>(
    (localStorage.getItem(LOCALE_STORAGE_KEY) as Locale) || getLocale()
  );
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    getMessages(locale).then((data) => setMessages(data.default));
  }, [locale]);

  return (
    <LocalizationContext.Provider
      value={{
        locale,
        setUserLocale: (locale) => {
          setLocale(locale);
          localStorage.setItem(LOCALE_STORAGE_KEY, locale);
        },
      }}
    >
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
};
