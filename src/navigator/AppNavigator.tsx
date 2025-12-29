import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LanguageSelection from '../screens/LanguageSelection';
import SetupScreen from '../screens/SetupScreen';
import Dashboard from '../screens/Dashboard';
import EmergencyScreen from '../screens/EmergencyScreen';

function AppNavigator() {
   const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
            <Stack.Screen name="SetupScreen" component={SetupScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="EmergencyScreen" component={EmergencyScreen} />
    </Stack.Navigator>
  )
}


export default AppNavigator
