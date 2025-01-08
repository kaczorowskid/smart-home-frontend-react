export type SelectedItemsProps = {
  label: string;
  items?: Items[];
  selectedIds: string[];
  noSelectedItemsText: string;
};

type Items = {
  id: string;
  label: string;
};
