import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function SecondButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.yourCalendar}>Your Calendar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(233,230,244,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  yourCalendar: {
    color: "rgba(0,0,0,1)",
    fontSize: 17
  }
});

export default SecondButton;
