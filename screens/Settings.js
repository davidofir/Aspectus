import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Calendar from 'expo-calendar';
import defaultCalendarID from '../App';

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button
                onPress={getDefaultCalendarSource()}
                title="check calendars"
                color="#841584"
            />
        </View>
    )
}

async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
});
export default Settings;