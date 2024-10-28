import { FormProviderProps } from "./FormProvider.types";

export const FormProvider = ({
  selectedTab,
  devicesForm,
  usersForm,
  roomsForm,
}: FormProviderProps) => {
  switch (selectedTab) {
    case "devices":
      return devicesForm;
    case "users":
      return usersForm;
    case "rooms":
      return roomsForm;
  }
};
