import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

class Home extends React.Component {

  static navigationOptions = {
    title: 'Home',
 headerStyle: {
      backgroundColor: '#03A9F4',
    },
 headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 
  }; 

  render(){
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      
      <View style={styles.background}>
          <View style={styles.logo}>
            <View style={styles.endWrapperFiller}></View>
            <View style={styles.peacePlannerColumn}>
              <Text style={styles.peacePlanner}>Peace Planner</Text>
              <View style={styles.rect7}></View>
            </View>
          </View>
          <View style={styles.logoFiller}></View>
          <View style={styles.button4Column}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Calendar")}
              style={styles.button4}
            >
              <Text style={styles.calendar}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("WellnessCenter")}
              style={styles.button5}
            >
              <Text style={styles.wellness}>Wellness</Text>
            </TouchableOpacity>
            
            <View style={styles.footerTexts}>
              <View style={styles.button2Filler}></View>
              <Text style={styles.needHelp}>Need Help?</Text>
            </View>
          </View>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderWidth: 0,
    borderColor: "rgba(246,245,245,1)",
    borderStyle: "solid",
    backgroundColor: "rgba(94,219,241,1)"
  },
  background: {
    flex: 1
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    width: 262,
    height: 200,
    backgroundColor: "rgba(255,255,255,0)",
    marginTop: 102,
    marginLeft: 61
  },
  endWrapperFiller: {
    flex: 1
  },
  peacePlanner: {
    color: "rgba(255,255,255,1)",
    fontSize: 72,
    textAlign: "center",
    width: 268,
    height: 170,
    marginBottom: 17
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginLeft: 2,
    marginRight: 9
  },
  peacePlannerColumn: {
    marginBottom: 5,
    marginRight: -6
  },
  logoFiller: {
    flex: 1
  },
  button4: {
    height: 59,
    backgroundColor: "rgba(0,3,3,1)",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 61,
    marginLeft: 8,
    marginRight: 1
  },
  calendar: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button5: {
    height: 59,
    backgroundColor: "rgba(1,9,11,1)",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 207,
    marginLeft: 8,
    marginRight: 1
  },
  wellness: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  footerTexts: {
    height: 14,
    flexDirection: "row"
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  },
  button4Column: {
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  }
});

export default Home;
