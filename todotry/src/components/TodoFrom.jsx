import React, { useState, useContext } from "react";
import TodoContext from "../context/todoContext";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext); // ✅ context ke andar

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo({ id: Date.now(), todo: input, completed: false });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
