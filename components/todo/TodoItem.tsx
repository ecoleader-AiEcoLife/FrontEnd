import useTodoStore from "@/store/todoStore";
import { motion } from "framer-motion";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem({ todo }: any) {
  const { removeTodo, toggleTodo } = useTodoStore();

  return (
    <div className="p-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5"
      />
      <span className={`flex-1 ml-2 ${todo.completed ? `line-through` : ``}`}>
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="px-2 py-1 bg-red-500 text-white rounded-md"
      >
        Delete
      </button>
    </div>
  );
}
