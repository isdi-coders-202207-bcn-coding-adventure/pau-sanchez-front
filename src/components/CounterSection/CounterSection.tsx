import CounterSectionStyled from "./CounterSectionStyled";

interface CounterSectionProps {
  name: string;
  number: string;
}

const CounterSection = ({ name, number }: CounterSectionProps): JSX.Element => {
  return (
    <CounterSectionStyled>
      <span className="counter__number">{number}</span>
      <span>{name}</span>
    </CounterSectionStyled>
  );
};

export default CounterSection;
