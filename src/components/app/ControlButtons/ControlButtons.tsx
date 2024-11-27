import { AlertDialog } from "@/components/common/AlertDialog";
import { Button } from "@/components/common/Button";
import { ControlButtonsProps } from "./ControlButtons.types";
import { FormattedMessage } from "react-intl";

export const ControlButtons = ({
  entity,
  isCreate,
  isCreatePending,
  isUpdatePending,
  isDeletePending,
  onCreate,
  onUpdate,
  onDelete,
}: ControlButtonsProps) => {
  const createButtons = (
    <Button className="mt-5" onClick={onCreate} isLoading={isCreatePending}>
      <FormattedMessage id="component.create" />
    </Button>
  );

  const updateButtons = (
    <>
      <Button onClick={onUpdate} isLoading={isUpdatePending}>
        <FormattedMessage id="component.update" />
      </Button>
      <AlertDialog
        title={<FormattedMessage id="component.are-you-sure" />}
        onOk={onDelete}
        description={
          <FormattedMessage id="component.delete" values={{ entity }} />
        }
        isLoading={isDeletePending}
        trigger={
          <Button variant="destructive">
            <FormattedMessage id="component.delete" values={{ entity }} />
          </Button>
        }
      />
    </>
  );

  return (
    <div className="flex flex-row-reverse pt-5 gap-5">
      {isCreate ? createButtons : updateButtons}
    </div>
  );
};
