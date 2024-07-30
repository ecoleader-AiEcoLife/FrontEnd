import useTodoStore from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="w-full max-w-md mx-auto">
      <ul className="bg-white rounded-lg shadow-md overflow-hidden">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b last:border-b-0">
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
