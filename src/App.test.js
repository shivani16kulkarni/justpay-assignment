import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main content', () => {
  render(<App />);
  const mainContent = screen.getByText(/main content/i);
  expect(mainContent).toBeInTheDocument();
});
