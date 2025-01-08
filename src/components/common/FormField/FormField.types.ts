import { type Key, type ReactNode } from "react";
import {
  type Control,
  type FieldPath,
  type FieldValues,
  type ControllerRenderProps,
} from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  label: string;
  formItemKey?: Key;
  name: FieldPath<T>;
  description?: string;
  reverseLabel?: boolean;
  control: undefined | Control<T>;
  component: (field: ControllerRenderProps<T>) => ReactNode;
};
