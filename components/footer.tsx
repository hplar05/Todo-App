import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import { FooterStyles } from "./styles/TodoStyles";
import useTodoStore from "../store/todoStore";

function Footer() {
  const removeCompletedTodos = useTodoStore(
    (state) => state.removeCompletedTodos,
  );
  const todos = useTodoStore((state) => state.todos);

  const handleCompletedTask = () => {
    const hasCompletedTasks = todos.some((todo) => todo.completed);

    if (!hasCompletedTasks) {
      ToastAndroid.show("Select Completed Task First!", ToastAndroid.SHORT);
    } else {
      removeCompletedTodos();
      ToastAndroid.show("Task Completed!", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={FooterStyles.footerContainer}>
      <TouchableOpacity
        style={FooterStyles.deleteCompletedButton}
        onPress={handleCompletedTask}
      >
        <Text style={FooterStyles.deleteCompletedbuttonText}>
          Delete all Completed Tasks 🗑️
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
