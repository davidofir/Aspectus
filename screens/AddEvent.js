import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import DatepickerComponent from '../components/DatepickerComponent';
const AddEvent = ({ navigation }) => {
    const today = new Date(Date.now())
    const [eventTitle, setEventTitle] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);

    return (
        <View style={styles.container}>

            <DatepickerComponent date={startDate} setDate={setStartDate} fieldName="Start" />

            <DatepickerComponent date={endDate} setDate={setEndDate} fieldName="End" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputs: {
        marginHorizontal: 8
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
});
export default AddEvent;