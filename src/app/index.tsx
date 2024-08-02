import { StyleSheet, Text, View } from "react-native";
import AddTodoForm from "./components/addTodoForm";
import TodoList from "./components/todoList";

export default function TodoPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <AddTodoForm />
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
