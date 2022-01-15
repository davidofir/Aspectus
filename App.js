import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen';
import * as Calendar from 'expo-calendar';
import CalendarClass from './utils/CalendarClass';


import AddEvent from './screens/AddEvent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Settings from './screens/Settings';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Homescreen} options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 8 }} onPress={() => {
              navigation.navigate("AddEvent")
            }} >
              <Icon name='add' type='material' />
            </TouchableOpacity>
          )
          , headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 8 }} onPress={() => {
              navigation.navigate("Settings")
            }} >
              <Text>Settings</Text>
            </TouchableOpacity>
          )
        })

        }
        />

        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>

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
