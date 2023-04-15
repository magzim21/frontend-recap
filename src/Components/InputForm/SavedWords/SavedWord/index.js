import React, { useState } from "react";
// import styles from "./styles.module.css";
import useInputFormStore from "../../store";

const SavedWord = ({ word }) => {

  const toggleActiveWord = useInputFormStore((state) => state.toggleActiveWord);

  return (
    <div
      onClick={() => {
        console.log("click");
        toggleActiveWord(word);
      }}
      className={`${word.active ? "btn btn-primary" : "btn btn-outline-primary"}`}

    >
      {word.id}
    </div>
  );
};

export default SavedWord;
