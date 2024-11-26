import { RoomTile } from "@/views/app/Rooms/RoomTile";
import { PageWrapper } from "@/components/common/PageWrapper";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { useGetAllRooms } from "@/api/hooks/room.hooks";
import { useIntl } from "react-intl";

export const Rooms = () => {
  const { formatMessage } = useIntl();
  const { data } = useGetAllRooms();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(routesPath.app.roomsDetails.replace(":id", id));
  };

  return (
    <PageWrapper title={formatMessage({ id: "view.rooms" })} icon={House}>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10">
        {data?.map(({ id, name, roomType }) => (
          <RoomTile
            key={id}
            name={name}
            roomType={roomType}
            onClick={() => handleNavigate(id)}
          />
        ))}
      </div>
    </PageWrapper>
  );
};
