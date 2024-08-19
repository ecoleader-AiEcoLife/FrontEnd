"use client";
import { useEffect, useState } from "react";
import useTodoStore from "@/store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const [isMounted, setIsMounted] = useState(false);

  // 클라이언트 측에서 컴포넌트가 마운트된 후에만 렌더링을 시작함
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 서버와 클라이언트 사이의 HTML 불일치를 방지하기 위해 아무것도 렌더링하지 않음
  }

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
