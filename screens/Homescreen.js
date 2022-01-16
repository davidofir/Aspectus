import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { useWindowDimensions } from 'react-native';
import { Card } from 'react-native-elements';
import Clock from '../components/Clock';
import { CalendarAccessLevel, createEventAsync, getEventsAsync } from 'expo-calendar';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';

const Homescreen = ({ navigation }) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const maxElementWidth = windowWidth / 1.2;

    //function to create event
    createEventAsync(global.defaultCalendarID, {
        title: 'wow',
        startDate: new Date(),
        endDate: new Date().setHours(20)})

    //figure this out
    var todaysEvents = getEventsAsync([global.defaultCalendarID],new Date().setHours(5), new Date().setHours(23));
    console.log(todaysEvents);
    let data = [];

    for(let i=0; i<24; i++) {
        data.push({ name: i, hours: 1, color: `rgba(${(i%2+15)*10}, ${(i%3+0)*1}, ${(i%3+5)*1}, 0.5)`})
    }
    return (
        <View style={styles.container}>
            <Clock/>
            {/* <View style={styles.clock}>
                <PieChart
                    data={data}
                    width={maxElementWidth}
                    height={300}
                    chartConfig={{
                        backgroundColor: 'none',
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    accessor="hours"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute={true}
                    hasLegend={false}
                    center={[50,0,0]}
                />
            </View> */}
            
            <Card>
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
        backgroundColor: '#fff',
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
    left: 30,
    right: 0,
    top: 0,
    bottom: 210,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
export default Homescreen;