import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const useTodoStore = create<TodoStore>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (text: string) =>
                set((state) => ({
                    todos: [
                        ...state.todos,
                        { text, completed: false, id: Date.now() },
                    ],
                })),
            removeTodo: (id: number) =>
                set((state) => ({
                    todos: state.todos.filter((t) => t.id !== id),
                })),
            toggleTodo: (id: number) =>
                set((state) => ({
                    todos: state.todos.map((t) =>
                        t.id === id ? { ...t, completed: !t.completed } : t
                    ),
                })),
        }),
        {
            name: "todo-storage", // 로컬 스토리지에 저장될 이름
            getStorage: () => localStorage, // (선택 사항) 기본적으로 로컬 스토리지를 사용
        }
    )
);

export default useTodoStore;
