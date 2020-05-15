import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import Home from "./views/pages/Home"
import Events from "./views/pages/Events"
import Books from "./views/pages/Book"



const App = props => {
  return (
  <Events/>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default App;