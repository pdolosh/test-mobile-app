import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AuthScreen } from '~/view/screens/Auth';
import { DisclaimerScreen } from '../screens/Disclaimer';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const AuthStack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
      <AuthStack.Screen name="DisclaimerScreen" component={DisclaimerScreen} />
    </AuthStack.Navigator>
  );
};
