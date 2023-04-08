import { create } from "zustand";


const useStoryStore = create((set) => ({
    stories: [],
    /*Дополни ниже функцию для того, чтобы сохранять новую историю в наше текущее состояние*/
    addNewStory: (story) => set((state) => ({}))
}))

export default useStoryStore