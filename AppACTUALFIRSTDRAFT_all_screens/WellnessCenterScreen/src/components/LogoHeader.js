import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function LogoHeader(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Text style={styles.text5}>Wellness Center</Text>
      <View style={styles.rect8}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  text5: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    alignSelf: "center"
  },
  rect8: {
    backgroundColor: "rgba(5,5,5,1)",
    flex: 1,
    marginBottom: 1,
    marginTop: 3
  }
});

export default LogoHeader;
