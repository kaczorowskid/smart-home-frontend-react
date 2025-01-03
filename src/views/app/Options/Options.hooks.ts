import { useState } from "react";
import { OptionsTab } from "./Options.types";

type OpenState = Record<OptionsTab, boolean>;
type IdState = Record<OptionsTab, string>;

const isOpenInitalValue: OpenState = {
  devices: false,
  users: false,
  rooms: false,
  roles: false,
};

const selectedIdInitialValue: IdState = {
  devices: "",
  users: "",
  rooms: "",
  roles: "",
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
    isOpen: isOpen[selectedTab],
    selectedId: selectedId[selectedTab],
    handleSelectedId,
    handleOpen,
    handleClose,
  };
};
