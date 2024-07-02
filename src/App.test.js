import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TextUtils heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Enter the text to analyze/i);
  expect(headingElement).toBeInTheDocument();
});
