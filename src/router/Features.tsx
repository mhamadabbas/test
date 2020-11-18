import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Catalogue from '../views/Catalogue';
import Home from '../views/Home/Home';
import Profile from '../views/Profile';

const FeaturesStack = createStackNavigator();

const Features = () => {
  return (
    <FeaturesStack.Navigator initialRouteName="Home">
      <FeaturesStack.Screen name="Home" component={Home} />
      <FeaturesStack.Screen name="Catalogue" component={Catalogue} />
      <FeaturesStack.Screen name="Profile" component={Profile} />
    </FeaturesStack.Navigator>
  );
};

export default Features;
