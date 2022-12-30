import { View, Text, StyleSheet } from "react-native";
import React from "react";

//components
import Signup from "./src/components/Signup";

const App = () => {
  return (
    <View style={styles.container}>
      <Signup />
      {/* <Text>Chennai super kings</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
