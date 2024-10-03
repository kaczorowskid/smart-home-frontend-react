import { AlertDialog } from "@/components/common/AlertDialog";
import { Button } from "@/components/common/Button";
import { ControlButtonsProps } from "./ControlButtons.types";

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
      {`Create ${entity}`}
    </Button>
  );

  const updateButtons = (
    <>
      <Button onClick={onUpdate} isLoading={isUpdatePending}>
        {`Update ${entity}`}
      </Button>
      <AlertDialog
        title="Are you sure?"
        onOk={onDelete}
        description={`Delete ${entity}`}
        trigger={
          <Button variant="destructive" isLoading={isDeletePending}>
            {`Delete ${entity}`}
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
