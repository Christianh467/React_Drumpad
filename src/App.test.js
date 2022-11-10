import { render, screen } from '@testing-library/react';
import Drumpad from './components/Drumpad';

test('renders learn react link', () => {
  render(<Drumpad />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
