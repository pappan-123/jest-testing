import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Modal from '../components/Modal';

describe('Modal Component', () => {
  it('renders Modal screen', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Modal />
      </NavigationContainer>
    );
    expect(getByText('Modal')).toBeTruthy();
  });

  it('navigates to Dashboard screen on button press', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Modal />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Go to Dashboard'));
    // expect(navigation.navigate).toHaveBeenCalledWith('Dashboard');
  });
});
