import React from "react";
import { G, Line, Text } from "react-native-svg";
import { polarToCartesian } from "../helpers/geometry";
import Svg, { Circle } from "react-native-svg";

type Props = {
    radius: number;
    center: number;
    minutes: number;
    hours: number;
    width: number;
    height: number;
};

const Events = (props: Props) => {
    const { radius, center, minutes, hours, width, height } = props;
    const minutesArray = new Array(minutes).fill(1);
    const hoursArray = new Array(hours).fill(1);
    const { x, y } = polarToCartesian(center, center, radius / 1.2, 50);
    return (
        <G>
            {/* Sleep */}
            <Circle
                cx={width / 2}
                cy={height / 2}
                r={radius}
                stroke="#3F0536"
                fill="transparent"
                strokeWidth="30"
                strokeDasharray={radius * 2 * Math.PI}
                strokeDashoffset={700}
                rotation={245}
                originX={width / 2}
                originY={height / 2}
                strokeLinecap="butt"
            />

            {/* Anti-sleep (cover up the hack) */}
            {/* <Circle
                cx={width/2}
                cy={height/2}
                r={radius}
                stroke="lightgray"
                fill="transparent"
                strokeWidth="30"
                strokeDasharray={500}
                strokeDashoffset={0}
                rotation={30}
                originX={width/2}
                originY={height/2}
                strokeLinecap="butt"
            /> */}

            {/* Event */}
            <Circle
                cx={width / 2}
                cy={height / 2}
                r={radius}
                stroke="green"
                fill="transparent"
                strokeWidth="30"
                strokeDasharray={radius * 2 * Math.PI}
                strokeDashoffset={1000}
                rotation={59}
                originX={width / 2}
                originY={height / 2}
                strokeLinecap="butt"

            />

            <Text
                fill="white"
                stroke="white"
                fontSize="20"
                fontWeight="normal"
                x={x - 30}
                y={y - 215}
                textAnchor="middle"
                rotation={34}
            >
                Sleep
            </Text>


        </G>
    );
};

export default Events;
