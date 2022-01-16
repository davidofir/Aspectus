import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Calendar from "expo-calendar"
import { TextInput } from 'react-native-gesture-handler';
import DatepickerComponent from '../components/DatepickerComponent';
const AddEvent = ({ navigation }) => {
    const today = new Date(Date.now())
    const [eventIdInCalendar, setEventIdInCalendar] = useState("")
    const [eventTitle, setEventTitle] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const addEventToCalendar = async () => {
        try {
            const eventId = await Calendar.createEventAsync("1", {
                title: eventTitle,
                startDate: startDate,
                endDate: endDate,
                location: location
            })
            //Calendar.openEventInCalendar(eventIdInCalendar)// that will give the user the ability to access the event in phone calendar 
            setEventIdInCalendar(eventId)
        }
        catch (e) {
            console.log({ e })
        }
    }
    useEffect(() => {
        console.log(Calendar)
    }, [])
    return (
        <View style={styles.container}>
            <TextInput placeholder='Event Title' style={{ marginHorizontal: 16 }} onChangeText={setEventTitle} />
            <DatepickerComponent date={startDate} minDate={today} maxDate={endDate} setDate={setStartDate} fieldName="Start" />

            <DatepickerComponent date={endDate} minDate={startDate} setDate={setEndDate} fieldName="End" />

            <TextInput placeholder='Location' style={{ marginHorizontal: 16 }} onChangeText={setLocation} />
            <View style={styles.buttonAlign}>
                <TouchableOpacity onPress={() => addEventToCalendar()}>
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