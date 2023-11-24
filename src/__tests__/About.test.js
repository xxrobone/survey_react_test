import { render, screen } from '@testing-library/react';
import About from '../components/about/About';

test('renders About component correctly', () => {
  render(<About />);

  const aboutElement = screen.getByTestId('about');
  expect(aboutElement).toBeInTheDocument();

  expect(screen.getByText('About')).toBeInTheDocument();
});
