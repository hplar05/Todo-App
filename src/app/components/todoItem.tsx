import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import useTodoStore from "../../store/todoStore";
import { TodoItemInterface } from "../constants/types";

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
    <View style={styles.container}>
      <Checkbox
        value={todo.completed}
        onValueChange={() => toggleTodo(todo.id)}
      />
      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.text}
      </Text>
      <Modal
        visible={openEditModal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Edit Todo!</Text>
            <TextInput
              placeholder="Enter new todo text"
              value={newText}
              onChangeText={setNewText}
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: "50%",
                    height: 50,
                    marginTop: 24,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                ]}
                onPress={handleEditTodo}
              >
                <Text style={[styles.buttonText, { color: "black" }]}>
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
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
                <Text style={[styles.buttonText, { color: "black" }]}>
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
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Remove Todo!</Text>
            <Text style={styles.desc}>
              Are you sure you want to remove the selected todo?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: "50%",
                    height: 50,
                    marginTop: 24,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                ]}
                onPress={handleRemoveTodo}
              >
                <Text style={[styles.buttonText, { color: "black" }]}>
                  Remove
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
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
                <Text style={[styles.buttonText, { color: "black" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.edit} onPress={() => setOpenEditModal(true)}>
        Edit
      </Text>
      <Text style={styles.remove} onPress={() => setOpenRemoveModal(true)}>
        Remove
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  completed: {
    textDecorationLine: "line-through",
  },
  text: {
    marginLeft: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
  edit: {
    marginLeft: 10,
    color: "blue",
  },
  remove: {
    marginLeft: 10,
    color: "red",
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12,
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 8,
  },
  buttonContainer: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },
});

export default TodoItem;
