import React, { useState } from "react";
import useInputFormStore from "../store";

const NewWordForm = () => {
  const addWord = useInputFormStore((state) => state.addWord);
  const removeWord = useInputFormStore((state) => state.removeWord);

  const [word, setWord] = useState('');

  return (
    <div className="mt-4">
      <div class="input-group mb-3">
        <button class="btn btn-outline-success" type="button" onClick={() => {
          addWord(word)
          setWord('')
        }}>
          Add
        </button>
        <button class="btn btn-outline-danger" type="button" onClick={() => {
          removeWord(word)
          setWord('')
        }}>
          Remove
        </button>
        <input
          type="text"
          class="form-control"
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
