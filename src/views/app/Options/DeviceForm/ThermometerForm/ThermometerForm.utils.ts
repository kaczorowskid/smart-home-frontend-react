import {
  CreateDevicePayload,
  UpdateDevicePayload,
} from "@/api/types/devices.types";
import { formFields, FormSchema } from "./ThermometerForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.deviceId]: "",
  [formFields.type]: "THERMOMETER",
};

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateDevicePayload => ({
  ...values,
  type: "THERMOMETER",
});

export const mapValuesToUpdateForm = (
  values: FormSchema,
  selectedId: string
): UpdateDevicePayload => ({
  ...values,
  id: selectedId,
  type: "THERMOMETER",
});
