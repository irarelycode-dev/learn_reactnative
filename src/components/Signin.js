import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Input, Button, Text } from "react-native-elements";
import axios from "axios";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: "", code: "" };
  }

  onChangeNumber = (value) => {
    this.setState({ number: value });
  };

  onChangeCode = (value) => {
    this.setState({ code: value });
  };

  handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://b536-96-20-226-228.ngrok.io/one-time-password-8a4e1/us-central1/router/verifyOTP",
        { phone: this.state.number, code: this.state.code }
      );
      console.log("verifyOTP response", response);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginTop: 10 }}>
          <Text>Phone number</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeNumber}
            value={this.state.number}
            placeholder="useless placeholder"
            keyboardType="text"
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Enter code</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeCode}
            value={this.state.code}
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

export default Signin;
