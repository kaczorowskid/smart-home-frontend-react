import { House } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { RoomTile } from "@/views/app/Rooms/RoomTile";
import { useGetAllRooms } from "@/api/hooks/room.hooks";
import { PageWrapper } from "@/components/common/PageWrapper";

export const Rooms = () => {
  const { data } = useGetAllRooms();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(routesPath.app.roomsDetails.replace(":id", id));
  };

  return (
    <PageWrapper icon={House} title={<FormattedMessage id="view.rooms" />}>
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
