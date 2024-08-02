export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void,
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