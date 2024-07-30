import useTodoStore from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function ToDoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="flex justify-center">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
