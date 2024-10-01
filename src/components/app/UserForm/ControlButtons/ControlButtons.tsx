import { AlertDialog } from "@/components/common/AlertDialog";
import { Button } from "@/components/common/Button";
import { ControlButtonsProps } from "./ControlButons.types";

export const ControlButtons = ({
  email,
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
      Create User
    </Button>
  );

  const updateButtons = (
    <>
      <Button onClick={onUpdate} isLoading={isUpdatePending}>
        Update user
      </Button>
      <AlertDialog
        title="Are you sure?"
        onOk={onDelete}
        description={`Delete user ${email}`}
        trigger={
          <Button variant="destructive" isLoading={isDeletePending}>
            Delete user
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
