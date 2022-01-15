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

const Face = (props: Props) => {
    const { radius, center, minutes, hours, width, height } = props;
    const minutesArray = new Array(minutes).fill(1);
    const hoursArray = new Array(hours).fill(1);
    return (
        <G>
            <Circle
                cx={width/2}
                cy={height/2}
                r={width/3.1}
                fill={"#5e1158"}
            />

            <Circle
                cx={width/2}
                cy={height/2}
                r={width/2.9}
                stroke="#ffb400"
                fill="transparent"
                strokeWidth="50"
                strokeDasharray={340}
                strokeDashoffset={400}
                rotation={260}
                originX={width/2}
                originY={height/2}
                strokeLinecap="butt"
            />
        </G>
    );
};

export default Face;
