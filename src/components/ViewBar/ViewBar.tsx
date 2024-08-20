import { useLocation } from "react-router-dom";
import { Card } from "../ui/card";
import { Views, viewsData } from "./ViewBar.data";

export const ViewBar = () => {
  const location = useLocation();
  const pathname = location.pathname.substring(1) as Views;

  const { title, icon: Icon } = viewsData[pathname];

  return (
    <Card className="h-[100px] mb-5 flex place-items-center text-2xl font-medium pl-5">
      <Icon />
      <span className="pl-2">{title}</span>
    </Card>
  );
};
