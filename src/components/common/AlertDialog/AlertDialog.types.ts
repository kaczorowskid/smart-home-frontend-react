import { type ReactNode, type ComponentProps } from "react";
import { type AlertDialog } from "@/components/ui/alert-dialog";

export type AlertDialogProps = ComponentProps<typeof AlertDialog> & {
  title: ReactNode;
  onOk: () => void;
  trigger?: ReactNode;
  isLoading?: boolean;
  description: ReactNode;
};
