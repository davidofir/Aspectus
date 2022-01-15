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
    return (
        <G>
            <Circle
                cx={width/2}
                cy={height/2}
                r={width/2.5}
                fill={"purple"}
            />
            <Circle
                cx={width/2}
                cy={height/2}
                r={width/2.5}
                fill={"yellow"}
            />
            <Circle
                cx={width/2}
                cy={height/2}
                r={width/3.2}
                fill={"white"}
            />
        </G>
    );
};

export default Events;
