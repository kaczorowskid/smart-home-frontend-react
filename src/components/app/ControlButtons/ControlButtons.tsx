import { AlertDialog } from "@/components/common/AlertDialog";
import { Button } from "@/components/common/Button";
import { ControlButtonsProps } from "./ControlButtons.types";
import { FormattedMessage, useIntl } from "react-intl";

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
  const intl = useIntl();

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
        title={intl.formatMessage({ id: "component.are-you-sure" })}
        onOk={onDelete}
        description={`${intl.formatMessage({
          id: "component.delete",
        })} ${entity}`}
        isLoading={isDeletePending}
        trigger={
          <Button variant="destructive">
            <FormattedMessage id="component.delete" />
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
