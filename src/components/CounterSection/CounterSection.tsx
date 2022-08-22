interface CounterSectionProps {
  name: string;
  number: string;
}

const CounterSection = ({ name, number }: CounterSectionProps): JSX.Element => {
  return (
    <li>
      <div>
        <span>{number}</span>
      </div>
      <span>{name}</span>
    </li>
  );
};

export default CounterSection;
