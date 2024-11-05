import { SortModel } from 'src/common/types';
import { create } from 'zustand';

interface IFiltersStore {
  sorting: SortModel | null;
  setSorting: (sortModel: SortModel | null) => void;
}

export const useFiltersStore = create<IFiltersStore>((set) => (
  {
    sorting: null,
    setSorting: (sortModel) => set(() => ({ sorting: sortModel })),
  }
));