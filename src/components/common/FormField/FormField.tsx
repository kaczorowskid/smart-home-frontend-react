import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as ShadcnFormField,
} from "@/components/ui/form";
import { FormFieldProps } from "./FormField.types";
import { FieldValues } from "react-hook-form";

export const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  component,
}: FormFieldProps<T>) => {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem key={field.value}>
          <FormLabel>{label}</FormLabel>
          <FormControl>{component(field)}</FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
