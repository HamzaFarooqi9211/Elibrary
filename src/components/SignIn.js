import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
//import React, { useState,Component } from 'react';
import * as React from 'react';
import { useState, Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';


export default function SignIn(props) {

    
  
  
    const [rollNo, setRollNo] = useState();
    const [password, setPassword] = useState();
    const [main, setMain] = useState();
  
    const textInputHandler = (enteredText) => {
      setRollNo(enteredText);
    }
  
    const passInputHandler = (enteredText) => {
      setPassword(enteredText);
    }
  
  
  
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('rollNo', rollNo);
      }
      catch (e) {
  
        console.log(e);
      }
    }
  
    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('rollNo')
        if (value != null) {
  
          setMain(value);
  
        }
  
      }
      catch (e) {
        console.log('error reading');
      }
    }
    const signIn = async () => {
      console.log("reach");
      await storeData();
      await retrieveData();
      if (rollNo != null && password != null)
        navigation.navigate('HomePage', { rollNo: rollNo, pass: password });
      else {
        Alert.alert( 'Error','Please Enter RollNo or Password',
          [
            {
  text:'Hi',
  style:''
            },
            {
              text:'shutup'
            }
          ],
          
        );
      }
  
    }
  
  
    return (
  
      <View style={{ backgroundColor: "#ff6060", width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <View style={styles.innerContainer}>
          <Text style={styles.SignIn}>LGU Pocket Liberary</Text>
          <View style={styles.innerMostContainer}>
            <Image style={styles.image} source={{ uri: "https://i.pinimg.com/564x/ae/b8/91/aeb8910b60a3c2cb7e751eac7802cbe4.jpg" }}>
  
            </Image>
            <TextInput style={styles.rollNumber} onChangeText={textInputHandler} placeholder="Roll Number" >
  
            </TextInput>
            <TextInput style={styles.password} onChangeText={(enteredText) => setPassword(enteredText)} secureTextEntry={true} placeholder="Password">
  
            </TextInput>
            <TouchableOpacity style={styles.SignInBtn} title="Sign In" onPress={()=>props.navigation.navigate('MainPage')}><Text style={styles.appButtonText}>Sign IN</Text></TouchableOpacity>
  
            <Text style={styles.register} accessibilityRole='link'> Forget Password</Text>
  
  
  
          </View>
  
          <Text style={styles.register}>Register</Text>
  
  
        </View>
  
      </View>
  
    );
  }

  const styles = StyleSheet.create({

    SignInBtn: {
      elevation: 8,
      width: '99%',
      height: '15%',
      borderRadius: 10,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignSelf: 'center'
    },
    appButtonText: {
      fontSize: 15,
      color: "#5EB9FE",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    screen:
    {
      flexDirection: "column",
      width: "80%",
      height: 300,
      justifyContent: "center",
      alignItems: "center"
    },
    innerContainer: {
      backgroundColor: "#ff6060",
      width: "80%",
      height: '70%',
      alignSelf: 'center',
      marginBottom: 50,
      marginTop: 180,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
  
    },
    SignIn: {
      color: '#fff',
      fontSize: 30
    },
    register: {
      color: '#fff',
      alignSelf: 'center'
    },
    innerMostContainer: {
      width: '100%',
      height: '50%',
      backgroundColor: '#ff6060',
      justifyContent: 'space-between'
    },
  
    image: {
      width: 70,
      height: 70,
      alignSelf: 'center',
      borderRadius: 10
    },
    rollNumber: {
      
      borderBottomColor: '#fff',
      borderBottomWidth: 0.5,
      width: '50%',
      alignSelf: 'center',
      textAlign: 'center'
  
    },
    password: {
      borderBottomColor: '#fff',
      borderBottomWidth: 0.5,
      width: '50%',
      alignSelf: 'center',
      textAlign: 'center'
    }
  
  });