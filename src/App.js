import React from "react";
import "./App.css";
import { Plus } from "react-bootstrap-icons";

export default function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <form className="todo-form">
        <div className="todo-actions">
          <input type="text" placeholder="Add your new todo" />
          <button>
            <Plus />
          </button>
        </div>
      </form>
    </div>
  );
}
