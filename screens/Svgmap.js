import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, useWindowDimensions } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { Button } from 'native-base';
import { auth } from '../firebase_setup/firebase_config'

// function Logout(){
//     const handlelogout = () => {
//             alert("Logout Successfull");
//             navigation.navigate("Login");
//             }   
//     <View style={styles.buttonStyle1}>
//           <Button style={styles.buttonDesign}
//             onPress={handlelogout}>
//             Logout
//           </Button>
//         </View>
// }
const Map =({ navigation,route})=>{
    
    
    alert("Hiii.!")
    const gotoUser = () => {
        const { username } = route.params;
        navigation.navigate('User', { "username": username })
    }
    const width = useWindowDimensions();
    return (
        <View>
        <ScrollView style={{flex:1}}>
                <WebView
                    originWhitelist={['*']}
                    source={{ uri:"https://symphonious-zuccutto-82d0e5.netlify.app" }}
                    style={{ height: 900, width:430, marginRight: 5,flex:1}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}
                    scalesPageToFit={true}
                />
        </ScrollView>
        </View>
    );
};

export default Map;