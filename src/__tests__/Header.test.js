import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

  test('renders header with the correct text', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const h2Element = screen.getByText(/Demografic age survey/i);
    expect(h2Element).toBeInTheDocument();
  });