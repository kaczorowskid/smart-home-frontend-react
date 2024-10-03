export type ControlButtonsProps = {
  entity: string;
  isCreate: boolean;
  onCreate: () => void;
  onUpdate: () => void;
  onDelete: () => void;
  isCreatePending: boolean;
  isUpdatePending: boolean;
  isDeletePending: boolean;
};
