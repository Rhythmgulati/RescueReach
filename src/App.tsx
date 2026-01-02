import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigator/AppNavigator';
import { LanguageProvider } from './context/LanguageContext';
import ToastManager from 'toastify-react-native';

const App = () => {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <AppNavigator />
        <ToastManager position="top" duration={3000} style={{ zIndex: 9999 }} />
      </NavigationContainer>
    </LanguageProvider>
  );
};

export default App;
