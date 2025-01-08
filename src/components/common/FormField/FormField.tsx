import { type FieldValues } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  FormField as ShadcnFormField,
} from "@/components/ui/form";
import { type FormFieldProps } from "./FormField.types";

export const FormField = <T extends FieldValues>({
  name,
  label,
  control,
  component,
  formItemKey,
  description,
  reverseLabel,
}: FormFieldProps<T>) => {
  return (
    <ShadcnFormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem key={formItemKey}>
          {reverseLabel ? (
            <>
              <FormControl>{component(field)}</FormControl>
              <FormLabel>{label}</FormLabel>
            </>
          ) : (
            <>
              <FormLabel className="block text-start pt-2">{label}</FormLabel>
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
