// From Perttu (plahteenlahti on GitHub) https://www.lahteenlahti.com/creating-a-clock-face-in-react-native-with-svg/

export const to24hClock = (hour: number): number => {
  return hour > 24 ? hour - 24 : hour;
};

type TimeObject = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const getTime = (): TimeObject => {
  const date = new Date();
  const hours = (to24hClock(date.getHours()) / 24) * 360;
  const minutes = (date.getMinutes() / 60) * 360;
  const seconds = (date.getSeconds() / 60) * 360;
  return { hours, minutes, seconds };
};