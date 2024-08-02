import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import useTodoStore from "../../store/todoStore";
import { TodoItemInterface } from "../constants/types";

const TodoItem = ({ todo }: TodoItemInterface) => {
  const { removeTodo, toggleTodo } = useTodoStore();
  const [openModal, setOpenModal] = useState(false);

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
        visible={openModal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Remove Todo!</Text>
            <Text style={styles.desc}>
              Are you sure you want remove the selected todo?
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
                onPress={() => removeTodo(todo.id)}
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
                onPress={() => setOpenModal(false)}
              >
                <Text style={[styles.buttonText, { color: "black" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.edit} onPress={() => removeTodo(todo.id)}>
        Edit
      </Text>
      <Text style={styles.remove} onPress={() => setOpenModal(true)}>
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
});

export default TodoItem;
