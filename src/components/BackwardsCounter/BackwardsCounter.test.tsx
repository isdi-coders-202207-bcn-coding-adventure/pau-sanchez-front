import BackwardsCounter from "./BackwardsCounter";
import React from "react";
import { render } from "@testing-library/react";

const mockSetState = jest.fn();
const mockState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockState, mockSetState],
}));

describe("Given a BackwardsCounter component", () => {
  describe("When instantiated", () => {
    test("The global function SetInterval should be called every second", async () => {
      const difference = 10000;
      const timerObject = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 60,
      };

      jest.spyOn(global, "setInterval");

      render(
        <BackwardsCounter difference={difference} timerObject={timerObject} />
      );

      expect(setInterval).toHaveBeenCalledTimes(1);
    });
    test("When set interval is called, getActualTime function should be called", async () => {
      const difference = 10000;
      const passedValue = {
        days: 5,
        hours: 5,
        minutes: 5,
        seconds: 5,
      };

      jest.useFakeTimers();

      render(
        <BackwardsCounter difference={difference} timerObject={passedValue} />
      );

      jest.advanceTimersByTime(2000);

      expect(mockSetState).toHaveBeenCalled();
    });
  });
});
