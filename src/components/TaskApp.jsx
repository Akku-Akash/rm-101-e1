import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import data from "../data/tasks.json"
import Tasks from "./Tasks/Tasks";
import AddTask from "./AddTask/AddTask";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [formdata, setFormdata] = useState([...data])

  const  handle_del = (id)=>{
    setFormdata(formdata.filter((e)=>e.text !== id))
  }
  const handle_sub = (id)=>{
      setFormdata(formdata.map((e)=>(e.text === id ? {...e, done : !e.done}: e)))
  }

  //console.log("hello", formdata)
  
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader formdata={formdata}  />
      {/* Add Task */}
      {/* Tasks */}
      <AddTask setFormdata = {setFormdata} data = {formdata}/>
      <Tasks data = {formdata} handle_del ={handle_del} handle_sub = {handle_sub}/>
    </div>
  );
};

export default TaskApp;
