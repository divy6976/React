import React, { useState, useEffect } from "react";
import ThemeContext from "./todoContext";

const ThemeProvider = ({ children }) => {
  // localStorage se todos load karo, agar empty hai toh default rakho
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [
      { id: 1, todo: "Todo msg", completed: false }
    ];
  });

  // jab bhi todos change ho → localStorage update ho
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      {
        id: todo.id || Date.now(), // agar id na ho toh generate kar do
        todo: todo.todo,
        completed: todo.completed || false,
      },
      ...prev,
    ]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ThemeContext.Provider
      value={{ todos, setTodos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
