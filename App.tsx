import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';

const App = () => {
  return (
    <NavigationContainer>
      <CalculadoraScreen />
    </NavigationContainer>
  );
};

export default App;
