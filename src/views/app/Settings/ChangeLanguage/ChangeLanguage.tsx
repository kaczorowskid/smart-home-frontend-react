import { Select } from "@/components/common/Select";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalization } from "@/contexts/Localization/Localization.hooks";
import { Locale } from "@/contexts/Localization/Localization.types";
import { FormattedMessage, useIntl } from "react-intl";
import { languageItems } from "./ChangeLanguage.consts";

export const ChangeLanguage = () => {
  const { formatMessage } = useIntl();
  const { locale, setUserLocale } = useLocalization();

  return (
    <Card className="w-full mb-5">
      <CardContent className="flex min-h-32 items-center justify-between p-5">
        <span className="text-2xl">
          <FormattedMessage id="view.change-language" />
        </span>
        <div className="min-w-32">
          <Select
            value={locale}
            onValueChange={(val: Locale) => setUserLocale(val)}
            items={languageItems(formatMessage)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
