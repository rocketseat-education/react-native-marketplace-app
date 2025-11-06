import { create } from 'zustand'

export interface FilterState {
  valueMin: number | null
  valueMax: number | null
  selectedCategories: number[]
  searchText: string
}

interface FilterStore {
  appliedFilterState: FilterState
  updateFilter: (props: {
    key: keyof FilterState
    value: string | number | number[]
  }) => void
  resetFilter: () => void
}

const defaultFilterValues = {
  searchText: '',
  selectedCategories: [],
  valueMin: null,
  valueMax: null,
}

export const useFilterStore = create<FilterStore>((set) => ({
  appliedFilterState: defaultFilterValues,
  updateFilter: ({ key, value }) => {
    set((state) => ({
      appliedFilterState: {
        ...state.appliedFilterState,
        [key]: value,
      },
    }))
  },
  resetFilter: () => {
    set({ appliedFilterState: defaultFilterValues })
  },
}))
