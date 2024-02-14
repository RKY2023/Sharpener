import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  const expensecheck = screen.getByText(/expense/i, { exact: true});
  expect(linkElement).toBeInTheDocument();
  expect(expensecheck).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  const expensecheck = screen.getByText(/expense/i, { exact: true});
  expect(linkElement).toBeInTheDocument();
  expect(expensecheck).toBeInTheDocument();
});

