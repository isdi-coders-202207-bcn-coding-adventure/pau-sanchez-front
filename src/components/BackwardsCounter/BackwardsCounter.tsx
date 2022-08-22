import CounterSection from "../CounterSection/CounterSection";

const BackwardsCounter = (): JSX.Element => {
  return (
    <ul>
      <CounterSection number={"02"} name={"days"} />
      <CounterSection number={"20"} name={"hours"} />
      <CounterSection number={"34"} name={"minutes"} />
      <CounterSection number={"09"} name={"seconds"} />
    </ul>
  );
};

export default BackwardsCounter;
