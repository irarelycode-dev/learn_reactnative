import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import axios from "axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: "" };
  }

  onChangeNumber = (value) => {
    this.setState({ number: value });
  };

  handleSubmit() {
    axios.post("", { phone: this.state.phone });
  }

  render() {
    return (
      <View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeNumber}
            value={this.state.number}
            placeholder="useless placeholder"
            keyboardType="text"
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Signup;
