import { Button } from "@/components/common/Button/Button";
import { ActionButtonsProps } from "./ActionButtons.types";

export const ActionButtons = ({
  isLocked,
  isLoading,
  isDeleting,
  isDashboardPart,
  isExistingRecord,
  handleSave,
  handleDelete,
  handleSetEditMode,
  handleResetEditMode,
}: ActionButtonsProps) => (
  <>
    {isDashboardPart ? null : (
      <div className="flex flex-row-reverse pt-3">
        {isLocked ? (
          <Button onClick={handleSetEditMode} variant="outline">
            Unlock
          </Button>
        ) : (
          <div className="flex gap-5">
            <Button variant="outline" onClick={handleResetEditMode}>
              Cancel
            </Button>
            {isExistingRecord && (
              <Button
                variant="destructive"
                isLoading={isDeleting}
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
            <Button isLoading={isLoading} onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      </div>
    )}
  </>
);
