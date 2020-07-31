import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/components/MainPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/HomePage'
import firebase from './src/firebase/config'
import BooksProfile from './src/components/BooksProfile'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from './src/components/SignIn';

const Drawer = createDrawerNavigator();


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>

<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="MainPage"
          component={MainPage}/>
        <Drawer.Screen  name="HomePage" component={HomePage} />
        <Drawer.Screen name="BooksProfile" component={BooksProfile}/>
        <Drawer.Screen name="SignIn" component={SignIn}/>
      </Drawer.Navigator>
    
    </NavigationContainer>
  );
};

function storeHighScore(userId, score) {
  firebase.database().ref('users/' + userId).set({
    highscore: score
  });
}


export function App() {

  return (
    <View style={styles.container}>
     <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MyStack;