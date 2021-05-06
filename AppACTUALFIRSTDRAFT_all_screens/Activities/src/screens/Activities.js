import React, { Component, useState } from "react";
import { ScrollView, StyleSheet, View, Text, Switch, TouchableHighlight } from "react-native";
import CupertinoSwitch from "../components/CupertinoSwitch";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

global.achievementsArray = [
  {
    pointValue: '0',
    activity: 'End of Activities',
    title: "yes1"
},
]
class Activities extends React.Component { 

  state={
    count: 0,
    arrayIndex: 0
  }

  updateCountState= () => {
    
      if(this.state.count < 3) {
        this.setState({
          count: this.state.count + 1
        })
      } else {
        this.setState({
          count: 0
        })  
        
        if(this.state.arrayIndex < 2) {
          this.setState({
            arrayIndex: this.state.arrayIndex+1
          })
        }
        else {
          this.setState({
            arrayIndex:0
          })
        }
      }
    
  }

  addToAchievementsArray = () => {
    achievementsArray.push(allArrays[this.state.arrayIndex][this.state.count])
  }

  static navigationOptions = {
    title: 'Activities'
  };

  render() {
    
  return (
    <ScrollView style={styles.container}>

      
    <Text style = {styles.activityText}>{allArrays[this.state.arrayIndex][this.state.count].activity}</Text>
    <Text style = {styles.activityText}>{allArrays[this.state.arrayIndex][this.state.count].pointValue}</Text>

    <TouchableHighlight 
        style = {styles.button}
        onPress= {this.updateCountState}>
      <Text style = {styles.buttonText}>Next</Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style = {styles.button}
        onPress= {this.addToAchievementsArray}>
      <Text style = {styles.buttonText}>Yes</Text>
      </TouchableHighlight>

      <View style={styles.cupertinoButtonInfo1Row}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Activities")}>
        <CupertinoButtonInfo1
          style={styles.cupertinoButtonInfo1}
        ></CupertinoButtonInfo1>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => this.props.navigation.navigate("ScreenBreak")}>
        <CupertinoButtonWarning
          style={styles.cupertinoButtonSuccess1}
        ></CupertinoButtonWarning>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Journalling")}>
        <CupertinoButtonSuccess
          style={styles.cupertinoButtonSuccess1}
        ></CupertinoButtonSuccess>
        </TouchableOpacity>
        </View>
      
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 100,
    height: 75,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 60
  },
  buttonText: {
    color: 'white',
    fontSize: 40
  },
  activityText: {
    color: 'black',
    fontSize: 40
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  },
  activityListContainer: {
    flexDirection: 'row',
    width: 500,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: '#1135FA',
},
pointValueContainer: {
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
},
middleContainer: {
    width: 100,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
},
  rect1: {
    width: 375,
    height: 99,
    backgroundColor: "rgba(120,214,247,1)",
    flexDirection: "row",
    marginTop: 77
  },
  biking1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 42
  },
  cupertinoSwitch1: {
    width: 45,
    height: 23,
    overflow: "visible",
    shadowColor: "rgb(0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 2,
    shadowRadius: 0,
    marginLeft: 30,
    marginTop: 13
  },
  biking1Row: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 31,
    marginTop: 25
  },
  walking1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 42
  },
  cupertinoSwitch2: {
    width: 45,
    height: 23,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginLeft: 8,
    marginTop: 13
  },
  walking1Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 19,
    marginRight: 27
  },
  rect2: {
    width: 375,
    height: 99,
    backgroundColor: "rgba(120,214,247,1)",
    flexDirection: "row",
    marginTop: 29
  },
  playWPet1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 34
  },
  cupertinoSwitch3: {
    width: 45,
    height: 23,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginLeft: 28,
    marginTop: 9
  },
  playWPet1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 19,
    marginTop: 29
  },
  cleanUp1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 42
  },
  cupertinoSwitch4: {
    width: 45,
    height: 23,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginLeft: 8,
    marginTop: 13
  },
  cleanUp1Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 11,
    marginRight: 27
  },
  rect3: {
    width: 375,
    height: 99,
    backgroundColor: "rgba(120,214,247,1)",
    flexDirection: "row",
    marginTop: 25
  },
  meditate1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 42
  },
  cupertinoSwitch5: {
    width: 45,
    height: 23,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginLeft: 16,
    marginTop: 13
  },
  meditate1Row: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 14,
    marginTop: 25
  },
  read1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 42
  },
  cupertinoSwitch6: {
    width: 45,
    height: 23,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginLeft: 78,
    marginTop: 13
  },
  read1Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 14,
    marginRight: 27
  },
  cupertinoButtonInfo1: {
    width: 100,
    height: 44
  },
  cupertinoButtonWarning1: {
    height: 44,
    width: 100,
    marginLeft: 27
  },
  cupertinoButtonSuccess1: {
    height: 44,
    width: 100,
    marginLeft: 24
  },
  cupertinoButtonInfo1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 11,
    marginRight: 13
  }
});

export default Activities;
