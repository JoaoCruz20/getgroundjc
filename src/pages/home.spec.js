import { render, screen } from '@testing-library/react';
import { Home } from './home';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

beforeEach(() => {
  useSelector.mockImplementation((selector) => selector?.() ?? {});
});

describe('Home Component', () => {
  it('should render link to details', () => {
    render(<Home />);

    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});