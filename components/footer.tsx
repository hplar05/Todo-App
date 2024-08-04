import { View, Text, StyleSheet } from "react-native";
import React from "react";

function Footer() {
  return (
    <View style={style.footerContainer}>
      <Text style={style.textStyle}>All rights reserved © My Todo List.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  footerContainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Footer;
