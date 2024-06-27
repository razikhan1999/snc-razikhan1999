import { useEffect, useState } from "react";

/**
 * Returns the current time updated at regular intervals.
 *
 * @param {number} interval - The time interval in milliseconds. Defaults to 1000ms.
 * @return {Date} The current time.
 */
const useCurrentTime = (interval: number = 1000): Date => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(timerId);
  }, [interval]);

  return time;
};

export default useCurrentTime;
