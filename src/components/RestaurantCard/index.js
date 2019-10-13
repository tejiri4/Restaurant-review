import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import commonStyles from "../../styles/commonStyles";

export default class RestaurantCard extends Component {
  state = {
    showInfo: false
  };

  infoPressed = () => this.setState({ showInfo: !this.state.showInfo });

  render() {
    const {
      index,
      place: { name, address }
    } = this.props;
    return (
      <View key={index}>
        <View
          style={[
            styles.row,
            { backgroundColor: index % 2 === 0 ? "#FFF" : "#F3F3F7" }
          ]}
        >
          <View style={styles.edges}>
            <Text style={commonStyles.flex}>{index + 1}</Text>
          </View>
          <View style={styles.nameAddress}>
            <Text style={styles.bold}>{name}</Text>
            <Text>{address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableOpacity onPress={this.infoPressed} style={styles.button}>
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", height: 40 },
  edges: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    minWidth: 50
  },
  bold: { fontWeight: "bold" },
  nameAddress: { flex: 8 },
  button: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: "#0066CC"
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    borderColor: "#ddd",
    borderRadius: 5,
    borderWidth: 1
  }
});
