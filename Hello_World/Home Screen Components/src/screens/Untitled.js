import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import SecondButton from "../components/SecondButton";
import CupertinoButtonLight from "../components/CupertinoButtonLight";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.peacePlanner}>Peace Planner</Text>
      <SecondButton style={styles.cupertinoButtonInfo}></SecondButton>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight}
      ></CupertinoButtonLight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(213,255,235,1)"
  },
  peacePlanner: {
    fontFamily: "Arial",
    color: "#121212",
    height: 59,
    width: 263,
    fontSize: 40,
    marginTop: 146,
    marginLeft: 56
  },
  cupertinoButtonInfo: {
    height: 92,
    width: 205,
    backgroundColor: "#ffffff",
    marginTop: 109,
    marginLeft: 85
  },
  cupertinoButtonLight: {
    height: 92,
    width: 205,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 75,
    marginLeft: 85
  }
});

export default Untitled;
