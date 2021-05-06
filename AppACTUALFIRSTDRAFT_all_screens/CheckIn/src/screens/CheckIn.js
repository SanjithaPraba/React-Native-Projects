import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Sunbutton from "../components/Sunbutton";
import Thunderstorm from "../components/Thunderstorm";
import Cloudybutton from "../components/Cloudybutton";
import Rainbutton from "../components/Rainbutton";
import { render } from "react-dom";
//import {notificationManager} from "../components/NotificationManager";

class CheckIn extends React.Component  {

  constructor(props) {
    super(props)
    //this.localNotify = null 
  }
/*
  componentDidMount() {
    this.localNotify = notificationManager
    this.localNotify.configure()
  }
 */
  static navigationOptions = {
    title: 'CheckIn'
  }; 

  /*
  onPressSendNotification = () => {
    this.localNotify.showNotification(
      1,
      "App Notification",
      "Local Notification",
      {},
      {}
    )
  }
*/

  render() {

  return (
    <View style={styles.container}>

      <TouchableOpacity 
      style = {styles.button}
      onPress={this.onPressSendNotification}
      >
        <Text>Send notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button}>
        <Text>Cancel notification</Text>
      </TouchableOpacity>

      <Text style={styles.rateYourMood}>Rate your mood!</Text>
      <View style={styles.moodButtonRow}>
        <Sunbutton style={styles.moodButton}></Sunbutton>
        <Thunderstorm style={styles.thunderstorm}></Thunderstorm>
      </View>
      <View style={styles.fogbuttonRow}>
        <Cloudybutton style={styles.fogbutton}></Cloudybutton>
        <Rainbutton style={styles.rainbutton}></Rainbutton>
      </View>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(187,239,253,1)"
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    width: 200,
    marginTop: 10
  },
  cupertinoHeaderWithActionButton: {
    height: 44,
    width: 375,
    marginTop: 50,
    marginLeft: -2
  },
  rateYourMood: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 42,
    marginTop: 40,
    alignSelf: "center"
  },
  moodButton: {
    height: 115,
    width: 85
  },
  thunderstorm: {
    height: 115,
    width: 85,
    marginLeft: 52
  },
  moodButtonRow: {
    height: 115,
    flexDirection: "row",
    marginTop: 132,
    marginLeft: 80,
    marginRight: 73
  },
  fogbutton: {
    height: 115,
    width: 85
  },
  rainbutton: {
    height: 115,
    width: 85,
    marginLeft: 53
  },
  fogbuttonRow: {
    height: 115,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 80,
    marginRight: 72
  }
});

export default CheckIn;
