import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
//import { Center } from "@builderx/utils";
import HeaderX from "../components/HeaderX";

global.allArrays = [
  activityList = [
    {
      pointValue: '0',
      activity: 'Activity',
      title: "yes1"
  },
  {
      pointValue: '15',
      activity: 'Biking',
      title: "yes2"
  },
  {
      pointValue: '20',
      activity: 'Walking',
      title: "yes3"
  },
  {
      pointValue: '25',
      activity: 'Running',
      title: "yes4"
  },
],

ScreenBreakList = [
  {
    pointValue: '0',
    activity: 'Activity',
    toggled: false
},
{
    pointValue: '15',
    activity: 'Put phone on DND',
    toggled: false
},
{
    pointValue: '20',
    activity: 'Trade TV for a podcast',
    toggled: false
},
{
    pointValue: '25',
    activity: 'Spend a day off Insta',
    toggled: false
}
],
 journalList = [
  {
      pointValue: '0',
      activity: 'Journal Tip',
      toggled: false
  },
  {
      pointValue: '15',
      activity: 'Journal and listen to music',
      toggled: false
  },
  {
      pointValue: '20',
      activity: 'Journal for 10 min',
      toggled: false
  },
  {
      pointValue: '25',
      activity: 'Journal for 20 min',
      toggled: false
  },
]
]


function WellnessCenter(props) {
  return (
    <ScrollView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.categories}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("CheckIn")}
              style={styles.button2}
            >
              <View style={styles.rect8Filler}></View>
              <View style={styles.rect8}>
                <Text style={styles.checkIn}>Check In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Achievements")}
              style={styles.button3}
            >
              <View style={styles.rect82Filler}></View>
              <View style={styles.rect82}>
                <Text style={styles.achievements}>Achievements</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Activities")}
              style={styles.button4}
            >
              <View style={styles.group3}>
                <View style={styles.group5Stack}>
                  
                  <View style={styles.rect83}>
                    <Text style={styles.selfCareActivities}>
                      Self Care Activities
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonNew: {
    width: 100,
    height: 50,
    backgroundColor: 'black'
  },
  button: {
    top: 26,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 375,
    flex: 1,
    marginTop: 80,
    alignSelf: "center"
  },
  button2: {
    width: 252,
    height: 169,
    backgroundColor: "rgba(255,253,169,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 21,
    marginLeft: 61
  },
  rect8Filler: {
    flex: 1
  },
  rect8: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  checkIn: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button3: {
    width: 252,
    height: 169,
    backgroundColor: "rgba(219,126,248,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: "rgba(251,246,255,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    alignSelf: "flex-end",
    marginTop: 40,
    marginRight: 63
  },
  rect82Filler: {
    flex: 1
  },
  rect82: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center",
    marginBottom: -1
  },
  achievements: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button4: {
    width: 250,
    height: 169,
    backgroundColor: "rgba(133,225,225,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    marginTop: 51,
    alignSelf: "center"
  },
  group3: {
    width: 250,
    height: 169,
    alignSelf: "center"
  },
  group5: {
    width: 159,
    height: 169,
    position: "absolute",
    top: 0
  },
  rect83: {
    left: 0,
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    position: "absolute",
    right: 0,
    bottom: 0,
    justifyContent: "center"
  },
  selfCareActivities: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  group5Stack: {
    height: 169
  },
  headerX: {
    top: 0,
    left: 0,
    height: 80,
    position: "absolute",
    right: 0,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  buttonStack: {
    flex: 1,
    marginBottom: 54
  }
});

export default WellnessCenter;
