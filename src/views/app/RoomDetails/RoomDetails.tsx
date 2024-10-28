import { useParams } from "react-router-dom";

export const RoomDetails = () => {
  const { id } = useParams();

  return (
    <>
      <h1>room</h1>
      <div>{id}</div>
    </>
  );
};
