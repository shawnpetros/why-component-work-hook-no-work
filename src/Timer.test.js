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
    jest.advanceTimersByTime(1000);
  });
  expect(remTime.textContent).toBe("119");
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(remTime.textContent).toBe("118");
});

test("timer stops at zero", () => {
  const initial = 10;
  render(<App {...{ initial }} />);
  const remTime = screen.getByTestId("remaining-time");
  // simulate the passage of 10s
  for (let i = 0; i < 10; i++) {
    act(() => {
      jest.advanceTimersByTime(1000);
    });
  }
  expect(remTime.textContent).toBe("0");
});

test("timer has a stop button that stops timer", () => {
  const initial = 120;
  render(<App {...{ initial }} />);
  const remTime = screen.getByTestId("remaining-time");
  const stopBut = screen.getByTestId("end-time");
  // simulate the passage of 10s
  for (let i = 0; i < 10; i++) {
    act(() => {
      jest.advanceTimersByTime(1000);
    });
  }
  expect(remTime.textContent).toBe("110");
  stopBut.click();
  // simulate the passage of 10s
  for (let i = 0; i < 10; i++) {
    act(() => {
      jest.advanceTimersByTime(1000);
    });
  }
  expect(remTime.textContent).toBe("110");
});
