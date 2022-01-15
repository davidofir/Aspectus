import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PieChart, LineChart } from 'react-native-chart-kit';

let data = [];

for(let i=0; i<24; i++) {
    data.push({ name: i, hours: 1, color: `rgb(${i*10}, ${i*10}, ${i*10})`, legendFontColor: `rgb(${i*10}, ${i*10}, ${i*10})`, legendFontSize: 15 })
}

const Homescreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
              
            <PieChart
                data={data}
                width={300}
                height={220}
                chartConfig={{
                    backgroundColor: 'transparent',
                    // backgroundGradientFrom: '#fb8c00',
                    // backgroundGradientTo: '#ffa726',
                    // decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                accessor="hours"
                backgroundColor="transparent"
                paddingLeft="15"
            />
            <Text style={styles.label}>Today</Text>
            <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.eventButton}>
                <Text style={styles.eventText}>Intro to Java from 09:00 to 11:00</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.eventButton}>
                <Text style={styles.eventText}>Linux Development from 09:00 to 11:00</Text>
            </TouchableOpacity>
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
    }
});
export default Homescreen;