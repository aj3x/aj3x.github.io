import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

function scaling(t:number) {
  return t/4 * (t-1);
}
describe('down scaling function', () => {
  test("t = 1", () => {
    expect(scaling(1)).toBe(0)
  })
  test("t = 2", () => {
    expect(scaling(2)).toBe(1/2)
  })
  test("t = 3", () => {
    expect(scaling(3)).toBe(3/2)
  })
  test("t = 4", () => {
    expect(scaling(4)).toBe(3)
  })
  test("t = 8", () => {
    expect(scaling(8)).toBe(14)
  })
  test("t = 10", () => {
    expect(scaling(10)).toBe(22.5)
  })
  test("t = 16", () => {
    expect(scaling(16)).toBe(60)
  })
})
