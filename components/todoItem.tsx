import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import useTodoStore from "../store/todoStore";
import { TodoItemInterface } from "../types/types";
import { TodoItemStyles } from "./styles/TodoStyles";
import EditTodoModal from "./EditTodoModal";
import RemoveTodoModal from "./RemoveTodoModal";

const TodoItem = ({ todo }: TodoItemInterface) => {
  const { editTodo, removeTodo, toggleTodo } = useTodoStore();
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleCompletedTodo = () => {
    toggleTodo(todo.id);

    if (todo.completed === false) {
      ToastAndroid.show("Task Completed!", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Task Uncompleted!", ToastAndroid.SHORT);
    }
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
    setOpenRemoveModal(false);
    ToastAndroid.show("Successfully Removed!", ToastAndroid.SHORT);
  };

  const handleEditTodo = () => {
    if (!newText) {
      ToastAndroid.show("Invalid, input text first!", ToastAndroid.SHORT);
      return;
    }
    editTodo(todo.id, newText);
    setOpenEditModal(false);
    ToastAndroid.show("Successfully Edited!", ToastAndroid.SHORT);
  };

  return (
    <View style={TodoItemStyles.container}>
      <Checkbox value={todo.completed} onValueChange={handleCompletedTodo} />
      <Text
        style={[
          TodoItemStyles.text,
          todo.completed && TodoItemStyles.completed,
        ]}
      >
        {todo.text}
      </Text>
      <EditTodoModal
        visible={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSave={handleEditTodo}
        newText={newText}
        setNewText={setNewText}
      />
      <RemoveTodoModal
        visible={openRemoveModal}
        onClose={() => setOpenRemoveModal(false)}
        onRemove={handleRemoveTodo}
      />
      <Text style={TodoItemStyles.edit} onPress={() => setOpenEditModal(true)}>
        🖊️
      </Text>
      <Text
        style={TodoItemStyles.remove}
        onPress={() => setOpenRemoveModal(true)}
      >
        🗑️
      </Text>
    </View>
  );
};

export default TodoItem;
