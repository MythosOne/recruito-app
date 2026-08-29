export type FiltersState = {
  search: string;
  position: string;
  status: string;
};

export const initialFiltersState: FiltersState = {
  search: '',
  position: '',
  status: ''
};