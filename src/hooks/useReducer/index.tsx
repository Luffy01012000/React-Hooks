import { useReducer } from "react";
import type { Reducer } from "react";

interface State {
  count: number;
}

// type Action =
//   | { type: "increment" } // No payload needed
//   | { type: "decrement" };

interface Action {
  type: "increment" | "decrement" | "incrementByAmount"; // Union of valid action types
  payload?: any; // Optional payload
}

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload.data };
    default:
      return state;
  }
};

export default function Index() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>count:{state.count}</p>
      <div>
        <button
          style={{ marginLeft: "20px", marginRight: "20px" }}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          style={{ marginLeft: "20px", marginRight: "20px" }}
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button
          style={{ marginLeft: "20px", marginRight: "20px" }}
          onClick={() =>
            dispatch({ type: "incrementByAmount", payload: { data: 5 } })
          }
        >
          5
        </button>
      </div>
    </div>
  );
}
