import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('Render App Component', () => {
  const context = render(<App />);
  expect(context).toBeDefined();
});
