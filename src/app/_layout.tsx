import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoPage from ".";
import { AppStyles } from "./styles";

export default function App() {
  return (
    <View style={AppStyles.container}>
      <TodoPage />
      <StatusBar style="auto" />
    </View>
  );
}
