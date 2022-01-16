import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { Card } from 'react-native-elements';
import Clock from '../components/Clock';
import { CalendarAccessLevel, createEventAsync, getEventsAsync } from 'expo-calendar';

const Homescreen = ({ navigation }) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const maxElementWidth = windowWidth / 1.2;

    //function to create event
    createEventAsync(global.defaultCalendarID, {
        title: 'wow',
        startDate: new Date(),
        endDate: new Date().setHours(20)
    })

    //figure this out
    var todaysEvents = getEventsAsync([global.defaultCalendarID], new Date().setHours(5), new Date().setHours(23));
    console.log(todaysEvents);
    let data = [];

    for (let i = 0; i < 24; i++) {
        data.push({ name: i, hours: 1, color: `rgba(${(i % 2 + 15) * 10}, ${(i % 3 + 0) * 1}, ${(i % 3 + 5) * 1}, 0.5)` })
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
            <Clock />

            <Card style={styles.cards}>
                <Text style={styles.label}>Today</Text>
                <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.eventButton}>
                    <Text style={styles.eventText}>Intro to Java from 09:00 to 11:00</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.eventButton}>
                    <Text style={styles.eventText}>Linux Development from 09:00 to 11:00</Text>
                </TouchableOpacity>
            </Card>
            <Card>
                <Text style={styles.label}>Upcoming</Text>
                <View style={styles.week}>
                    <Card>
                        {/* Each day will have a card */}
                    </Card>
                    <Card>
                        {/* Each day will have a card */}
                    </Card>
                    <Card>
                        {/* Each day will have a card */}
                    </Card>
                    <Card>
                        {/* Each day will have a card */}
                    </Card>
                </View>
            </Card>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        backgroundColor: '#EAC435',
        alignItems: 'center',
        justifyContent: "center",
    },

    label: {
        color: 'lightgray'
    },

    week: {
        flexDirection: 'row'
    },

    clock: {
        position: 'absolute',
<<<<<<< HEAD
        left: 30,
        right: 0,
        top: 0,
        bottom: 210,
        alignItems: 'center',
        justifyContent: 'center'
=======
    left: 30,
    right: 0,
    top: 0,
    bottom: 210,
    alignItems: 'center',
    justifyContent: 'center'
    },

    cards: {
        backgroundColor: '#0D3B66',
        color: "#fff"
>>>>>>> 537612efd798728de91b6387f3d61ba498969f9e
    }


});
export default Homescreen;