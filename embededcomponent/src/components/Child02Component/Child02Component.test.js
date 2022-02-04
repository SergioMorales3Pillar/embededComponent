import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Child02Component from './Child02Component';

describe('<Child02Component />', () => {
  test('it should mount', () => {
    render(<Child02Component />);
    
    const child02Component = screen.getByTestId('Child02Component');

    expect(child02Component).toBeInTheDocument();
  });
});