import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({value}) => {
  const [num, setNum] = useState(0)
  // sample value to be replaced
  let count = value+num;
  const handler = (e)=>{
     setNum(e+num)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={()=>{
        handler(+1)
      }}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>{
        if(count <= 1){
          handler(0)
        }
        else{
          handler(-1)

        }
      }}>-</button>
    </div>
  );
};

export default Counter;
