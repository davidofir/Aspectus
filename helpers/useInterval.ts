// From Perttu (plahteenlahti on GitHub) https://www.lahteenlahti.com/creating-a-clock-face-in-react-native-with-svg/

import React, { useState, useEffect, useRef } from "react";

// From Dan Abramov https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}