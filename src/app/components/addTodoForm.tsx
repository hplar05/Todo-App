import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import useTodoStore from "../../store/todoStore";
import { AddTodoFormStyles } from "../styles";

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
      <Text style={AddTodoFormStyles.title}>Your Todo Lists 💡 </Text>
      <View style={AddTodoFormStyles.inputContainer}>
        <TextInput
          style={AddTodoFormStyles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter todo"
        />
        <TouchableOpacity
          style={AddTodoFormStyles.button}
          onPress={handleSubmit}
        >
          <Text style={AddTodoFormStyles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodoForm;
