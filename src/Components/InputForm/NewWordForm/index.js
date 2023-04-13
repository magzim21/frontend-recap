import React, { useState } from "react";
import useInputFormStore from "../store";

const NewWordForm = () => {
  const addWord = useInputFormStore((state) => state.addWord);
  const removeActiveWords = useInputFormStore((state) => state.removeActiveWords);

  const [word, setWord] = useState('');

  return (
    <div className="mt-4">
      <button
        className="btn btn-outline-danger"
        type="button"
        onClick={() => {
          removeActiveWords();
          console.log(word);
          setWord("");
        }}
      >
        Remove
      </button>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={() => {
            addWord(word);
            setWord("");
          }}
        >
          Add
        </button>
        <input
          type="text"
          className="form-control"
          placeholder=""
          value={word}
          aria-label="Example text with two button addons"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default NewWordForm;
