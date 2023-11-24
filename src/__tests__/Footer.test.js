import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

test('renders footer with the copyright symbol', () => {
  render(<Footer />);

  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();

  const copyrightSymbol = screen.getByText(/©/i);
  expect(copyrightSymbol).toBeInTheDocument();
});
