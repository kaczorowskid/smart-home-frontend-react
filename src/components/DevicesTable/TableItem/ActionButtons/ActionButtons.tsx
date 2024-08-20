import { Button } from "@/components/common/Button/Button";
import { ActionButtonsProps } from "./ActionButtons.types";

export const ActionButtons = ({
  isEditMode,
  isLoading,
  isDashboardPart,
  handleSave,
  handleSetEditMode,
  handleResetEditMode,
}: ActionButtonsProps) => (
  <>
    {isDashboardPart ? null : (
      <div className="flex flex-row-reverse pt-3">
        {!isEditMode ? (
          <Button onClick={handleSetEditMode} variant="outline">
            Edit
          </Button>
        ) : (
          <div className="flex gap-5">
            <Button variant="outline" onClick={handleResetEditMode}>
              Cancel
            </Button>
            <Button isLoading={isLoading} onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      </div>
    )}
  </>
);
