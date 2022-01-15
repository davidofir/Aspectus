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
            <TextInput placeholder='Event Title' style={{ marginHorizontal: 16 }} onChangeText={setEventTitle} />
            <DatepickerComponent date={startDate} minDate={today} maxDate={endDate} setDate={setStartDate} fieldName="Start" />

            <DatepickerComponent date={endDate} minDate={startDate} setDate={setEndDate} fieldName="End" />

            <TextInput placeholder='Location' style={{ marginHorizontal: 16 }} onChangeText={setLocation} />
            <View style={styles.buttonAlign}>
                <TouchableOpacity>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonAlign: { flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 16 }
});
export default AddEvent;