import "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todos, todoRemoveHandler }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeHandler={todoRemoveHandler} />
        ))}
    </div>
  );
};

export default TodoList;
