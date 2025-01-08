import {
  type CreateDevicePayload,
  type UpdateDevicePayload,
} from "@/api/types/devices.types";
import { formFields, type FormSchema } from "./BlindForm.schema";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.deviceId]: "",
  [formFields.type]: "BLIND",
};

export const mapValuesToCreateForm = (
  values: FormSchema
): CreateDevicePayload => ({
  ...values,
  type: "BLIND",
});

export const mapValuesToUpdateForm = (
  values: FormSchema,
  selectedId: string
): UpdateDevicePayload => ({
  ...values,
  type: "BLIND",
  id: selectedId,
});
