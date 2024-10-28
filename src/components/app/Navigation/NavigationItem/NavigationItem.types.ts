import { IconProps } from "@/components/common/Icon/Icon.types";

type NavigationItem = {
  title: string;
  icon: IconProps["name"];
  path: string;
};

export type NavigationItemProps = {
  items: NavigationItem;
};
