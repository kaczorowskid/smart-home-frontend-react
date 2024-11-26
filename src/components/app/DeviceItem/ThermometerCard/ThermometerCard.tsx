import { CardWithHeader } from "@/components/common/CardWithHeader";
import { Dropdown } from "@/components/common/Dropdown";
import { Loader2, Thermometer } from "lucide-react";
import { ThermometerCardProps } from "./ThermometerCard.types";
import { dateFormatter } from "@/utils/date.utils";
import { FormattedMessage } from "react-intl";

export const ThermometerCard = ({
  name,
  thermometerData,
  items,
  isLocalKey,
}: ThermometerCardProps) => {
  return (
    <CardWithHeader
      icon={Thermometer}
      title={
        isLocalKey ? (
          <Dropdown
            items={items}
            triggerComponent={
              <div className="cursor-pointer hover:text-muted-foreground">
                {name}
              </div>
            }
          />
        ) : (
          <span>{name}</span>
        )
      }
      hasSmallHeader
    >
      {!thermometerData?.length ? (
        <div className="flex justify-center items-center">
          <Loader2 className="h-20 w-20 animate-spin" />
        </div>
      ) : (
        <>
          <div className="text-6xl font-bold mb-5">
            {thermometerData?.[0]?.temperature}
          </div>
          <p className="flex text-xs text-muted-foreground justify-between">
            <span>
              <FormattedMessage id="component.humidity" />
              {thermometerData?.[0]?.humidity}%
            </span>
            <span>
              <FormattedMessage id="component.last" />
              {dateFormatter.onlyHour(thermometerData?.[0]?.date || new Date())}
            </span>
            <span>
              <FormattedMessage id="component.battery" />
              {thermometerData?.[0]?.battery}%
            </span>
          </p>
        </>
      )}
    </CardWithHeader>
  );
};
