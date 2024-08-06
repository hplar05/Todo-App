export interface Todo {
  text: string;
  completed: boolean;
  id: number;
}

export interface todoStoreInterface {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newTodo: string) => void;
  removeCompletedTodos: () => void;
  toggleTodo: (id: number) => void;
  sortByDate: () => void;
  sortByCompleted: () => void;
}

export interface todoItemInterface {
  todo: string;
}

export interface TodoItemInterface {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}


