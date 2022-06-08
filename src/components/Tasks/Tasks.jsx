import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
const Tasks = ({data,handle_del,handle_sub}) => {
    //console.log("formdata",data) 
    
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        
      {data.map((e) => (
          <Task
            item={e}
            key={e.id}
            handle_del = {handle_del}
            handle_sub = {handle_sub} 
          />
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
