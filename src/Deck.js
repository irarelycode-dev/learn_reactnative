import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

//constants
import { SCREEN_WIDTH, SWIPE_THRESHOLD } from "../constants/constants";

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe("left");
        } else {
          this.resetPosition();
        }
      },
    });
    this.state = { panResponder, position };
  }

  forceSwipe(direction) {
    Animated.timing(this.state.position, {
      toValue: { x: direction === "left" ? -SCREEN_WIDTH : SCREEN_WIDTH, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate }],
    };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index == 0) {
        return (
          <Animated.View
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
            key={0}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }

      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
