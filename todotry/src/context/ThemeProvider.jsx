import React, { useState } from "react";
import ThemeContext from "./todoContext";

const ThemeProvider = ({ children }) => {
  const [todos, setTodos] = useState([{
    id: 1,
    todo: "Todo msg",
    completed: false
  }]);


  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };


  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }


  return (
  <ThemeContext.Provider
    value={{ todos, setTodos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
  >
    {children}
  </ThemeContext.Provider>
);



};

export default ThemeProvider;
