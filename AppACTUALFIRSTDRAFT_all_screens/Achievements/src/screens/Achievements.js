import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, ScrollView} from "react-native";



class Achievements extends React.Component  {
  
  static navigationOptions = { 
    title: 'Achievements'
  }; 

  state = {
    count: 0,
    pointTotal: 0,
    popCounter: achievementsArray.length - 1
  }

  updateNo= () => {
    
    if(this.state.count < achievementsArray.length - 1) {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: 0
      })  
    }
}

  shortenAchievementsArray= () => {

    if(achievementsArray.length > 1) {
      
        achievementsArray.pop()
    }
    
  }


  updatePointTotal = () => {
    this.setState({
      pointTotal: this.state.pointTotal + parseInt(achievementsArray[this.state.count].pointValue)
    })
    if(this.state.count < achievementsArray.length - 1) {
      this.setState({
        count: this.state.count + 1
      })
    } 
    else {
      this.setState({
        count: 0
      })  
    }
  }

  render() {
  return ( 
    <ScrollView style={styles.container}>
     
    
    <TouchableHighlight 
        style = {styles.button}
        onPress= {this.updatePointTotal}>
      <Text style = {styles.buttonText}>Yes</Text>
      </TouchableHighlight>
      
  <Text style={styles.activityText}>{achievementsArray[this.state.count].activity}</Text>
  <Text style={styles.activityText}>{achievementsArray[this.state.count].pointValue}</Text>
  <Text style = {styles.activityText}>{"Point Total: " + this.state.pointTotal}</Text>

  
      <TouchableHighlight 
        style = {styles.button}
        onPress= {this.updateNo}>
      <Text style = {styles.buttonText}>No</Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style = {styles.button}
        onPress= {this.shortenAchievementsArray}>
      <Text style = {styles.buttonText}>Pop</Text>
      </TouchableHighlight>

      {achievementsArray.map((achievementTask) =>(
        <View style={styles.activityListContainer}>
        <View style={styles.pointValueContainer}>
          <Text style={styles.textStyle}>{achievementTask.pointValue}</Text>
         </View>
               
        <View style={styles.middleContainer}>
          <Text style={styles.textStyle}>{achievementTask.activity}</Text>
        </View>
      
      </View>
      ))}

      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  rightButtonContainer: {
    alignItems: 'flex-end',
  },
  cupertinoHeaderWithAddButton6: {
    height: 44,
    width: 375,
    marginTop: 53,
    alignSelf: "center"
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
});

export default Achievements;
