// Mock @react-navigation/native
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(), // Mock the navigate function
    }),
    useRoute: jest.fn(() => ({
      params: {
        token: true,
        item: "https://example.com/file.pdf", // Default mock params
      },
    })),
  };
});

// Mock react-native-snackbar
jest.mock('react-native-snackbar', () => {
  return {
    show: jest.fn(), // Mock the show function of Snackbar
  };
});
