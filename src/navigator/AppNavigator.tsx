import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LanguageSelection from '../screens/LanguageSelection';
import SetupScreen from '../screens/SetupScreen';
import Dashboard from '../screens/Dashboard';
import EmergencyScreen from '../screens/EmergencyScreen';
import CommonIssues from '../screens/CommonIssues';
import Settings from '../screens/Settings';
import Contacts from '../screens/Contacts';
import WoundAnalysis from '../screens/WoundAnalysis';
import RecognizeMedicine from '../screens/RecognizeMedicine';

function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
      <Stack.Screen name="SetupScreen" component={SetupScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="EmergencyScreen" component={EmergencyScreen} />
      <Stack.Screen name="CommonIssues" component={CommonIssues} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="WoundAnalyse" component={WoundAnalysis} />
      <Stack.Screen name="RecognizeMedicine" component={RecognizeMedicine} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
