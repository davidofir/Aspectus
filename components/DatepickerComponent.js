import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonComponent from './ButtonComponent';
import colors from '../constants/colors';
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
                <TouchableOpacity style={styles.button} onPress={showDatepicker} >
                    <Text>{`${props.fieldName} Date`}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimepicker} style={styles.button}>
                    <Text>{`${props.fieldName} Time`}</Text>
                </TouchableOpacity>
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
    button: {
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: colors.secondary
    }
});