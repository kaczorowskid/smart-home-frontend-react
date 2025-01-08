import { Card } from "@/components/ui/card";
import { type PageWrapperProps } from "./PageWrapper.types";

export const PageWrapper = ({
  title,
  extra,
  children,
  icon: Icon,
}: PageWrapperProps) => {
  return (
    <>
      <Card className="h-[100px] mb-5 flex justify-between items-center text-2xl font-medium px-5">
        <div className="flex place-items-center">
          <Icon />
          <span className="pl-2">{title}</span>
        </div>
        {extra}
      </Card>
      {children}
    </>
  );
};
