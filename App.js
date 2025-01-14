import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import Home from './components/Home';
import ModalScreen from './components/Modal';
import DashBoard from './components/DashBoard';

const Stack = createNativeStackNavigator();

const App = () => {
  const token = true;
  const item =
    'https://res.cloudinary.com/dkvim7iqm/image/upload/v1736603594/PDF-Uploads/mxqh1q6pekc0rdlqcs5v.pdf';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{token, item}}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="Dashboard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
