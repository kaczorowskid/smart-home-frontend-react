import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { type CardWithHeaderProps } from "./CardWithHeader.types";

export const CardWithHeader = ({
  title,
  extra,
  children,
  icon: Icon,
  description,
  cardClassName,
  hasSmallHeader,
  contentClassName,
}: CardWithHeaderProps) => {
  const cardTitleClassName = hasSmallHeader ? "text-sm" : "text-2xl";

  return (
    <Card className={cardClassName}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className={cardTitleClassName}>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {extra ? (
          extra
        ) : (
          <>{Icon && <Icon className="text-muted-foreground" />}</>
        )}
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
};
