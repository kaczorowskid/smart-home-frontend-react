import { Key, ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  formItemKey?: Key;
  control: Control<T> | undefined;
  name: FieldPath<T>;
  label: string;
  description?: string;
  reverseLabel?: boolean;
  component: (field: ControllerRenderProps<T>) => ReactNode;
};
