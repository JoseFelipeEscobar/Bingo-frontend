import { render, screen } from '@testing-library/react';


test('renders learn react link', () => {
  render(<JuegoBingo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
