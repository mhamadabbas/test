import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Router from './router/Router';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return <Router isLoading={isLoading} />;
};

export default connect()(App);
