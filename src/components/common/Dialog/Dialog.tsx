import {
  Dialog as ShadcnDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogProps } from "./Dialog.types";
import { cn } from "@/lib/utils";

export const Dialog = ({
  title,
  trigger,
  children,
  className,
  ...props
}: DialogProps) => {
  return (
    <ShadcnDialog {...props}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className={cn("rounded-lg", className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </ShadcnDialog>
  );
};
