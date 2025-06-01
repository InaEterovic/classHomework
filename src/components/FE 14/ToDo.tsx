import { useReducer, useState } from "react";
import { FaTrash } from "react-icons/fa";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type State = Todo[];

type Action =
  | { type: "add"; payload: string }
  | { type: "toggle"; payload: number }
  | { type: "delete"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "add", payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
        className="border-2 border-teal-500 h-8 mr-2"
      />
      <button className="p-2 rounded-sm bg-teal-500" onClick={handleAdd}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              className="ml-2"
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
