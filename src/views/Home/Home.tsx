import React from 'react';
import { View, Image } from 'react-native';
import Carousel from '../../components/Carousel/Carousel';
import { style } from './Style';
import LoginForm from '../../components/LoginForm/LoginForm';

const Home = ({}) => {
  return (
    <View style={style.container}>
      <Carousel>
        <LoginForm />
        <LoginForm />
        <Image
          style={style.image}
          source={{
            uri:
              'https://images.pexels.com/photos/4424108/pexels-photo-4424108.jpeg?cs=srgb&dl=pexels-ricardo-esquivel-4424108.jpg&fm=jpg',
          }}
        />
      </Carousel>
    </View>
  );
};

export default Home;
