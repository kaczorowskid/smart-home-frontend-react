import { useState } from "react";
import { useParams } from "react-router-dom";
import { House, Droplet } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { type DateRange } from "react-day-picker";
import { dateFormatter } from "@/utils/date.utils";
import { type ChartType } from "@/types/common.types";
import { dateLastDay } from "@/constants/date.consts";
import { useGetOneRoom } from "@/api/hooks/room.hooks";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DateSelector } from "@/components/app/DateSelector";
import { PageWrapper } from "@/components/common/PageWrapper";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";
import { chartTypeMapper } from "./RoomDetails.utils";

const { onlyDate } = dateFormatter;

export const RoomDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneRoom({ id: id || "" });
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);
  const [chartType, setChartType] = useState<ChartType>("temperature");
  const formattedDateRange = `${onlyDate(date?.from)} - ${onlyDate(date?.to)}`;

  const allDevices = [
    ...(data?.thermometers?.map(({ thermometerId }) => (
      <DeviceItem deviceId={thermometerId} />
    )) || []),

    ...(data?.blinds?.map(({ blindId }) => <DeviceItem deviceId={blindId} />) ||
      []),
  ];

  return (
    <PageWrapper
      icon={House}
      title={
        <FormattedMessage
          id="view.room-details"
          values={{ room: data?.name }}
        />
      }
    >
      <div className="gap-5 flex flex-col lg:grid lg:grid-cols-4">
        {allDevices}
      </div>
      {data?.thermometers?.map(({ thermometerId }) => (
        <div className="pt-5">
          <DeviceChart
            icon={Droplet}
            dateTo={date?.to}
            dateFrom={date?.from}
            chartType={chartType}
            deviceId={thermometerId}
            description={`${chartTypeMapper[chartType]} - ${formattedDateRange}`}
            extra={
              <DateSelector
                date={date}
                setDate={setDate}
                chartType={chartType}
                setChartType={setChartType}
              />
            }
          />
        </div>
      ))}
    </PageWrapper>
  );
};
