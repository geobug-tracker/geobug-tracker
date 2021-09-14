/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { screen, render } from '@testing-library/react';
import Footer from './Footer';

test('Renders footer', () => {
  render(<Footer />);
  const footer = screen.getByText(/Footer/i);
  expect(footer).toBeInTheDocument();
});
