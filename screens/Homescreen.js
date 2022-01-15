import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PieChart, LineChart } from 'react-native-chart-kit';

// const data = [
//     { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
//     { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
//   ]

const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]

const Homescreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <PieChart
                data={data}
                // data={{
                // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                // datasets: [{
                //     data: [
                //     Math.random() * 100,
                //     Math.random() * 100,
                //     Math.random() * 100,
                //     Math.random() * 100,
                //     Math.random() * 100,
                //     Math.random() * 100
                //     ]
                // }]
                // }}
                width={300}
                height={220}
                chartConfig={{
                backgroundColor: '#e26a00',
                // backgroundGradientFrom: '#fb8c00',
                // backgroundGradientTo: '#ffa726',
                // decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                // bezier
                // style={{
                // marginVertical: 8,
                // borderRadius: 16
                // }}
            /> */}
            
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
                accessor="population"
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
});
export default Homescreen;