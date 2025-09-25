import { render, screen } from '@testing-library/react';
import Hello from '@/components/Hello';

describe('Hello component', () => {
  it('renders default greeting', () => {
    render(<Hello />);
    expect(screen.getByRole('heading', { name: /hello world/i })).toBeVisible();
  });

  it('renders provided name', () => {
    render(<Hello name="Investor" />);
    expect(screen.getByRole('heading', { name: /hello investor/i })).toBeVisible();
  });
});

