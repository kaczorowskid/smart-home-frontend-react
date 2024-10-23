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
  formItemKey,
  control,
  name,
  label,
  description,
  reverseLabel,
  component,
}: FormFieldProps<T>) => {
  return (
    <ShadcnFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem key={formItemKey}>
          {reverseLabel ? (
            <>
              <FormControl>{component(field)}</FormControl>
              <FormLabel>{label}</FormLabel>
            </>
          ) : (
            <>
              <FormLabel>{label}</FormLabel>
              <FormControl>{component(field)}</FormControl>
            </>
          )}
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
