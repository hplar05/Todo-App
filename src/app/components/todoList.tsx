import { View, StyleSheet } from "react-native";
import React from "react";
import useTodoStore from "../../store/todoStore";
import TodoItem from "./todoItem";
import { TodoListStyles } from "../styles";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <View style={TodoListStyles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
};

export default TodoList;
