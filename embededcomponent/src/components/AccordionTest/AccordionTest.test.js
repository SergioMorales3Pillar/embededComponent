import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccordionTest from './AccordionTest';

describe('<AccordionTest />', () => {
  test('it should mount', () => {
    render(<AccordionTest />);
    
    const accordionTest = screen.getByTestId('AccordionTest');

    expect(accordionTest).toBeInTheDocument();
  });
});