import { type Sheet } from "@/components/ui/sheet";
import { type ReactNode, type ComponentProps } from "react";

export type SheetProps = ComponentProps<typeof Sheet> & {
  title: string;
  children: ReactNode;
  triggerComponent: JSX.Element;
};
