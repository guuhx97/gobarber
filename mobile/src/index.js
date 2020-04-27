import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import Routes from './routes';

export default function src() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
