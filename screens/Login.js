import React, { useState, setErrorMsg } from 'react'
import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase_setup/firebase_config';


const img = { uri: "https://img.freepik.com/free-vector/mandala-patterns-blue-background_1308-69901.jpg" };

function Login() {

  const [username, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleSignup = () => {
    signInWithEmailAndPassword(auth, username, pass)
      .then(userCredentials => {
        console.log(username);
        alert("Here is the map.Please select the pick up and destination points");
        navigation.navigate("Svgmap");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            alert("Please enter a valid Email ID");
            break;
          case "auth/wrong-password":
            alert("Please enter a valid password");
            break;
          default:
            alert("Your account not found.Please Signup and then Login");
            break;
        }
      });
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.Middle}>

          <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.details}> Sign up</Text></TouchableOpacity>
          <Text style={styles.details}>If you don't have an account</Text>
        </View>

        {/* input fields */}
        <View style={styles.buttonStyle}>
          <View style={styles.input}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'black',
                  }}
                  _dark={{
                    color: "black.300",
                  }}

                />
              }
              variant="outline"
              placeholder="Username or Email"
              _light={{
                color: 'black',
                placeholderTextColor: 'black.400'
              }}
              _dark={{
                color: 'black',
                placeholderTextColor: "black"
              }}
              value={username}
              onChangeText={text => setUser(text)}
            />
          </View>
        </View>


        <View style={styles.buttonStyle}>
          <View style={styles.input}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: 'black',
                  }}
                  _dark={{
                    color: "black.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Password"
              _light={{
                color: 'black',
                placeholderTextColor: 'black.400'
              }}
              _dark={{
                color: 'black',
                placeholderTextColor: "black"
              }}
              value={pass}
              onChangeText={text => setPass(text)}
            />
          </View>
        </View>

        <View style={styles.buttonStyle1}>
          <Button style={styles.buttonDesign1} onPress={handleSignup}>
            MAP
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}



export default () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  LoginText: {
    marginTop: 30,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black'
  },
  Middle: {
    alignItems: 'center',
  },
  details: {
    marginTop: 20,
    fontSize: 20,
    color: 'darkblue'
  },
  input: {
    color: 'black',
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: '#026efd',
    borderWidth: 3,
    padding: 25,
    borderColor: 'black',
  },
  buttonStyle1: {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
  },
  buttonDesign1: {
    backgroundColor: '#026efd',
    borderWidth: 3,
    padding: 25,
    borderColor: 'black',
  },

  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
  },
})