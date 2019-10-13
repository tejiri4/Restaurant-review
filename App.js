import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import commonStyles from "./src/styles/commonStyles";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import RestaurantCard from "./src/components/RestaurantCard";

const restaurants = [
  { name: "React Cafe", address: "123 Anywhere St" },
  { name: "Fancy Restaurant", address: "799 Main St" },
  { name: "Taco Place", address: "550 Maple Rd" },
  { name: "Tony's Diner", address: "4101 College St" },
  { name: "Pasta Central", address: "706 Harper St" },
  { name: "Burger Builder", address: "4869 Hamilton Dr" },
  { name: "Pizza Express", address: "1049 Bird St" },
  { name: "Teriyaki To Go", address: "1884 Tea Berry Lane" },
  { name: "Marron Deli", address: "1082 Stuart St" },
  { name: "Prime Bar and Grill", address: "1848 Fairfax Dr" },
  { name: "Dumpling House", address: "747 Kelly Dr" },
  { name: "Hot Chicken", address: "1816 Olive St" },
  { name: "Luna's Tap Room", address: "3256 Spirit Dr" },
  { name: "Quick Sandwich Shop", address: "2587 Cherry Ridge Dr" },
  { name: "Bobby's Burgers", address: "4152 Berkley St" },
  { name: "Turnpike Diner", address: "4571 Central Ave" },
  { name: "Bombay Express", address: "65 Queens Lane" },
  { name: "Coffee Central", address: "3228 Oakwood Circle" },
  { name: "King's Garden", address: "2935 Victoria Ct" },
  { name: "Salads and More", address: "2454 Preston St" }
];

export default class App extends Component {
  state = {
    searchKey: null
  };

  setClassState = data => this.setState(data);

  render() {
    return (
      <View style={commonStyles.flex}>
        <Header />
        <Input
          searchKey={this.state.searchKey}
          setClassState={this.setClassState}
        />
        <FlatList
          contentContainerStyle={{
            paddingTop: 50
          }}
          data={restaurants.filter(place => {
            return (
              !this.state.searchKey ||
              place.name.toLocaleLowerCase().indexOf(this.state.searchKey) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <RestaurantCard index={index} place={item} />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={13}
        />
      </View>
    );
  }
}
