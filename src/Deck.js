import React, { Component } from "react";
import { View, Animated, Text } from "react-native";

class Deck extends Component {
  componentDidMount() {
    console.log("component has been mounted");
  }

  renderCards() {
    return this.props.data.map((item) => this.props.renderCard(item));
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
