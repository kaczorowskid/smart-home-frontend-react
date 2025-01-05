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
  isCreateDisabled,
  isUpdateDisabled,
  isDeleteDisabled,
  onCreate,
  onUpdate,
  onDelete,
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
        title={<FormattedMessage id="component.are-you-sure" />}
        onOk={onDelete}
        description={
          <FormattedMessage id="component.delete" values={{ entity }} />
        }
        isLoading={isDeletePending}
        trigger={
          <Button variant="destructive" disabled={isDeleteDisabled}>
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
