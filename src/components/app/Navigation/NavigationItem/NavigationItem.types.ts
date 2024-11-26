import { IconProps } from "@/components/common/Icon/Icon.types";
import { ReactNode } from "react";

type NavigationItem = {
  title: ReactNode;
  icon: IconProps["name"];
  path: string;
};

export type NavigationItemProps = {
  items: NavigationItem;
  onClick: () => void;
};
