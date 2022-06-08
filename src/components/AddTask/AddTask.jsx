import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({setFormdata,data}) => {
 // console.log("setform", setFormdata)
 const init = {
   id : Date.now(),
   text : "",
   done : false,
   count : 1
 }
 const [state, setState] = useState(init)

const handlechange=(e)=>{
   const {name,value} = e.target
   setState({...state,[name]: value})
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" placeholder="Add task.." name = "text" onChange={(e)=>{
        handlechange(e)
      }}/>
      <button data-testid="add-task-button" 
       onClick={(e)=>{                                                                                                                
         setFormdata([...data,state])
       }}
      >+</button>
    </div>
  );
};

export default AddTask;
