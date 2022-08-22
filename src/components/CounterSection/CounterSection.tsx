interface CounterSectionProps {
  name: string;
  number: string;
}

const CounterSection = ({ name, number }: CounterSectionProps): JSX.Element => {
  return (
    <li>
      <span>{number}</span>
      <span>{name}</span>
    </li>
  );
};

export default CounterSection;
