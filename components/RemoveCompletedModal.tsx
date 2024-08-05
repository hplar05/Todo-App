import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Modal,
} from "react-native";
import { TodoItemStyles } from "./styles/TodoStyles";

interface RemoveCompletedTodoModalProps {
  visible: boolean;
  onClose: () => void;
  onRemove: () => void;
}

const RemoveCompletedTodoModal: React.FC<RemoveCompletedTodoModalProps> = ({
  visible,
  onClose,
  onRemove,
}) => {
  if (!visible) return null;

  const handleRemove = () => {
    onRemove();
    ToastAndroid.show(
      "Successfully Completed Task Removed!",
      ToastAndroid.SHORT,
    );
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
          <Text style={TodoItemStyles.title}>Remove Todo!</Text>
          <Text style={TodoItemStyles.desc}>
            Are you sure you want to remove the completed task?
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
              onPress={handleRemove}
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

export default RemoveCompletedTodoModal;
