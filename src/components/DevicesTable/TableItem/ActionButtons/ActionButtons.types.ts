export type ActionButtonsProps = {
  isLocked: boolean;
  isLoading: boolean;
  isDeleting: boolean;
  isDashboardPart: boolean;
  isExistingRecord: boolean;
  handleSave: () => void;
  handleDelete: () => void;
  handleSetEditMode: () => void;
  handleResetEditMode: () => void;
};
