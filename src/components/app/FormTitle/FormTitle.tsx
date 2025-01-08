import { type FormTitleProps } from "./FormTitle.types";

export const FormTitle = ({ title, icon: Icon }: FormTitleProps) => (
  <div className="flex items-center gap-4">
    <Icon />
    <span>{title}</span>
  </div>
);
