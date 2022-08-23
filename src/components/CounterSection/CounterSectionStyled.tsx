import styled from "styled-components";

const CounterSectionStyled = styled.li`
  height: 50%;
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #dce0e3;
  .counter__number {
    background-color: #ffc700;
    height: 80%;
    width: 90%;
    margin: 0 5%;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: rgb(48, 48, 118);
    font-size: 2rem;
  }
`;

export default CounterSectionStyled;
