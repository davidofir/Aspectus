// From Perttu (plahteenlahti on GitHub) https://www.lahteenlahti.com/creating-a-clock-face-in-react-native-with-svg/

import React from "react";
import { polarToCartesian } from "../helpers/geometry";
import { G, Line, Text } from "react-native-svg";

type Props = {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: number;
  stroke: string;
};

const Hand = (props: Props) => {
  const { center, radius, angle, stroke, strokeWidth } = props;
  const { x, y } = polarToCartesian(center, center, radius/1.2, angle);

  return (
    <G>
      <Line
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        stroke={stroke}
      />
      <Line
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        strokeWidth={strokeWidth/3}
        strokeLinecap='round'
        stroke={"white"}
      />
    </G>
  );
};

export default Hand;