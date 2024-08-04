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
import useTodoStore from "../../store/todoStore";
import { TodoItemInterface } from "../constants/types";
import { TodoItemStyles } from "../styles";

const TodoItem = ({ todo }: TodoItemInterface) => {
  const { editTodo, removeTodo, toggleTodo } = useTodoStore();
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditTodo = () => {
    if (!newText) {
      ToastAndroid.show("Invalid, input text first!", ToastAndroid.SHORT);
      return;
    }
    editTodo(todo.id, newText);
    setOpenEditModal(false);
    ToastAndroid.show("Sucessfully Edited!", ToastAndroid.SHORT);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
    setOpenRemoveModal(false);
    ToastAndroid.show("Sucessfully Remove!", ToastAndroid.SHORT);
  };

  return (
    <View style={TodoItemStyles.container}>
      <Checkbox
        value={todo.completed}
        onValueChange={() => toggleTodo(todo.id)}
      />
      <Text
        style={[
          TodoItemStyles.text,
          todo.completed && TodoItemStyles.completed,
        ]}
      >
        {todo.text}
      </Text>
      <Modal
        visible={openEditModal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View style={TodoItemStyles.content}>
          <View style={TodoItemStyles.card}>
            <Text style={TodoItemStyles.title}>Edit Todo!</Text>
            <TextInput
              placeholder="Enter new todo text"
              value={newText}
              onChangeText={setNewText}
              style={TodoItemStyles.input}
            />
            <View style={TodoItemStyles.buttonContainer}>
              <TouchableOpacity
                style={[
                  TodoItemStyles.button,
                  {
                    width: "50%",
                    height: 50,
                    marginTop: 24,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                ]}
                onPress={handleEditTodo}
              >
                <Text style={[TodoItemStyles.buttonText, { color: "black" }]}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  TodoItemStyles.button,
                  {
                    width: "50%",
                    height: 50,
                    marginTop: 24,
                    marginLeft: 10,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                ]}
                onPress={() => setOpenEditModal(false)}
              >
                <Text style={[TodoItemStyles.buttonText, { color: "black" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={openRemoveModal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View style={TodoItemStyles.content}>
          <View style={TodoItemStyles.card}>
            <Text style={TodoItemStyles.title}>Remove Todo!</Text>
            <Text style={TodoItemStyles.desc}>
              Are you sure you want to remove the selected todo?
            </Text>
            <View style={TodoItemStyles.buttonContainer}>
              <TouchableOpacity
                style={[
                  TodoItemStyles.button,
                  {
                    width: "50%",
                    height: 50,
                    marginTop: 24,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                ]}
                onPress={handleRemoveTodo}
              >
                <Text style={[TodoItemStyles.buttonText, { color: "black" }]}>
                  Remove
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  TodoItemStyles.button,
                  {
                    width: "50%",
                    height: 50,
                    marginTop: 24,
                    marginLeft: 10,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                ]}
                onPress={() => setOpenRemoveModal(false)}
              >
                <Text style={[TodoItemStyles.buttonText, { color: "black" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={TodoItemStyles.edit} onPress={() => setOpenEditModal(true)}>
        Edit
      </Text>
      <Text
        style={TodoItemStyles.remove}
        onPress={() => setOpenRemoveModal(true)}
      >
        Remove
      </Text>
    </View>
  );
};

export default TodoItem;
