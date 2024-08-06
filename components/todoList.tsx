import { View, ScrollView } from "react-native";
import React from "react";
import useTodoStore from "../store/todoStore";
import TodoItem from "./todoItem";
import { TodoListStyles } from "./styles/TodoStyles";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <ScrollView style={TodoListStyles.Scrollcontainer}>
      {todos.map((todo, todoIndex) => (
        <View key={todoIndex} style={TodoListStyles.container}>
          <TodoItem todo={todo} />
        </View>
      ))}
    </ScrollView>
  );
};

export default TodoList;
