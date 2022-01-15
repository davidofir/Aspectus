import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { useWindowDimensions } from 'react-native';
import { Card } from 'react-native-elements';

const Homescreen = ({ navigation }) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const maxElementWidth = windowWidth / 1.2;

    let data = [];

    for(let i=0; i<24; i++) {
        data.push({ name: i, hours: 1, color: `rgb(${i*10}, ${i*10}, ${i*10})`})
    }
    return (
        <View style={styles.container}>
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
                <Text style={styles.label}>This Week</Text>
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
    }
});
export default Homescreen;