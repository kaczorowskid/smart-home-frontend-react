import { Dialog } from "@/components/common/Dialog";
import { Select } from "@/components/common/Select";
import { ThermometerForm } from "./ThermometerForm";
import { itemsType } from "./DeviceForm.consts";
import { useState } from "react";
import { FormProvider } from "./FormProvider";
import { BlindForm } from "./BlindForm";
import { useGetOneDevice } from "@/api/hooks/devices.hooks";
import { CommonFormProps } from "@/types/common.types";
import { formTitleMapper } from "./DeviceForm.utils";
import { DeviceType } from "@/api/types/common.types";

export const DeviceForm = ({ selectedId, open, onClose }: CommonFormProps) => {
  const { data } = useGetOneDevice({ id: selectedId });
  const [itemType, setItemType] = useState<DeviceType>("THERMOMETER");

  const handleClose = () => {
    onClose();
    setItemType("THERMOMETER");
  };

  return (
    <Dialog
      className="w-[90%] lg:w-full"
      title={formTitleMapper[data?.type || itemType]}
      open={open || !!selectedId}
      onOpenChange={(status) => {
        if (!status) {
          handleClose();
        }
      }}
    >
      {!selectedId && (
        <div className="my-5">
          <Select
            items={itemsType}
            value={itemType}
            onValueChange={(value: DeviceType) => setItemType(value)}
          />
        </div>
      )}

      <FormProvider
        data={data}
        selectedType={itemType}
        thermometerForm={(record) => (
          <ThermometerForm
            deviceId={record?.deviceId}
            name={record?.name}
            selectedId={selectedId}
            onClose={handleClose}
          />
        )}
        blindForm={(record) => (
          <BlindForm
            deviceId={record?.deviceId}
            name={record?.name}
            selectedId={selectedId}
            onClose={handleClose}
          />
        )}
      />
    </Dialog>
  );
};
