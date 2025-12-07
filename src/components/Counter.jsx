import React, { useReducer } from "react";
import { initialState, reducer } from "../hooks/useCounter";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <h1>Count is ::{state.count}</h1>
      <div className="flex gap-4">
        <button onClick={()=>dispatch({ type: "increment" })}>Increase</button>
        <button onClick={()=>dispatch({ type: "decrement" })}>Decrease</button>
        <button onClick={()=>dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

