import { useState, useReducer } from "react";
import Content from "./Content";

//useState
//1. Init state: 0
//2. Action: Up (State + 1), Down(State - 1)

//useReducer
//1. Init state: 0
//2. Action: Up (State + 1), Down(State - 1)
//3. Reducer
//4. Dispatch

//Init state
const initState = 0;

//Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

//Reducer
const reducer = (state, action) => {
  console.log('reducer run');
  switch(action){
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
}



function App() {
  //Dispatch
  //Nguyen li hoat dong cua useReducer: 
  
  const [count, dispatch] = useReducer(reducer, initState);

  return (
      <div style={{ padding: '10px 32px' }}>
        <h1>{count}</h1>
        <button
        onClick={() => dispatch(DOWN_ACTION)}
        >
          Down
        </button>

        <button
        onClick={() => dispatch(UP_ACTION)}
        >
          Up
        </button>

      </div>
  )
}

export default App;
