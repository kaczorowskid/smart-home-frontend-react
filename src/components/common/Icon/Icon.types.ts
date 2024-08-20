import { icons, LucideProps } from "lucide-react";

export type IconProps = {
  name: keyof typeof icons;
} & LucideProps;
