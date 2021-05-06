import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import LogoHeader from "./LogoHeader";
import FeatherIcon from "react-native-vector-icons/Feather";

function HeaderX(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
        <View style={styles.iconRow}>
          <MaterialIconsIcon
            name="dehaze"
            style={styles.icon}
          ></MaterialIconsIcon>
          <LogoHeader style={styles.logoHeader}></LogoHeader>
        </View>
        <View style={styles.iconRowFiller}></View>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to Settings")}
          style={styles.button}
        >
          <FeatherIcon
            name={props.icon2Name || "settings"}
            style={styles.icon2}
          ></FeatherIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31,178,204,1)"
  },
  group: {
    height: 57,
    backgroundColor: "rgba(31,178,204,1)",
    width: 360,
    flexDirection: "row",
    marginTop: 23,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginTop: 10
  },
  logoHeader: {
    width: 278,
    height: 47,
    marginLeft: 13
  },
  iconRow: {
    height: 47,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15
  },
  icon2: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  }
});

export default HeaderX;
