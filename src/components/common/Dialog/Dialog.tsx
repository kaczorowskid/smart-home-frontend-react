import { cn } from "@/lib/utils";
import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  Dialog as ShadcnDialog,
} from "@/components/ui/dialog";
import { type DialogProps } from "./Dialog.types";

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
