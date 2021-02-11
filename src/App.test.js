import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  const linkElement = screen.getByText("Shopify Pair Programming");
  expect(linkElement).toBeInTheDocument();
});
