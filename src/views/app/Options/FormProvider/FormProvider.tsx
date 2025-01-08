import { type FormProviderProps } from "./FormProvider.types";

export const FormProvider = ({
  usersForm,
  roomsForm,
  rolesForm,
  selectedTab,
  devicesForm,
}: FormProviderProps) => {
  switch (selectedTab) {
    case "users":
      return usersForm;
    case "rooms":
      return roomsForm;
    case "roles":
      return rolesForm;
    case "devices":
      return devicesForm;
  }
};
