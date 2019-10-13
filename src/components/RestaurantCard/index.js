import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import commonStyles from "../../styles/commonStyles";

export default class RestaurantCard extends Component {
  render() {
    const {
      index,
      place: { name, address }
    } = this.props;
    return (
      <View
        key={index}
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
          <Text style={commonStyles.flex}>Info</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  edges: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  bold: { fontWeight: "bold" },
  nameAddress: { flex: 8 }
});
