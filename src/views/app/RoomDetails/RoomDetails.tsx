import { useParams } from "react-router-dom";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Droplet, House } from "lucide-react";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";
import { useGetOneRoom } from "@/api/hooks/room.hooks";
import { DateSelector } from "@/components/app/DateSelector";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { ChartType } from "@/types/common.types";
import { dateLastDay } from "@/constants/date.consts";

export const RoomDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneRoom({ id: id || "" });
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);
  const [chartType, setChartType] = useState<ChartType>("temperature");

  const allDevices = [
    ...(data?.thermometers?.map(({ thermometerId }) => (
      <DeviceItem deviceId={thermometerId} />
    )) || []),

    ...(data?.blinds?.map(({ blindId }) => <DeviceItem deviceId={blindId} />) ||
      []),
  ];

  return (
    <PageWrapper title={`Room details - ${data?.name}`} icon={House}>
      <div className="grid grid-cols-4 gap-5 mb-5">{allDevices}</div>
      {data?.thermometers?.map(({ thermometerId }) => (
        <div className="mb-5">
          <DeviceChart
            dateTo={date?.to}
            dateFrom={date?.from}
            icon={Droplet}
            chartType={chartType}
            description="Humidity"
            deviceId={thermometerId}
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
