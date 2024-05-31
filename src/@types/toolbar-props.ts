export interface ExpenseListToolbarProps {
  toggleSortOrder: () => void;
  onAddList: (name: string) => void;
}

export interface TabProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}
