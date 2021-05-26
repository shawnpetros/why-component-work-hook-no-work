import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

beforeEach(() => {
  jest.clearAllTimers();
  jest.useFakeTimers();
});

test("timer exists", () => {
  render(<App />);
  const timerEl = screen.getByTestId("timer");
  expect(timerEl).toBeInTheDocument();
});

test("timer accepts initial time", () => {
  const initial = 120;
  render(<App {...{ initial }} />);
  const remTime = screen.getByTestId("remaining-time");
  expect(remTime.textContent).toBe(`${initial}`);
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  expect(remTime.textContent).toBe("110");
});

test("timer stops at zero", () => {
  const initial = 10;
  render(<App {...{ initial }} />);
  const remTime = screen.getByTestId("remaining-time");
  act(() => {
    jest.advanceTimersByTime(15000);
  });
  expect(remTime.textContent).toBe("0");
});

test("timer has a stop button that stops timer", () => {
  const initial = 120;
  render(<App {...{ initial }} />);
  const remTime = screen.getByTestId("remaining-time");
  const stopBut = screen.getByTestId("end-time");
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  stopBut.click();
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  expect(remTime.textContent).toBe("110");
});
