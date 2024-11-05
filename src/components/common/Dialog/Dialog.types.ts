import { Dialog } from "@/components/ui/dialog";
import { ComponentProps, ReactNode } from "react";

export type DialogProps = {
  title: ReactNode;
  trigger?: ReactNode;
  children: ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
} & ComponentProps<typeof Dialog>;
