import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders App with a header, footer, and selector', () => {
  render(<App />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  const selectorElement = screen.getByTestId('selector');
  expect(selectorElement).toBeInTheDocument();
});

test('renders h1 with text "Demographic Age Survey"', () => {
  render(<App />);

  const h1Element = screen.getByText(/Demographic Age Survey/i);
  expect(h1Element).toBeInTheDocument();
});

test('clicking on "About" button in the selector switches to About component', () => {
  render(<App />);

  const aboutButton = screen.getByText(/Show About/i);
  expect(aboutButton).toBeInTheDocument();

  fireEvent.click(aboutButton);

  const aboutComponent = screen.getByTestId('about');
  expect(aboutComponent).toBeInTheDocument();
});

test('clicking on "Form" button in the selector switches to Form component', () => {
  render(<App />);

  const formButton = screen.getByText(/Show Form/i);
  expect(formButton).toBeInTheDocument();

  fireEvent.click(formButton);

  const formComponent = screen.getByTestId('form');
  expect(formComponent).toBeInTheDocument();
});
