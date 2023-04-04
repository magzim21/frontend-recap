import create from "zustand";

const useInputFormStore = create((set) => ({
  words: [],
  addWord: (value) => set((state) => ({ words: state.words.push(value) })),
  removeWord: (value) =>
    set((state) => ({ words: state.words.filter((el) => el === value) })),
}));

export default useInputFormStore;
