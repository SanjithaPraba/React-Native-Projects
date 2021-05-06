import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import CupertinoSwitch from "../components/CupertinoSwitch";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import { TouchableOpacity } from "react-native-gesture-handler";

class ScreenBreak extends React.Component {

  static navigationOptions = {
    title: 'ScreenBreak'
  };

  render() {
  return (
    <ScrollView style={styles.container}>

{allArrays[1].map((screenObject) =>(
          <View style={styles.screenBreakListContainer}>
             <View style={styles.pointValueContainer}>
               <Text style={styles.textStyle}>{screenObject.pointValue}</Text>
              </View>
                    
             <View style={styles.middleContainer}>
               <Text style={styles.textStyle}>{screenObject.activity}</Text>
                 
             </View>

             <CupertinoSwitch style={styles.cupertinoSwitch1}></CupertinoSwitch>

                    
          </View>
      ))}

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
}}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  },
  screenBreakListContainer: {
    flexDirection: 'row',
    width: 500,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: '#0B7C53',
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
  jfie1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 28,
    textAlign: "center"
  },
  cupertinoSwitch1: {
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
    marginLeft: 51,
    marginTop: 22
  },
  jfie1Row: {
    height: 66,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 51,
    marginTop: 16
  },
  walking1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 22,
    textAlign: "center"
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
    marginTop: 13
  },
  walking1Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 15,
    marginRight: 27
  },
  rect2: {
    width: 375,
    height: 99,
    backgroundColor: "rgba(120,214,247,1)",
    flexDirection: "row",
    marginTop: 28
  },
  playWPet1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 24,
    textAlign: "center"
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
    marginLeft: 9,
    marginTop: 17
  },
  playWPet1Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 10,
    marginTop: 21
  },
  cleanUp1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 27,
    textAlign: "center"
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
    marginLeft: 14,
    marginTop: 13
  },
  cleanUp1Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 15,
    marginRight: 27
  },
  rect3: {
    width: 375,
    height: 99,
    backgroundColor: "rgba(120,214,247,1)",
    flexDirection: "row",
    marginTop: 10
  },
  meditate1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 26,
    textAlign: "center"
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
    marginLeft: 33,
    marginTop: 18
  },
  meditate1Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 25,
    marginTop: 20
  },
  knit1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 22
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
    marginLeft: 65,
    marginTop: 14
  },
  knit1Row: {
    height: 75,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 45,
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
    marginTop: 25,
    marginLeft: 11,
    marginRight: 13
  }
});

export default ScreenBreak;
