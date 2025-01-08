import { FormattedMessage } from "react-intl";
import { Button } from "@/components/common/Button";
import { AlertDialog } from "@/components/common/AlertDialog";
import { type ControlButtonsProps } from "./ControlButtons.types";

export const ControlButtons = ({
  entity,
  isCreate,
  onCreate,
  onUpdate,
  onDelete,
  isCreatePending,
  isUpdatePending,
  isDeletePending,
  isCreateDisabled,
  isUpdateDisabled,
  isDeleteDisabled,
}: ControlButtonsProps) => {
  const createButtons = (
    <Button
      onClick={onCreate}
      isLoading={isCreatePending}
      disabled={isCreateDisabled}
    >
      <FormattedMessage id="component.create" />
    </Button>
  );

  const updateButtons = (
    <>
      <Button
        onClick={onUpdate}
        isLoading={isUpdatePending}
        disabled={isUpdateDisabled}
      >
        <FormattedMessage id="component.update" />
      </Button>
      <AlertDialog
        onOk={onDelete}
        isLoading={isDeletePending}
        title={<FormattedMessage id="component.are-you-sure" />}
        description={
          <FormattedMessage values={{ entity }} id="component.delete" />
        }
        trigger={
          <Button variant="destructive" disabled={isDeleteDisabled}>
            <FormattedMessage values={{ entity }} id="component.delete" />
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
