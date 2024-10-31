import { useParams } from "react-router-dom";
import { useGetOneRoom } from "./RoomDetails.hooks";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Droplet, House } from "lucide-react";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";

export const RoomDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneRoom({ id: id || "" });

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
            icon={Droplet}
            chartType="temperature"
            description="Humidity"
            deviceId={thermometerId}
          />
        </div>
      ))}
    </PageWrapper>
  );
};
