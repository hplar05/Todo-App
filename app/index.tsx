import { StyleSheet, Text, View } from "react-native";
import AddTodoForm from "../components/addTodoForm";
import TodoList from "../components/todoList";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/footer";
import { IndexStyles } from "../components/styles/TodoStyles";

const TodoPage = () => {
  return (
    <SafeAreaView style={IndexStyles.container}>
      <View style={IndexStyles.main}>
        <AddTodoForm />
        <TodoList />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default TodoPage;
