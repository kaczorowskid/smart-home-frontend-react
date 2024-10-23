type Items = {
  id: string;
  label: string;
};

export type SelectedItemsProps = {
  label: string;
  noSelectedItemsText: string;
  selectedIds: string[];
  items?: Items[];
};
