import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Sunbutton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 85.31 114.9" style={styles.ellipse}>
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
          source={require("../assets/images/unnamed.jpg")}
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
    width: 85,
    height: 115,
    position: "absolute",
    left: 0,
    top: 0
  },
  image: {
    top: 12,
    left: 9,
    width: 66,
    height: 91,
    position: "absolute"
  },
  ellipseStack: {
    width: 85,
    height: 115
  }
});

export default Sunbutton;
