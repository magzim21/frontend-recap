import React from "react";
import SavedWord from "./SavedWord";
import styles from "./style.module.css";
import useInputFormStore from "../store";

const SavedWords = () => {

  const words = useInputFormStore((state) => state.words);

  return (
    <div className={styles.wrapper}>
      {words.map((el, index) => (
        <SavedWord
          // ask // why can't we use on click here and how to use it
          // className="btn"
          onClick={() => {console.log('on Click')}}
          key={index}
          word={el}
        />
      ))}
    </div>
  );
};

export default SavedWords;
