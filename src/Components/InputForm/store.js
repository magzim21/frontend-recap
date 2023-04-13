import create from  "zustand";

// ask // ask whether `this` and `set` are interchangeable here.
const useInputFormStore = create((set) => ({
  // activeWords: [],
  words: [
    {id: "dismantling", active: false},
    {id: "docile", active: false},
    {id: "summon", active: false},
    {id: "tweak", active: false},
    {id: "disguise", active: false},
    {id: "its no wonder that", active: false},
    {id: "streak", active: false},
    {id: "severe jeopardy", active: false},
    {id: "federal bailout", active: false},
    {id: "flimsy", active: false},
    {id: "adulturated", active: false},
    {id: "bonanza", active: false},
    {id: "Do I have to furlough my workers?", active: false},
    {id: "blasphemy", active: false},
    {id: "cleave", active: false},
    {id: "debunk", active: false},
    {id: "incerator", active: false},
    {id: "dense buildings", active: false},
    {id: "pitfall", active: false},
    {id: "friendly nudge", active: false},
    {id: "pube", active: false},
    {id: "mfa fatigue", active: false},
    {id: "hustle", active: false}
  ],
  toggleActiveWord: (word) =>
    set((state) => {
      console.log("toggling", word)
      const updatedWords = state.words.map((w) => {
        if (w.id === word.id) {
          return { ...w, active: !w.active };
        } else {
          return w;
        }
      });
      return { words: updatedWords };
    }),
  removeActiveWords: () =>
    set((state) => ({
      words: state.words.filter((w) => w.active === false),
    })),
  addWord: (word) =>
    set((state) => ({
      words:
        state.words.includes(word) || word.length === 0
          ? state.words
          : [...state.words, word],
    })),
  addWords: (words) =>
    set((state) => ({
      words: [...state.words, words],
    })),
  // ask // what would be `this` inside this object literal
  // removeWord: (word) =>
  //   set((state) => {
  //    console.log({id: "debug"});
  //     return { words: state.words.filter((w) => w !== word) }
  //   }),
}));

export default useInputFormStore;
