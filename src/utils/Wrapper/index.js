import React, { useEffect } from "react";
import useStoryStore from "../../Components/SavedStories/store";
import useInputFormStore from "../../Components/InputForm/store";
import NewStoryLib from './lib'


const Wrapper = ({ children }) => {

  const addNewStories = useStoryStore((state) => {
    return state.addNewStories;
  });
  const saveWords = useInputFormStore((state) => { return state.addWords });

  useEffect(() => {
    console.log(NewStoryLib.get_words())
  },[])

  useEffect(() => {
    /*Внутри тела функции напиши код для запроса и обработки API, который после запроса будет сохранять все в состояние*/
    (async () => {
      // api request 1
      // api request 2
      // save resiult of requst 1 to the global state
      // save resiult of requst 2 to the global state
    })(); // анонимная самовызывающаяся функция  //  immediately invoked function expression (IIFE)
  }, []);

  return <div>{children}</div>;
};

export default Wrapper;
