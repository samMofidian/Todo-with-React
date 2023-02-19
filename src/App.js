import React from "react";
import "./App.css";
import { Plus } from "react-bootstrap-icons";

export default function App() {
  return (
    <div className="app">
      <div>
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
      <div className="todo-footer">
        <button>Clear All</button>
      </div>
    </div>
  );
}
