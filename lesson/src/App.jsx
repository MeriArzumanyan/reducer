import { useReducer } from "react";
import { initialState, reducer } from "./assets/Store/store";
import {
  actionCreatorInput,
  actionCreatorAdd,
  actionCreatormanagingCheckbox,
  actionCreatorRemove,
} from "./assets/Store/store";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <input
        type="text"
        value={state.inputText}
        onChange={(e) => dispatch(actionCreatorInput(e))}
      />
      <button onClick={() => dispatch(actionCreatorAdd())}> add</button>
      {state.todos.map((el) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={el.isDone}
              onChange={() => dispatch(actionCreatormanagingCheckbox(el))}
            />
            <span>{el.title}</span>
            <button onClick={() => dispatch(actionCreatorRemove(el))}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
