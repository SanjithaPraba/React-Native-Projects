import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Cloudybutton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 85.06 115.07" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={43}
            cy={58}
            rx={43}
            ry={58}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/cloudy-clipart-cloudy-weather-4.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    top: 0,
    left: 0,
    width: 85,
    height: 115,
    position: "absolute"
  },
  image: {
    top: 19,
    left: 11,
    width: 63,
    height: 78,
    position: "absolute"
  },
  ellipseStack: {
    width: 85,
    height: 115
  }
});

export default Cloudybutton;
