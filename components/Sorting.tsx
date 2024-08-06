import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import useTodoStore from "../store/todoStore";
import { sortingStyle } from "./styles/TodoStyles";

const Sorting = () => {
  const { sortByDate, sortByCompleted } = useTodoStore();
  return (
    <View style={sortingStyle.container}>
      <View style={sortingStyle.buttonContainer}>
        <Text style={sortingStyle.buttonContainer} onPress={sortByDate}>
          Sort by Date
        </Text>
        <Text style={sortingStyle.buttonContainer} onPress={sortByCompleted}>
          Sort by Completed
        </Text>
      </View>
    </View>
  );
};

export default Sorting;
