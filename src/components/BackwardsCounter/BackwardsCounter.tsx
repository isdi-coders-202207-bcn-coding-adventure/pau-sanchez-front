import { useCallback, useEffect, useState } from "react";
import CounterSection from "../CounterSection/CounterSection";
import BackwardsCounterStyled from "./BackwardsCounterStyled";
import { TimerObject } from "../../interfaces/interfaces";

interface BackwardsCounterProps {
  difference: number;
  timerObject: TimerObject;
}

const initialTimerObject = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

const BackwardsCounter = ({
  difference,
  timerObject,
}: BackwardsCounterProps): JSX.Element => {
  const [time, setTime] = useState(initialTimerObject);
  const [seconds, setSeconds] = useState(difference);

  const getActualTime = useCallback(() => {
    timerObject.seconds = Math.floor(seconds % 60);
    timerObject.minutes = Math.floor((seconds % 3600) / 60);
    timerObject.hours = Math.floor((seconds % (3600 * 24)) / 3600);
    timerObject.days = Math.floor(seconds / (3600 * 24));
    setTime({
      seconds: timerObject.seconds,
      minutes: timerObject.minutes,
      hours: timerObject.hours,
      days: timerObject.days,
    });
  }, [seconds, timerObject]);

  useEffect(() => {
    const interval = setInterval(() => {
      getActualTime();
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, getActualTime, timerObject]);

  return (
    <BackwardsCounterStyled>
      <CounterSection number={time.days} name="days" />
      <CounterSection number={time.hours} name="hours" />
      <CounterSection number={time.minutes} name="minutes" />
      <CounterSection number={time.seconds} name="seconds" />
    </BackwardsCounterStyled>
  );
};

export default BackwardsCounter;
