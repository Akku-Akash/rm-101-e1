import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({item,handle_del,handle_sub}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onClick={()=>{
        handle_sub(item.text)
      }} />
      <div data-testid="task-text">{item.text}</div>
      {/* Counter here */}
      <Counter value ={item.count}/>
      <button data-testid="task-remove-button" onClick={(e)=>{
        handle_del(item.text)
      }}>remove</button>
    </li>
  );
};

export default Task;
