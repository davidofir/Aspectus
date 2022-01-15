// From Perttu (plahteenlahti on GitHub) https://www.lahteenlahti.com/creating-a-clock-face-in-react-native-with-svg/

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

const Markings = (props: Props) => {
  const { radius, center, minutes, hours, width, height } = props;
  const minutesArray = new Array(minutes).fill(1);
  const hoursArray = new Array(hours).fill(1);

  const minuteSticks = minutesArray.map((minute, index) => {
    const start = polarToCartesian(center, center, radius, index * 5);
    const end = polarToCartesian(center, center, radius, index * 5);
    return (
      <Circle
          cx={width/2}
          cy={height/2}
          r={width/2.3}
          stroke="lightgray"
          fill="transparent"
          strokeWidth="30"
          // strokeDasharray={50}
          // strokeDashoffset={0}
          rotation={0}
          originX={width/2}
          originY={height/2}
          strokeLinecap="butt"
      />
      // <Line
      //   stroke='black'
      //   strokeWidth={2}
      //   strokeLinecap='round'
      //   key={index}
      //   x1={start.x}
      //   x2={end.x}
      //   y1={start.y}
      //   y2={end.y}
      // />
    );
  });

  const hourSticks = hoursArray.map((hour, index) => {
    const start = polarToCartesian(center, center, radius - 10, index * 15);
    const end = polarToCartesian(center, center, radius, index * 15);
    const time = polarToCartesian(center, center, radius - 35, index * 15);

    return (
      <G key={index}>
        {/* <Line
          stroke='black'
          strokeWidth={3}
          strokeLinecap='round'
          x1={start.x}
          x2={end.x}
          y1={start.y}
          y2={end.y}
        /> */}
        <Text
          textAnchor='middle'
          fontSize='17'
          fontWeight='bold'
          fill='black'
          alignmentBaseline='central'
          x={time.x}
          y={time.y}>
          {index === 0 ? 24 : index}
        </Text>
      </G>
    );
  });

  return (
    <G>
      {minuteSticks}
      {hourSticks}
    </G>
  );
};

export default Markings;