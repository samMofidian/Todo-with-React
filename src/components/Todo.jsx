import { Trash3Fill } from "react-bootstrap-icons";
import "./Todo.css";

const Todo = ({ todo, removeHandler }) => {
  return (
    <div className="todo">
      <p className="todo-text">{todo.text}</p>
      <button className="delete-icon" onClick={() => removeHandler(todo.id)}>
        <Trash3Fill />
      </button>
    </div>
  );
};

export default Todo;
