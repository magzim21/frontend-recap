import React from "react";
import Story from "../Story";
import styles from "./styles.module.css";
import useStoryStore from "./store";

const SavedStories = () => {

  const stories = useStoryStore((state) => {return state.stories})

  /*Достань из stor-a все сохраненные истории. Если историй нет, выведи простой текст, скажем "истории еще нет, придумай ее"*/
  return (
    <div className={styles.wrapper}>
      {stories.map((el) => {
        return <Story text={el} />;
      })}
    </div>
  );
};

export default SavedStories;