import { useState } from "react";
import { Dialog } from "@/components/common/Dialog";
import { Select } from "@/components/common/Select";
import { type DeviceType } from "@/api/types/common.types";
import { type CommonFormProps } from "@/types/common.types";
import { useGetOneDevice } from "@/api/hooks/devices.hooks";
import { BlindForm } from "./BlindForm";
import { FormProvider } from "./FormProvider";
import { itemsType } from "./DeviceForm.consts";
import { ThermometerForm } from "./ThermometerForm";
import { formTitleMapper } from "./DeviceForm.utils";

export const DeviceForm = ({ open, onClose, selectedId }: CommonFormProps) => {
  const { data } = useGetOneDevice({ id: selectedId });
  const [itemType, setItemType] = useState<DeviceType>("THERMOMETER");

  const handleClose = () => {
    onClose();
    setItemType("THERMOMETER");
  };

  return (
    <Dialog
      open={open || !!selectedId}
      className="w-[90%] lg:w-full"
      title={formTitleMapper[data?.type || itemType]}
      onOpenChange={(status) => {
        if (!status) {
          handleClose();
        }
      }}
    >
      {!selectedId && (
        <div className="my-5">
          <Select
            value={itemType}
            items={itemsType}
            onValueChange={(value: DeviceType) => setItemType(value)}
          />
        </div>
      )}

      <FormProvider
        data={data}
        selectedType={itemType}
        blindForm={(record) => (
          <BlindForm
            name={record?.name}
            onClose={handleClose}
            selectedId={selectedId}
            deviceId={record?.deviceId}
          />
        )}
        thermometerForm={(record) => (
          <ThermometerForm
            name={record?.name}
            onClose={handleClose}
            selectedId={selectedId}
            deviceId={record?.deviceId}
          />
        )}
      />
    </Dialog>
  );
};
