import React, { Component } from "react";
import { View } from "react-native";
import commonStyles from "./src/styles/commonStyles";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import RestaurantCard from "./src/components/RestaurantCard";

const restaurants = [
  { name: "React Cafe", address: "123 Anywhere St" },
  { name: "Fancy Restaurant", address: "799 Main St" },
  { name: "Taco Place", address: "550 Maple Rd" }
];

export default class App extends Component {
  state = {
    searchKey: null
  };

  setClassState = data => this.setState(data);

  render() {
    debugger;

    return (
      <View style={commonStyles.flex}>
        <Header />
        <Input
          searchKey={this.state.searchKey}
          setClassState={this.setClassState}
        />
        {restaurants
          .filter(place => {
            return (
              !this.state.searchKey ||
              place.name.toLocaleLowerCase().indexOf(this.state.searchKey) > -1
            );
          })
          .map((place, index) => (
            <RestaurantCard key={index} index={index} place={place} />
          ))}
      </View>
    );
  }
}
