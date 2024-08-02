import { View, StyleSheet } from "react-native";
import React from "react";
import useTodoStore from "../../store/todoStore";
import TodoItem from "./todoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default TodoList;
