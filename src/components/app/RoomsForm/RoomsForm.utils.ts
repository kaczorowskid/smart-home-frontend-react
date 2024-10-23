import { formFields, FormSchema } from "./RoomsForm.schema";
import { Blind, Room, Thermometer } from "@/api/types/common.types";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.thermometer]: [],
  [formFields.blind]: [],
};

export const initialValues = (
  data: Room | undefined
): FormSchema | undefined => {
  if (!data) {
    return;
  }

  return {
    name: data.name,
    thermometer: [],
    blind: [],
  };
};

export const mapThermometersDataToCheckboxData = (
  thermometer?: Thermometer[]
) => thermometer?.map(({ id, name }) => ({ id, label: name }));

export const mapBlindsDataToCheckboxData = (blind?: Blind[]) =>
  blind?.map(({ id, name }) => ({ id, label: name }));
