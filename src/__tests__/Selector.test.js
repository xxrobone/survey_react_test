import { render, screen, fireEvent } from '@testing-library/react';
import Selector from '../components/selector/Selector';

test('renders the selector with buttons', () => {
  render(<Selector />);

  const selectorElement = screen.getByTestId('selector');
  expect(selectorElement).toBeInTheDocument();

  const formButton = screen.getByText(/Show Form/i);
  expect(formButton).toBeInTheDocument();

  const aboutButton = screen.getByText(/Show About/i);
  expect(aboutButton).toBeInTheDocument();
});

test('calls onSelect callback when buttons are clicked', () => {
  const mockOnSelect = jest.fn();
  render(<Selector onSelect={mockOnSelect} />);

  const formButton = screen.getByText(/Show Form/i);
  const aboutButton = screen.getByText(/Show About/i);

  fireEvent.click(formButton);
  expect(mockOnSelect).toHaveBeenCalledWith('form');

  fireEvent.click(aboutButton);
  expect(mockOnSelect).toHaveBeenCalledWith('about');
});
