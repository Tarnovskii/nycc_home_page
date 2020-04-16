import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from './components/home_page';

test('renders learn react link', () => {
  const { getByText } = render(<AppComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
