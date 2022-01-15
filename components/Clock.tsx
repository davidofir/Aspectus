// From Perttu (plahteenlahti on GitHub) https://www.lahteenlahti.com/creating-a-clock-face-in-react-native-with-svg/

import React, { useState } from "react";
import Svg, { Circle } from "react-native-svg";
import { Dimensions } from "react-native";
import Markings from "./Markings";
import Hand from "./Hand";
import { useInterval } from "../helpers/useInterval";
import { getTime } from "../helpers/time";
import Events from "./Events";
import Face from "./Face";

const { width } = Dimensions.get("window");
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const hourStickCount = 24;
const minuteStickCount = 24 * 6;

const Clock = () => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 1000);

  return (
    <Svg height={width} width={width}>
      <Face
        minutes={minuteStickCount}
        hours={hourStickCount}
        radius={radius}
        center={center}
        width={width}
        height={width}
      />

      <Markings
        minutes={minuteStickCount}
        hours={hourStickCount}
        radius={radius}
        center={center}
        width={width}
        height={width}
      />
      <Hand
        angle={time.seconds}
        center={center}
        radius={radius}
        stroke='red'
        strokeWidth={1}
      />
      <Hand
        angle={time.minutes}
        center={center}
        radius={radius}
        stroke='red'
        strokeWidth={5}
      />
      <Hand
        angle={time.hours}
        center={center}
        radius={radius/1.5}
        stroke='red'
        strokeWidth={7}
      />
      <Circle
          cx={width/2}
          cy={width/2}
          r={width/50}
          fill={"black"}
      />
      <Circle
          cx={width/2}
          cy={width/2}
          r={width/60}
          fill={"white"}
      />
      <Circle
          cx={width/2}
          cy={width/2}
          r={width/80}
          fill={"black"}
      />
      <Events
        minutes={minuteStickCount}
        hours={hourStickCount}
        radius={radius}
        center={center}
        width={width}
        height={width}
      />
    </Svg>
  );
};

export default Clock;