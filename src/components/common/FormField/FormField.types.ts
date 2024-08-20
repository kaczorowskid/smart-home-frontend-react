import { ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  control: Control<T> | undefined;
  name: FieldPath<T>;
  label: string;
  description?: string;
  component: (field: ControllerRenderProps<T>) => ReactNode;
};
