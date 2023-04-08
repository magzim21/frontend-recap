import create from "zustand";

const useInputFormStore = create((set) => ({
  activeWords: [],
  words: [
    "dismantling",
    "docile",
    "summon",
    "tweak",
    "disguise",
    "its no wonder that",
    "streak",
    "severe jeopardy",
    "federal bailout",
    "flimsy",
    "adulturated",
    "bonanza",
    "Do I have to furlough my workers?",
    "blasphemy",
    "cleave",
    "debunk",
    "incerator",
    "dense buildings",
    "pitfall",
    "friendly nudge",
    "pube",
    "mfa fatigue",
  ],
  addActiveWord: (word) =>
    set((state) => ({ activeWords: [...state.activeWords, word] })),
  removeActiveWord: (word) =>
    set((state) => ({
      activeWords: state.activeWords.filter((w) => w !== word),
    })),
  addWord: (word) =>
    set((state) => ({
      words:
        state.words.includes(word) && word.length === 0
          ? state.words
          : [...state.words, word],
    })),
  removeWord: (word) =>
    set((state) => ({ words: state.words.filter((w) => w !== word) })),
}));

export default useInputFormStore;
