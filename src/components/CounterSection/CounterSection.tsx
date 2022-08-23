import CounterSectionStyled from "./CounterSectionStyled";

interface CounterSectionProps {
  name: string;
  number: number;
}

const CounterSection = ({ name, number }: CounterSectionProps): JSX.Element => {
  return (
    <CounterSectionStyled>
      <span className="counter__number">{number}</span>
      <span className="counter__name">{name}</span>
    </CounterSectionStyled>
  );
};

export default CounterSection;
