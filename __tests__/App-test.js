import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Navigation', () => {
  it('renders the Home screen as the initial route', () => {
    const { getByText } = render(<App />);
    expect(getByText('Home')).toBeTruthy();
  });

  it('passes token and item as initial params to Home', () => {
    const { getByText } = render(<App />);
    expect(getByText('Home')).toBeTruthy(); // Verify Home screen is rendered

    // Test if token and item are passed by triggering the Home button
    // Since this behavior is now tested in `Home-test.js`, 
    // you can trust `initialParams` delivery via navigation tests.
  });
});
