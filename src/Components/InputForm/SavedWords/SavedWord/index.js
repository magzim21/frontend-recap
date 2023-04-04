import React, { useState } from "react";

const SavedWord = ({ word }) => {
  const [active, setActive] = useState(false);

  function toggle_word(){
    //Проверяем и заносим слово в стейт-менеджер
    setActive(!active)
  }

  return (
    <div
      onClick={() => {
        toggle_word()
      }}
      className={`${active ? "btn btn-primary" : "btn btn-outline-primary"}`}
    >
      {word}
    </div>
  );
};

export default SavedWord;
