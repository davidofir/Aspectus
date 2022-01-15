import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const Homescreen = ({ navigation }) => {
    return ( 
        <View style = { styles.container } >
        <Text> Home </Text> 
        </View >
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
});
export default Homescreen;