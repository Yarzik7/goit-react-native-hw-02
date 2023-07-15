import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./src/components/RegistrationScreen";

const background = require("./src/assets/background.jpg");

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <RegistrationScreen />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default App;
