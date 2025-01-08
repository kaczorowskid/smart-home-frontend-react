import { type Dialog } from "@/components/ui/dialog";
import { type ReactNode, type ComponentProps } from "react";

export type DialogProps = ComponentProps<typeof Dialog> & {
  title: ReactNode;
  trigger?: ReactNode;
  children: ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};
