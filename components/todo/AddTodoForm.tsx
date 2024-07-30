import useTodoStore from "@/store/todoStore";
import { useState, FormEvent } from "react";

export default function AddTodoForm() {
  const [text, setText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow mr-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </form>
  );
}
