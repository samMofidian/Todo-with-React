import React, { useState, useEffect, useRef } from "react";
import TodoList from "./components/TodoList";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// style
import { Plus } from "react-bootstrap-icons";
import "./App.css";

export default function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  // focus on input field at first render(mount)
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputTextChangeHandler = (e) => {
    const text = e.target.value;
    setInputText(text);

    // input validation
    if (text.length < 3) {
      setError("Todo is too short!");
      return;
    } else {
      setError("");
    }
  };

  const todoAddHandler = () => {
    // empty str input
    if (inputText === "") {
      return;
    }
    if (error !== "") {
      return;
    }
    let lastId = 0;
    if (todos.length > 0) {
      lastId = todos[todos.length - 1].id + 1;
    }
    setTodos((prev) => [...prev, { id: lastId, text: inputText }]);
    setInputText("");
    // notify
    toast.success("Added successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // prevent refreshing
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const todoRemoveHandler = (todoId) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const clearAllTodosHandler = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <div>
        <h1>Todo App</h1>
        <form className="todo-form" onSubmit={formSubmitHandler}>
          <div className="todo-actions">
            <input
              type="text"
              onChange={inputTextChangeHandler}
              value={inputText}
              placeholder="Add your new todo"
              ref={inputRef}
            />
            <button onClick={todoAddHandler}>
              <Plus />
            </button>
            <ToastContainer />
          </div>
          {error && <p className="error-msg">{error}</p>}
        </form>
        <TodoList todos={todos} todoRemoveHandler={todoRemoveHandler} />
      </div>
      <div className="todo-footer">
        <p>You have {todos.length} pending tasks</p>
        <button onClick={clearAllTodosHandler}>Clear All</button>
      </div>
    </div>
  );
}
