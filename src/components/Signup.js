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
        "  https://f4a1-96-20-226-228.ngrok.io/one-time-password-8a4e1/us-central1/createUser",
        { phone: this.state.phone }
      );
      console.log(">>>response", response);
      const response2 = await axios.post(
        "  https://f4a1-96-20-226-228.ngrok.io/one-time-password-8a4e1/us-central1/requestOneTimePassword",
        { phone: this.state.phone }
      );
    } catch (error) {
      console.log("otp error");
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
