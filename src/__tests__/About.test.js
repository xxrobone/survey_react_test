import { render, screen } from '@testing-library/react';
import About from '../components/about/About';

test('renders About component correctly', () => {
  render(<About />);

  const aboutElement = screen.getByTestId('about');
  expect(aboutElement).toBeInTheDocument();

  expect(screen.getByText('About')).toBeInTheDocument();
  expect(
    screen.getByText(
      'This is a demographic age survey to check average age of women, men, and other'
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      'You can add a gender and age and then check the result of your survey. 🚀'
    )
  ).toBeInTheDocument();
});
