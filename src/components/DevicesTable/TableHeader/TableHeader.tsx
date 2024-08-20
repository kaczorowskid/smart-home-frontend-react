import { AccordionTrigger } from "@/components/ui/accordion";
import { TableHeaderProps } from "./TableHeader.types";
import { Blinds, Thermometer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TableHeader = ({ id, name, status, type }: TableHeaderProps) => {
  const icon = type === "BLIND" ? <Blinds /> : <Thermometer />;

  return (
    <AccordionTrigger className="w-full flex justify-between px-5">
      <div className="w-[5%]">{icon}</div>
      <div className="w-[25%]">{name}</div>
      <div className="w-[15%]">
        <Badge variant="outline">{status}</Badge>
      </div>
      <div>{id}</div>
    </AccordionTrigger>
  );
};
