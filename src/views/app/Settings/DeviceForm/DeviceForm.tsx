import { Dialog } from "@/components/common/Dialog";
import { Select } from "@/components/common/Select";
import { ThermometerForm } from "./ThermometerForm";
import { itemsType, ItemValue } from "./DeviceForm.consts";
import { DeviceFormProps } from "./DeviceForm.types";
import { useState } from "react";
import { FormProvider } from "./FormProvider";
import { BlindForm } from "./BlindForm";
import { Blinds, Thermometer } from "lucide-react";
import { FormTitle } from "../../../../components/app/FormTitle";
import { useGetOneDevice } from "./DeviceForm.hooks";

export const DeviceForm = ({ selectedId, open, onClose }: DeviceFormProps) => {
  const { data } = useGetOneDevice({ id: selectedId });
  const [itemType, setItemType] = useState<ItemValue | undefined>(
    "THERMOMETER"
  );

  const handleClose = () => {
    onClose();
    setItemType("THERMOMETER");
  };

  const getFormTitle = () => {
    switch (data?.type || itemType) {
      case "THERMOMETER":
        return <FormTitle title="Thermometer" icon={Thermometer} />;
      case "BLIND":
        return <FormTitle title="Blind" icon={Blinds} />;
    }
  };

  return (
    <Dialog
      title={getFormTitle()}
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
            onValueChange={(value: ItemValue) => setItemType(value)}
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
