import useTodoStore from "@/store/todoStore";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem({ todo }: { todo: Todo }) {
  const { removeTodo, toggleTodo } = useTodoStore();

  return (
    <div className="flex items-center p-4 hover:bg-gray-50">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <span
        className={`flex-1 ml-3 ${
          todo.completed ? "line-through text-gray-500" : "text-gray-700"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="ml-2 px-2 py-1 text-sm text-red-600 hover:text-red-800 focus:outline-none"
      >
        Delete
      </button>
    </div>
  );
}
