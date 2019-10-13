import React, { Component } from "react";
import { TextInput, View } from "react-native";
import commonStyles from "../../styles/commonStyles";

export default class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={commonStyles.input}
          placeholder="Live Search"
          onChangeText={text => this.props.setClassState({ searchKey: text })}
          value={this.props.searchKey}
        />
      </View>
    );
  }
}
