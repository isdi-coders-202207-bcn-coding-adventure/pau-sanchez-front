import BackwardsCounter from "./BackwardsCounter";
import React from "react";
import { render } from "@testing-library/react";

describe("Given a BackwardsCounter component", () => {
  describe("When instantiated", () => {
    test("The global function SetInterval should be called every second", () => {
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

      expect(setInterval).toHaveBeenCalled();
    });
    test("It should", () => {
      const testState = {
        days: 5,
        hours: 5,
        minutes: 5,
        seconds: 5,
      };

      const useStateSpy = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation(() => [testState, jest.fn()]);
    });
  });
});
