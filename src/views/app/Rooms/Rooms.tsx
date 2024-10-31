import { Room } from "@/views/app/Rooms/Room";
import { PageWrapper } from "@/components/common/PageWrapper";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { useGetAllRooms } from "@/api/hooks/room.hooks";

export const Rooms = () => {
  const { data } = useGetAllRooms();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(routesPath.app.roomsDetails.replace(":id", id));
  };

  return (
    <PageWrapper title="Rooms" icon={House}>
      <div className="grid grid-cols-3 gap-10">
        {data?.map(({ id, name, image }) => (
          <Room
            key={id}
            name={name}
            image={image}
            onClick={() => handleNavigate(id)}
          />
        ))}
      </div>
    </PageWrapper>
  );
};
