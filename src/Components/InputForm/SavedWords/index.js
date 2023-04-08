import React from "react";
import SavedWord from "./SavedWord";
import styles from "./style.module.css";
import useInputFormStore from "../store";

const SavedWords = () => {
  const words = useInputFormStore((state) => state.words);

  return (
    <div className={styles.wrapper}>
      {words.map((el) => (
        <SavedWord word={el} />
      ))}
    </div>
  );
};

export default SavedWords;
