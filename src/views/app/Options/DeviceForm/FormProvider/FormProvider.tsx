import { type ReactNode } from "react";
import {
  type Blind,
  type DeviceType,
  type Thermometer,
  type CommonDevice,
} from "@/api/types/common.types";
import { type FormProviderProps } from "./FormProvider.types";

export const FormProvider = ({
  data,
  blindForm,
  selectedType,
  thermometerForm,
}: FormProviderProps) => {
  const getForm = (
    selectedType: DeviceType,
    data: undefined | CommonDevice
  ) => {
    const formMapper: Record<DeviceType, ReactNode> = {
      BLIND: blindForm(data as Blind | undefined),
      THERMOMETER: thermometerForm(data as undefined | Thermometer),
    };

    return formMapper[selectedType];
  };

  const getCreateForm = () => getForm(selectedType, undefined);

  const getUpdateForm = () => getForm(selectedType, data);

  return data ? getUpdateForm() : getCreateForm();
};
