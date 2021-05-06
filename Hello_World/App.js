import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import SecondButton from "./Home Screen Components/src/components/SecondButton";
import CupertinoButtonLight from "./Home Screen Components/src/components/CupertinoButtonLight";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
        name="Activity Screen" 
        component={ActivityScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.peacePlanner}>New Planner</Text>
      <SecondButton style={styles.cupertinoButtonInfo}></SecondButton>
      <CupertinoButtonLight
        style={styles.cupertinoButtonLight}
      ></CupertinoButtonLight>

      <Button
        title = "Go to Activity Screen"
        onPress={() =>
          navigation.navigate('Activity Screen')
        }
      />
    </View>
  );
};

const ActivityScreen = ({ navigation }) => {
  return <Text>This the activity page</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(213,255,235,1)"
  },
  peacePlanner: {
    fontFamily: "Arial",
    color: "#121212",
    height: 59,
    width: 263,
    fontSize: 40,
    marginTop: 146,
    marginLeft: 56
  },
  cupertinoButtonInfo: {
    height: 92,
    width: 205,
    backgroundColor: "#ffffff",
    marginTop: 109,
    marginLeft: 85
  },
  cupertinoButtonLight: {
    height: 92,
    width: 205,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 75,
    marginLeft: 85
  }
});

export default App;

