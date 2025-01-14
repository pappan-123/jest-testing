import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import Snackbar from 'react-native-snackbar';

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('renders Home screen', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );
    expect(getByText('Home')).toBeTruthy();
  });

  it('navigates to Dashboard when token is true and item is a PDF', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Go to Modal'));

    // Expect no Snackbar to appear
    expect(Snackbar.show).not.toHaveBeenCalled();

    // Verify navigation to Dashboard
    expect(require('@react-navigation/native').useNavigation().navigate).toHaveBeenCalledWith('Dashboard');
  });

  it('shows Snackbar when token is false', () => {
    // Override the default mock for useRoute to set token as false
    require('@react-navigation/native').useRoute.mockReturnValueOnce({
      params: {
        token: false,
        item: 'https://example.com/file.pdf',
      },
    });

    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Go to Modal'));

    // Verify Snackbar is called with correct parameters
    expect(Snackbar.show).toHaveBeenCalledWith({
      text: 'You need to be logged in to proceed.',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'red',
    });

    // Ensure navigation does not occur
    expect(require('@react-navigation/native').useNavigation().navigate).not.toHaveBeenCalled();
  });

  it('shows Snackbar when item is not a PDF', () => {
    // Override the default mock for useRoute to set a non-PDF item
    require('@react-navigation/native').useRoute.mockReturnValueOnce({
      params: {
        token: true,
        item: 'https://example.com/file.jpg',
      },
    });

    const { getByText } = render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Go to Modal'));

    // Verify Snackbar is called with correct parameters
    expect(Snackbar.show).toHaveBeenCalledWith({
      text: 'The file is not a PDF.',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'orange',
    });

    // Ensure navigation does not occur
    expect(require('@react-navigation/native').useNavigation().navigate).not.toHaveBeenCalled();
  });
});
