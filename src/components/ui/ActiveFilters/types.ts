export type ActiveFilterButton = {
  id: string;
  type: 'type' | 'gender' | 'skill' | 'city';
  label: string; 
}

export type ActiveFilterProps = {
  filters: ActiveFilterButton[];
  onRemoveTag: (filter: ActiveFilterButton) => void;
}