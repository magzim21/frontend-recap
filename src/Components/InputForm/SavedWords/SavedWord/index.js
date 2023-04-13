import React, { useState } from "react";
// import styles from "./styles.module.css";
import useInputFormStore from "../../store";

const SavedWord = ({ word }) => {
  // ask // why this does not work?
  // const { word, className } = props;
  const toggleActiveWord = useInputFormStore((state) => state.toggleActiveWord);

  function toggle_word() {
    word.active = word.active ? false : true;
    // setActive(!active);
  }

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
