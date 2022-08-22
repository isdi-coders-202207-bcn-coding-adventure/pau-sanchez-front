import CounterSection from "../CounterSection/CounterSection";
import BackwardsCounterStyled from "./BackwardsCounterStyled";

const BackwardsCounter = (): JSX.Element => {
  return (
    <BackwardsCounterStyled>
      <CounterSection number="02" name="days" />
      <CounterSection number="20" name="hours" />
      <CounterSection number="34" name="minutes" />
      <CounterSection number="09" name="seconds" />
    </BackwardsCounterStyled>
  );
};

export default BackwardsCounter;
