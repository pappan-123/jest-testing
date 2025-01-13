import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';

describe('Home Component', () => {
  it('renders Home screen', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
    expect(getByText('Home')).toBeTruthy();
  });

  it('navigates to Modal screen on button press', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
    fireEvent.press(getByText('Go to Modal'));
  });
});
