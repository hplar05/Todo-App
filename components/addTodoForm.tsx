import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import useTodoStore from "../store/todoStore";
import { AddTodoFormStyles } from "./styles/TodoStyles";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = () => {
    if (!text.trim()) {
      ToastAndroid.show("Invalid, input text first!", ToastAndroid.SHORT);
      return;
    }
    addTodo(text);
    setText("");
    ToastAndroid.show("Succesfully Added", ToastAndroid.SHORT);
  };

  return (
    <View style={AddTodoFormStyles.container}>
      <View style={AddTodoFormStyles.inputContainer}>
        <TextInput
          style={AddTodoFormStyles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter a new to-do"
        />
        <TouchableOpacity
          style={AddTodoFormStyles.button}
          onPress={handleSubmit}
        >
          <Text style={AddTodoFormStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodoForm;
