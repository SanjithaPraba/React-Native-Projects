import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Rainbutton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 84.64 114.9" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={42}
            cy={57}
            rx={42}
            ry={57}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/cute-cartoon-kawaii-blue-cloud-rain-drops-sad-face-emotion-weeping-vector-illustration-posters-cards-t-shirt-prints-156689192.jpg")}
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
    top: 22,
    left: 12,
    width: 61,
    height: 71,
    position: "absolute"
  },
  ellipseStack: {
    width: 85,
    height: 115
  }
});

export default Rainbutton;
