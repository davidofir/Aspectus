import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
export default function DatepickerComponent(props) {
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        props.setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={{ margin: 8 }}>
            <View style={styles.container}>
                <Text>{props.date.toLocaleString()}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
                <Button title={`${props.fieldName} Date`} onPress={showDatepicker} >
                </Button>
                <Button onPress={showTimepicker} title={`${props.fieldName} Time`} />
            </View >
            {
                show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={props.date}
                        mode={mode}
                        minimumDate={props.minDate}
                        maximumDate={props.maxDate}
                        display="default"
                        onChange={onChange}
                    />
                )
            }
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: "center"
    },
});