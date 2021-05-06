import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import CupertinoSwitch from "../components/CupertinoSwitch";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import { TouchableOpacity } from "react-native-gesture-handler";


class Journalling extends React.Component {
  static navigationOptions = {
    title: 'Journalling'
  };
  

  render() {
  return (
    <ScrollView style={styles.container}>

    {allArrays[2].map((journalObject) =>(
          <View style={styles.journalListContainer}>
             <View style={styles.pointValueContainer}>
               <Text style={styles.textStyle}>{journalObject.pointValue}</Text>
              </View>
                    
             <View style={styles.middleContainer}>
               <Text style={styles.textStyle}>{journalObject.activity}</Text>
                 
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
  journalListContainer: {
    flexDirection: 'row',
    width: 500,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: '#674FFF',
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
    marginTop: 77
  },
  cupertinoSwitch1: {
    width: 45,
    height: 23,
    position: "absolute",
    left: 288,
    top: 22,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  jfie1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 28,
    textAlign: "center"
  },
  cupertinoSwitch1Stack: {
    width: 333,
    height: 66,
    marginTop: 16,
    marginLeft: 15
  },
  cupertinoSwitch2: {
    width: 45,
    height: 23,
    position: "absolute",
    left: 288,
    top: 26,
    overflow: "visible",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
  },
  walking1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 22,
    textAlign: "center"
  },
  cupertinoSwitch2Stack: {
    width: 333,
    height: 75,
    marginTop: 26,
    marginLeft: 15
  },
  rect2: {
    width: 375,
    height: 99,
    backgroundColor: "rgba(120,214,247,1)",
    flexDirection: "row",
    marginTop: 16
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
    marginLeft: 13,
    marginTop: 17
  },
  playWPet1Row: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 11,
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
    marginLeft: 16,
    marginTop: 13
  },
  cleanUp1Row: {
    height: 64,
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
    marginTop: 10
  },
  meditate1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 18,
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
    marginLeft: 30,
    marginTop: 20
  },
  meditate1Row: {
    height: 63,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 11,
    marginTop: 18
  },
  knit1: {
    fontFamily: "Arial",
    color: "#121212",
    fontSize: 24,
    textAlign: "center"
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
    marginLeft: 42,
    marginTop: 16
  },
  knit1Row: {
    height: 56,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 23,
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
    marginTop: 46,
    marginLeft: 11,
    marginRight: 13
  }
});

export default Journalling;
