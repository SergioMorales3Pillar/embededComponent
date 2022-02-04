import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Child01Component from './Child01Component';

describe('<Child01Component />', () => {
  test('it should mount', () => {
    render(<Child01Component />);
    
    const child01Component = screen.getByTestId('Child01Component');

    expect(child01Component).toBeInTheDocument();
  });
});