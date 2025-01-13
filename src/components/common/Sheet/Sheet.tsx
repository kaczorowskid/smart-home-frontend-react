import {
  SheetTitle,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  Sheet as ShadcnSheet,
} from "@/components/ui/sheet";
import { type SheetProps } from "./Sheet.types";

export const Sheet = ({
  title,
  children,
  triggerComponent,
  ...props
}: SheetProps) => (
  <ShadcnSheet {...props}>
    <SheetTrigger>{triggerComponent}</SheetTrigger>
    <SheetContent className="w-full">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      {children}
    </SheetContent>
  </ShadcnSheet>
);
