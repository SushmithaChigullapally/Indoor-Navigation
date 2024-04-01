import React, { useState, setErrorMsg } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { PreventRemoveContext, useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase_setup/firebase_config'
const img = { uri: "https://img.freepik.com/free-vector/mandala-patterns-blue-background_1308-69901.jpg" };

function Signup() {

  const [username, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [pass_c, setPass_c] = useState('')

  const handleSignup = () => {
    if (pass.length >= 7 && pass.length < 13 && pass === pass_c) {
      createUserWithEmailAndPassword(auth, username, pass)
        .then(userCredentials => {
          console.log(username);
          alert("Registered succesfully.Now you can login.");
          navigation.navigate("Login");
        })
        .catch(error => {
          switch (error.code) {
            case "auth/email-already-in-use":
              alert("Email alrady in use");
              break;
            case "auth/invalid-email":
              alert("Please enter a valid Email ID");
              break;
          }
        });
    }
    else if (pass.length < 7 || pass.length >= 13) {
      alert("Password should be atleast 7 charecters and less than 13 characters");
    }
    else {
      alert("Password dosen't match");
    }
  }

  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        <View style={styles.Mid}>
          <Text style={styles.SiUpText}>SignUp</Text>
        </View>



        <View style={styles.Mid}>

          <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.details}>Login</Text></TouchableOpacity>
          <Text style={styles.details}>If you already have an account </Text>
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
                    color: "black",
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

        {/* Password */}
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

        {/* Password confirmation */}
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
              placeholder="Confirm Password"
              _light={{
                color: 'black',
                placeholderTextColor: 'black.400'
              }}
              _dark={{
                color: 'black',
                placeholderTextColor: "black"
              }}

              value={pass_c}
              onChangeText={text => setPass_c(text)}
            />
          </View>
        </View>


        <View style={styles.buttonStyle1}>
          <Button style={styles.buttonDesign}
            onPress={handleSignup}>
            Register Now!!
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Signup />
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
  SiUpText: {
    marginTop: 30,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black'
  },
  Mid: {
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
    borderWidth: 3,
    padding: 25,
    borderColor: 'black',

    backgroundColor: 'blue'
  },
  buttonStyle1: {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
  },


  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around',
  },
})