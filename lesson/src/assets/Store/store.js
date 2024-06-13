const managingInput = "managingInput";
const add = "add";
const remove = "remove";
const managingCheckbox = "managingCheckbox";

export const initialState = {
  inputText: "",
  todos: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case managingInput:
      return {
        ...state,
        inputText: action.payload,
      };
    case add:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: state.inputText, isDone: false },
        ],
      };

    case remove:
      return {
        ...state,
        todos: state.todos.filter((el) => {
          return el.id !== action.payload.id;
        }),
      };
    case managingCheckbox:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              isDone: !el.isDone,
            };
          } else return el;
        }),
      };
    default:
      return state;
  }
};
export function actionCreatorInput(e) {
  return {
    type: managingInput,
    payload: e.target.value,
  };
}
export function actionCreatorAdd() {
  return { type: add };
}
export function actionCreatormanagingCheckbox(el) {
  return { type: managingCheckbox, payload: el };
}
export function actionCreatorRemove(el) {
  return { type: remove, payload: el };
}
