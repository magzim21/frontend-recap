import React, { useState } from "react";
import styles from "./styles.module.css";
import useInputFormStore from "../../store";

const SavedWord = ({ word }) => {
  const [active, setActive] = useState(false);

  const addActiveWord = useInputFormStore((state) => state.addActiveWord);
  const removeActiveWord = useInputFormStore((state) => state.removeActiveWord);

  function toggle_word() {
    active ? removeActiveWord(word) : addActiveWord(word);
    setActive(!active);
  }

  return (
    <div
      onClick={() => {
        toggle_word();
      }}
      className={`${active ? "btn btn-primary" : "btn btn-outline-primary"}`}
    >
      {word}
    </div>
  );
};

export default SavedWord;
