import styled from "styled-components";
import BackwardsCounter from "../BackwardsCounter/BackwardsCounter";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #243342;
  color: #dce0e3;
  justify-content: center;
  align-items: center;
`;

export interface TimerObject {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

const timerObject = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

const getTimeLeft = () => {
  const independenceDay = new Date("2022-09-16").getTime() / 1000;
  const currentDate = new Date().getTime() / 1000;
  return independenceDay - currentDate;
};

let difference = getTimeLeft();

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <h2>{"(●'◡'●) Time left to finish the bootcamp (●'◡'●)"}</h2>
      <BackwardsCounter difference={difference} timerObject={timerObject} />
    </StyledContainer>
  );
};

export default Layout;
