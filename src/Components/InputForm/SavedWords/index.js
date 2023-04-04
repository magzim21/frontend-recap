import React from "react";
import SavedWord from "./SavedWord";
import styles from './style.module.css'

const SavedWords = () => {
  function saved_words() {
    return [
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
    ];
  }

  return (
    <div className={styles.wrapper}>
      {saved_words().map((el) => (
        <SavedWord word={el} />
      ))}
    </div>
  );
};

export default SavedWords;
