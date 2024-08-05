import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from "react-native";
import { TodoItemStyles } from "./styles/TodoStyles";

interface EditTodoModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  newText: string;
  setNewText: Dispatch<SetStateAction<string>>;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  visible,
  onClose,
  onSave,
  newText,
  setNewText,
}) => {
  if (!visible) return null;

  const handleSave = () => {
    if (!newText) {
      ToastAndroid.show("Invalid, input text first!", ToastAndroid.SHORT);
      return;
    }
    onSave();
    ToastAndroid.show("Successfully Edited!", ToastAndroid.SHORT);
  };

  return (
    <Modal
      visible={visible}
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
              onPress={handleSave}
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
              onPress={onClose}
            >
              <Text style={[TodoItemStyles.buttonText, { color: "black" }]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditTodoModal;
