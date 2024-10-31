import { formFields, FormSchema } from "./RoomsForm.schema";
import { Blind, Room, Thermometer } from "@/api/types/common.types";

export const defaultValues: FormSchema = {
  [formFields.name]: "",
  [formFields.image]: "",
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
    image: data.image,
    thermometer:
      data.thermometers?.map(({ thermometerId }) => thermometerId) || [],
    blind: data.blinds?.map(({ blindId }) => blindId) || [],
  };
};

export const mapThermometersDataToCheckboxData = (
  thermometer?: Thermometer[]
) => thermometer?.map(({ id, name }) => ({ id, label: name }));

export const mapBlindsDataToCheckboxData = (blind?: Blind[]) =>
  blind?.map(({ id, name }) => ({ id, label: name }));
