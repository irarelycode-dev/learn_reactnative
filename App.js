import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";

//components
import Ball from "./src/Ball";

export default function App() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
});
