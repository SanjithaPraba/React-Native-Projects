import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWarning(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.screenBreak}>Screen Break</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  screenBreak: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonWarning;
