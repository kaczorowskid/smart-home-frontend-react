import { FormProviderProps } from "./FormProvider.types";

export const FormProvider = ({
  data,
  selectedType,
  thermometerForm,
  blindForm,
}: FormProviderProps) => {
  const getCreateForm = () => {
    if (selectedType === "THERMOMETER") {
      return thermometerForm(undefined);
    } else if (selectedType === "BLIND") {
      return blindForm(undefined);
    }
  };

  const getUpdateForm = () => {
    if (data?.type === "THERMOMETER") {
      return thermometerForm(data);
    } else if (data?.type === "BLIND") {
      return blindForm(data);
    }
  };

  return !!data ? getUpdateForm() : getCreateForm();
};
