import React from "react";
import { polarToCartesian } from "../helpers/geometry";
import Svg, { Circle, G, Line, Text } from "react-native-svg";

type Props = {
    radius: number;
    center: number;
    minutes: number;
    hours: number;
    width: number;
    height: number;
};

const Face = (props: Props) => {
    const { radius, center, minutes, hours, width, height } = props;
    const minutesArray = new Array(minutes).fill(1);
    const hoursArray = new Array(hours).fill(1);
    const time = new Date();
    return (
        <G>
            <Circle
                cx={width / 2}
                cy={height / 2}
                r={radius / 1.4}
                fill={"#3F0536"}
            />

            <Circle
                cx={width / 2}
                cy={height / 2}
                r={radius / 1.5}
                stroke="#ffb400"
                fill="transparent"
                strokeWidth={25}
                strokeDasharray={radius * 2 * Math.PI}
                strokeDashoffset={840}
                rotation={20}
                originX={width / 2}
                originY={height / 2}
                strokeLinecap="butt"
            />

            <Circle
                cx={width / 2}
                cy={height / 2}
                r={radius / 1.6}
                fill={"seagreen"}
            />

            <Text
                fill="white"
                stroke="white"
                fontSize="20"
                fontWeight="normal"
                x={width / 2}
                y={height / 2 - 60}
                textAnchor="middle"
                rotation={0}
            >
                {`${time.getHours()}:${time.getMinutes()}`}
            </Text>

        </G>
    );
};

export default Face;
