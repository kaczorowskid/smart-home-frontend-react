import { FormattedMessage } from "react-intl";
import { Select } from "@/components/common/Select";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale } from "@/contexts/Localization/Localization.types";
import { useLocalization } from "@/contexts/Localization/Localization.hooks";
import { languageItems } from "./ChangeLanguage.consts";

export const ChangeLanguage = () => {
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
            items={languageItems}
            onValueChange={(val: Locale) => setUserLocale(val)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
