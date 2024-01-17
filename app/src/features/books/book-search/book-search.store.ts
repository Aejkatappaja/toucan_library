import { create } from 'zustand';

export type State = {
  search: string;
};

export type Action = {
  setSearch: (search: string) => void;
};

export const initialState: State = {
  search: '',
};

export const useBookSearchStore = create<State & Action>((set) => ({
  ...initialState,

  setSearch: (newSearch: string) =>
    set((prev) => ({ ...prev, search: newSearch })),
}));
