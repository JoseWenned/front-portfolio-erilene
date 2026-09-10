import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, expect, it } from 'vitest';

describe('Home', () => {
  it('deve renderizar o título do portfólio', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'Portfólio Erline' })
    ).toBeInTheDocument();
  });
});