import React, { useContext } from 'react';
import { Alert, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import SwiperContext from '../SwiperContext';
import SwiperDemoStyle from './SwipeDemo.style';
// Mettre le style
// Faire en sorte que le pressHandler puisse close le Swiper
const SwiperButtonCustom = () => {
  const { closeParent } = useContext(SwiperContext);

  return (
    <RectButton
      style={[SwiperDemoStyle.rightAction]}
      onPress={() => {
        closeParent();
        Alert.alert('Hello, delete it');
      }}>
      <Text style={SwiperDemoStyle.actionText}>DELETE</Text>
    </RectButton>
  );
};

export default SwiperButtonCustom;
