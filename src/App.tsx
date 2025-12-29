import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigator/AppNavigator';
import { LanguageProvider } from './context/LanguageContext';


const App = () => {
  return (
    <LanguageProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </LanguageProvider>
  )
}

export default App