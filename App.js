import { View, Text, StyleSheet } from "react-native";
import React from "react";

//components
import Signup from "./src/components/Signup";
import Signin from "./src/components/Signin";

const App = () => {
  return (
    <View style={styles.container}>
      <Signup />
      <Signin />
      {/* <Text>Chennai super kings</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
