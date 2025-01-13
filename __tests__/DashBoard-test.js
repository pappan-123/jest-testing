import React from 'react';
import { render } from '@testing-library/react-native';
import DashBoard from '../components/DashBoard';

describe('Dashboard Component', () => {
  it('renders Dashboard screen', () => {
    const { getByText } = render(<DashBoard />);
    expect(getByText('DashBoard')).toBeTruthy();
  });
});
