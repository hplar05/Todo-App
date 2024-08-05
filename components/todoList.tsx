import { View, ScrollView } from "react-native";
import React from "react";
import useTodoStore from "../store/todoStore";
import TodoItem from "./todoItem";
import { TodoListStyles } from "./styles/TodoStyles";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <ScrollView style={TodoListStyles.Scrollcontainer}>
      {todos.map((todo) => (
        <View style={TodoListStyles.container}>
          <TodoItem key={todo.id} todo={todo} />
        </View>
      ))}
    </ScrollView>
  );
};

export default TodoList;
