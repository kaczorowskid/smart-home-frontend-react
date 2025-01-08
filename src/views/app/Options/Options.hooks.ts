import { useState } from "react";
import { type OptionsTab } from "./Options.types";

type IdState = Record<OptionsTab, string>;
type OpenState = Record<OptionsTab, boolean>;

const isOpenInitalValue: OpenState = {
  users: false,
  rooms: false,
  roles: false,
  devices: false,
};

const selectedIdInitialValue: IdState = {
  users: "",
  rooms: "",
  roles: "",
  devices: "",
};

export const useFormSelector = (selectedTab: OptionsTab) => {
  const [isOpen, setIsOpen] = useState<OpenState>(isOpenInitalValue);
  const [selectedId, setSelectedId] = useState<IdState>(selectedIdInitialValue);

  const handleSelectedId = (id: string) => {
    setSelectedId((prevState) => ({
      ...prevState,
      [selectedTab]: id,
    }));
  };

  const handleOpen = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      [selectedTab]: true,
    }));
  };

  const handleClose = () => {
    setIsOpen(isOpenInitalValue);
    setSelectedId(selectedIdInitialValue);
  };

  return {
    handleOpen,
    handleClose,
    handleSelectedId,
    isOpen: isOpen[selectedTab],
    selectedId: selectedId[selectedTab],
  };
};
