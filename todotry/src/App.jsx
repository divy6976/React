import React, { useContext } from "react";
import ThemeProvider from "./context/ThemeProvider";
import TodoContext from "./context/todoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";
import { useState } from "react";

function AppContent() {
  const { todos, setTodos } = useContext(TodoContext); // ✅ context ke andar




  return (
    <>
      <TodoForm />
      <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} /> // ✅ todo prop pass
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="bg-[#172842] flex items-start justify-center min-h-[90vh] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-6 text-white bg-[#1E2A44]">
          <h1 className="text-2xl font-bold text-center mb-6 mt-2">Manage Your Todos</h1>
          <AppContent />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
