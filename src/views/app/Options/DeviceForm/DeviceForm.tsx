import { Dialog } from "@/components/common/Dialog";
import { Select } from "@/components/common/Select";
import { ThermometerForm } from "./ThermometerForm";
import { itemsType } from "./DeviceForm.consts";
import { DeviceFormProps } from "./DeviceForm.types";
import { useState } from "react";
import { FormProvider } from "./FormProvider";
import { BlindForm } from "./BlindForm";
import { Blinds, Thermometer } from "lucide-react";
import { FormTitle } from "@/components/app/FormTitle";
import { useGetOneDevice } from "@/api/hooks/devices.hooks";
import { useIntl } from "react-intl";
import { DeviceType } from "@/types/common.types";

export const DeviceForm = ({ selectedId, open, onClose }: DeviceFormProps) => {
  const { formatMessage } = useIntl();

  const { data } = useGetOneDevice({ id: selectedId });
  const [itemType, setItemType] = useState<DeviceType | undefined>(
    "THERMOMETER"
  );

  const handleClose = () => {
    onClose();
    setItemType("THERMOMETER");
  };

  const getFormTitle = () => {
    switch (data?.type || itemType) {
      case "THERMOMETER":
        return (
          <FormTitle
            title={formatMessage({ id: "view.thermometer" })}
            icon={Thermometer}
          />
        );
      case "BLIND":
        return (
          <FormTitle
            title={formatMessage({ id: "view.blind" })}
            icon={Blinds}
          />
        );
    }
  };

  return (
    <Dialog
      className="w-[90%] lg:w-full"
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
            items={itemsType(formatMessage)}
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
