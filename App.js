import React from "react";
import Login from "./screens/Login";
import signup from "./screens/Signup";
import Svgmap from"./screens/Svgmap"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from './firebase_setup/firebase_config'; 

const Stack = createStackNavigator();

function App() 
{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/> 
      <Stack.Screen name="Signup" component={signup}/>
      <Stack.Screen name="Svgmap" component={Svgmap}/>
    </Stack.Navigator>
  )
}

export default()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}