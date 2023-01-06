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

  handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://b536-96-20-226-228.ngrok.io/one-time-password-8a4e1/us-central1/router/createUser",
        { phone: this.state.number }
      );

      const response2 = await axios.post(
        "https://b536-96-20-226-228.ngrok.io/one-time-password-8a4e1/us-central1/router/requestOTP",
        { phone: this.state.number }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

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
