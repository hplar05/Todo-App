import { StyleSheet, Text, View } from "react-native";
import AddTodoForm from "./components/addTodoForm";
import TodoList from "./components/todoList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TodoPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <AddTodoForm />
        <TodoList />
      </View>
    </SafeAreaView>
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
