// From Perttu (plahteenlahti on GitHub) https://www.lahteenlahti.com/creating-a-clock-face-in-react-native-with-svg/

import React from "react";
import { Line } from "react-native-svg";
import { polarToCartesian } from "../helpers/geometry";

type Props = {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
};

const Hand = (props: Props) => {
  const { center, radius, angle, stroke, strokeWidth } = props;
  const { x, y } = polarToCartesian(center, center, radius/1.2, angle);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      stroke={stroke}
    />
  );
};

export default Hand;