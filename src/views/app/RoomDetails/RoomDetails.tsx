import { useParams } from "react-router-dom";
import { useGetOneRoom } from "./RoomDetails.hooks";
import { DeviceItem } from "@/components/app/DeviceItem";
import { PageWrapper } from "@/components/common/PageWrapper";
import { House } from "lucide-react";

export const RoomDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneRoom({ id: id || "" });

  const allDevices = [
    ...(data?.thermometers?.map(({ thermometerId }) => (
      <DeviceItem type="ID" itemId={thermometerId} />
    )) || []),

    ...(data?.blinds?.map(({ blindId }) => (
      <DeviceItem type="ID" itemId={blindId} />
    )) || []),
  ];

  return (
    <PageWrapper title={`Room details - ${data?.name}`} icon={House}>
      <div className="grid grid-cols-4 gap-5 mb-5">{allDevices}</div>
    </PageWrapper>
  );
};
