import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Thunderstorm(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 85.17 114.9" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            cx={43}
            cy={57}
            rx={43}
            ry={57}
            fill="rgba(255,255,255,1)"
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/unnamed_(1)1.jpg")}
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
    top: 21,
    left: 13,
    width: 59,
    height: 73,
    position: "absolute"
  },
  ellipseStack: {
    width: 85,
    height: 115
  }
});

export default Thunderstorm;
