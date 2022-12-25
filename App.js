import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import { Card, Button, Image } from "react-native-elements";

//constants and helper functions
import { DATA } from "./constants/cards";

//components
import Ball from "./src/Ball";
import Deck from "./src/Deck";

export default function App() {
  const renderCard = (item) => {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Card.Image
          source={{ uri: item.uri }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={{ marginBottom: 15 }}>I can customize even more...</Text>

        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View"
        />
      </Card>
    );
  };

  const renderNoMoreCard = () => {
    return (
      <Card>
        <Card.Title>No more cards!</Card.Title>
        <Text style={{ marginBottom: 15 }}>No more content!</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View"
        />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Ball /> */}
      <Deck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCard={renderNoMoreCard}
      />
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
