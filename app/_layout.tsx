import { View } from "react-native";
import { AppStyles } from "../components/styles";
import TodoPage from ".";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          headerTitle: "My Todo Lists 💡",
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
