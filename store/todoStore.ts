import { create } from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, StateStorage } from 'zustand/middleware';
import { todoStoreInterface, Todo } from "../types/types";

// using persist and statestorage of zustand to store in Async Local Storage 
const useTodoStore = create<todoStoreInterface>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, completed: false, id: Date.now() }] })),
      removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),
      editTodo: (id, newTodo) => set((state) => ({
        todos: state.todos.map((t) => t.id === id ? { ...t, text: newTodo } : t),
      })),
      removeCompletedTodos: () => set((state) => ({
        todos: state.todos.filter(t => !t.completed)
      })),
      toggleTodo: (id) => set((state) => ({ todos: state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t) }))
    }),
    {
      name: 'todo-storage',
      getStorage: (): StateStorage => AsyncStorage,
    }
  )
);

export default useTodoStore;
