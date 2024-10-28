import { useState } from "react";
import { Views } from "./Settings.types";

type OpenState = Record<Views, boolean>;
type IdState = Record<Views, string>;

const isOpenInitalValue: OpenState = {
  devices: false,
  users: false,
  rooms: false,
};

const selectedIdInitialValue: IdState = {
  devices: "",
  users: "",
  rooms: "",
};

export const useFormSelector = (selectedTab: Views) => {
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
