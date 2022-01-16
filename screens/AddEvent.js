import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Calendar from "expo-calendar"
import { TextInput } from 'react-native-gesture-handler';
import DatepickerComponent from '../components/DatepickerComponent';
import { color } from 'react-native-elements/dist/helpers';
import ButtonComponent from '../components/ButtonComponent';
import colors from '../constants/colors';
const AddEvent = ({ navigation }) => {
    const today = new Date(Date.now())
    var twoDays = new Date()
    console.log(today.getDay())
    twoDays.setDate(today.getDate() + 2)
    const [eventIdInCalendar, setEventIdInCalendar] = useState("")
    const [eventTitle, setEventTitle] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(twoDays);
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
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
                console.log('Here are all your calendars:');
                console.log({ calendars });
            }
        })();
    }, []);
    return (
        <View style={styles.container}>
            <TextInput placeholder='Event Title' style={styles.textbox} onChangeText={setEventTitle} />
            <DatepickerComponent date={startDate} minDate={today} maxDate={endDate} setDate={setStartDate} fieldName="Start" />

            <DatepickerComponent date={endDate} minDate={startDate} setDate={setEndDate} fieldName="End" />

            <TextInput placeholder='Location' style={styles.textbox} onChangeText={setLocation} />
            <View style={styles.buttonAlign}>
                <ButtonComponent background={colors.secondary} buttonTitle={"Add"} clickEvent={() => addEventToCalendar()} />
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    buttonAlign: { flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 16 },
    textbox: {
        marginHorizontal: 5,
        backgroundColor: colors.textInput,
        margin: 20,
        borderColor: "black",
        borderWidth: 3,
        color: "black",
        padding: 7,

    },
});
export default AddEvent;