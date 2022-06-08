import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({formdata}) => {
  // sample values to be replaced
  
  let totalTask = formdata.length;
  let unCompletedTask = formdata.filter((e) => e.done === true).length;

  
  

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">of {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
