import React, { Component } from "react";
import { Text, View } from "react-native";
import commonStyles from "../../styles/commonStyles";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={commonStyles.header}>Restaurant Review</Text>
      </View>
    );
  }
}
