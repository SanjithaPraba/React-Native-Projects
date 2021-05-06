import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithAddButton4 from "../components/CupertinoHeaderWithAddButton4";

function Calendar(props) {
  
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithAddButton4: {
    height: 44,
    width: 375,
    marginTop: 52,
    alignSelf: "center"
  },
  button1: {
    width: 100,
    height: 50,
    backgroundColor: 'black'
  }
});

export default Calendar;
