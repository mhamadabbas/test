import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';
import { getIsSignedIn } from '../store/slices/userSlice';
import { RootState } from '../store/store';
import SplashScreen from '../views/SplashScreen';
import Authentication from './Authentication';
import Features from './Features';

const Router = ({ isLoading, isSignedIn }: any) => {
  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isSignedIn ? <Features /> : <Authentication />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  isSignedIn: getIsSignedIn(state),
});

export default connect(mapStateToProps)(Router);
