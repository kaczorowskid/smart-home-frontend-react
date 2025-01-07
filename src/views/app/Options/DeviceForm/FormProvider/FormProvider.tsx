import {
  Blind,
  CommonDevice,
  DeviceType,
  Thermometer,
} from "@/api/types/common.types";
import { FormProviderProps } from "./FormProvider.types";
import { ReactNode } from "react";

export const FormProvider = ({
  data,
  selectedType,
  thermometerForm,
  blindForm,
}: FormProviderProps) => {
  const getForm = (
    selectedType: DeviceType,
    data: CommonDevice | undefined
  ) => {
    const formMapper: Record<DeviceType, ReactNode> = {
      BLIND: blindForm(data as Blind | undefined),
      THERMOMETER: thermometerForm(data as Thermometer | undefined),
    };

    return formMapper[selectedType];
  };

  const getCreateForm = () => getForm(selectedType, undefined);

  const getUpdateForm = () => getForm(selectedType, data);

  return data ? getUpdateForm() : getCreateForm();
};
