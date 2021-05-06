import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";

function CupertinoSwitch(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Switch
        value={props.value ? true : false}
        trackColor={{
          true: "rgba(172,239,253,1)",
          false: "rgba(255,255,255,1)"
        }}
        thumbColor="rgba(255,255,255,1)"
        style={styles.switch1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default CupertinoSwitch;
