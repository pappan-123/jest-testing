import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { token, item } = route.params; // Access token and item from route params

  const onClick = () => {
    const extension = item.split('.').pop(); // Get the file extension
    switch (true) {
      case !token:
        Snackbar.show({
          text: 'You need to be logged in to proceed.',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
        break;

      case extension === 'pdf':
        navigation.navigate('Dashboard');
        break;

      default:
        Snackbar.show({
          text: 'The file is not a PDF.',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'orange',
        });
        break;
    }
  };

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Modal"
        onPress={onClick}
      />
    </View>
  );
};

export default Home;
