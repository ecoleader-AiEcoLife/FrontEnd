import { create } from "zustand";

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

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text: string) => set((state) => ({
        todos: [...state.todos, { text, completed: false, id: Date.now() }]
    })),
    removeTodo: (id: number) => set((state) => ({
        todos: state.todos.filter((t) => t.id !== id)
    })),
    toggleTodo: (id: number) => set((state) => ({
        todos: state.todos.map((t) => 
            t.id === id ? { ...t, completed: !t.completed } : t
        )
    }))
}));

export default useTodoStore;