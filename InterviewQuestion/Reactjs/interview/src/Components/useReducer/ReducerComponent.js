import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        count: state.count ? state.count - 1 : 0,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  name: "Mozammil",
  count: 0,
  fullName: "Mozammil Raja",
};

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h>ReducerComponent</h>
      <p>{state.count}</p>
      <p>
        <strong>Name:</strong> {state.name}
      </p>
      <p>
        <strong>Full Name:</strong> {state.fullName}
      </p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default ReducerComponent;
