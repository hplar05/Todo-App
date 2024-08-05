export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface todoStoreInterface {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newTodo: string) => void;
  toggleTodo: (id: number) => void;
  removeCompletedTodos: () => void;
}


  export interface todoItemInterfae {
    todo: string
  }

  export interface TodoItemInterface {
    todo: {
      id: number;
      text: string;
      completed: boolean;
    };
  }