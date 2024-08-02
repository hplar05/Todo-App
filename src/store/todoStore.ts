import { create } from "zustand";
import { TodoStore } from "../app/constants/types";


const useTodoStore = create<TodoStore>(set => ({
    todos: [],
    addTodo: (text) => set((state) => ({todos: [...state.todos, {text, completed:false, id: Date.now()}]})),
    removeTodo: (id) => set((state) => ({todos: state.todos.filter(t => t.id !== id)})),
    editTodo: (id, newTodo) => set((state) => ({
        todos: state.todos.map((t) => t.id === id ? { ...t, text: newTodo } : t),
    })),
    toggleTodo: (id) => set((state) => ({todos: state.todos.map(t => t.id === id ? {...t, completed: !t.completed}: t)}))
}))

export default useTodoStore