import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SwipeDemo from '../components/Swiper/exemple-folder/SwipeDemo';
import ForgotPassword from '../views/ForgotPassword';
import Login from '../views/Login/Login';

const AuthenticationStack = createStackNavigator();

const Authentication = () => {
  return (
    <AuthenticationStack.Navigator initialRouteName="Login" headerMode="none">
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SwipeDemo" component={SwipeDemo} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
};

export default Authentication;
