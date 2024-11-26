import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { Locale, LocalizationProviderProps } from "./Localization.types";
import { getLocale, getMessages } from "./Localization.utils";
import { LocalizationContext } from "./Localization.context";
import { LOCALE_STORAGE_KEY } from "./Localization.consts";

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  const [locale, setLocale] = useState<Locale>(
    (localStorage.getItem(LOCALE_STORAGE_KEY) as Locale) || getLocale()
  );
  const [messages, setMessages] = useState<Record<string, any>>({});

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
