import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web Development Project', () => {
  render(<App />);
  expect(screen.getByText('Web Development Project')).toBeInTheDocument();
});

test('renders React version 1.0', () => {
  render(<App />);
  expect(screen.getByText('React Application - Version 1.0')).toBeInTheDocument();
});
