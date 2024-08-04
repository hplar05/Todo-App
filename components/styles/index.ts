import { StyleSheet } from 'react-native'

  export const TodoListStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: 350,
      alignItems: "center",
      shadowColor: 'black',
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 10
    
    },
    Scrollcontainer: {
      flex: 1,
      width: "100%",
    },
  });

  export const TodoItemStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      padding: 10,
    
    },
    completed: {
      textDecorationLine: "line-through",
      fontStyle: "italic",
      color: "red"

    },
    text: {
      marginLeft: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      color: "black",
      fontSize: 16
    },
    buttonText: {
      fontSize: 16,
      color: "black",
    },
    edit: {
      fontSize: 20,
      marginLeft: 20,
      color: "blue",
    },
    remove: {
      fontSize: 20,
      marginLeft: 20,
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
  
  export const AddTodoFormStyles = StyleSheet.create({
    container: {
      paddingTop: 0,
      padding: 20,
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: "bold",
      color: "#343a40",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: "#ced4da",
      borderWidth: 1,
      borderRadius: 4,
      paddingLeft: 10,
      marginRight: 10,
      backgroundColor: "#ffffff",
    },
    button: {
      backgroundColor: "green",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
    },
    buttonText: {
      color: "#ffffff",
      fontWeight: "bold",
    },
  });

 export const AppStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });