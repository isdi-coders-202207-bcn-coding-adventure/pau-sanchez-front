import { render, screen } from "@testing-library/react";
import CounterSection from "./CounterSection";

describe("Given a CounterSection component", () => {
  describe("When instantiated", () => {
    test("It should display a list item with two spans showing a name and a number received via props", () => {
      render(<CounterSection name={"hola"} number={666} />);

      const firstSpan = screen.getByText("hola");
      const secondSpan = screen.getByText(666);

      expect(firstSpan).not.toBeNull();
      expect(secondSpan).not.toBeNull();
    });
  });
});
