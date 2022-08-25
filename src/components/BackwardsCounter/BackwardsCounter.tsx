import { useCallback, useEffect, useState } from "react";
import CounterSection from "../CounterSection/CounterSection";
import BackwardsCounterStyled from "./BackwardsCounterStyled";
import { TimerObject } from "../../interfaces/interfaces";

interface BackwardsCounterProps {
  difference: number;
  timerObject: TimerObject;
}

const initialTimerObject = {
  seconds: 1,
  minutes: 1,
  hours: 1,
  days: 1,
};

const BackwardsCounter = ({
  difference,
  timerObject,
}: BackwardsCounterProps): JSX.Element => {
  const [end, setEnd] = useState(false);
  const [time, setTime] = useState(initialTimerObject);
  const [seconds, setSeconds] = useState(difference);

  const endTimer = () => {
    setEnd(true);
  };

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

  const checkIfReachedGoal = () => {
    if (
      time.seconds === 0 &&
      time.minutes === 0 &&
      time.hours === 0 &&
      time.days === 0
    )
      endTimer();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getActualTime();
      checkIfReachedGoal();
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, getActualTime, timerObject]);

  return (
    <BackwardsCounterStyled>
      {end ? (
        <h2>Date reached!</h2>
      ) : (
        <>
          <CounterSection number={time.days} name="days" />
          <CounterSection number={time.hours} name="hours" />
          <CounterSection number={time.minutes} name="minutes" />
          <CounterSection number={time.seconds} name="seconds" />
        </>
      )}
    </BackwardsCounterStyled>
  );
};

export default BackwardsCounter;
