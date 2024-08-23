import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardWithHeaderProps } from "./CardWithHeader.types";

export const CardWithHeader = ({
  cardClassName,
  contentClassName,
  title,
  description,
  hasSmallHeader,
  icon: Icon,
  extra,
  children,
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
