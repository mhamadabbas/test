import React from 'react';
import { View, FlatList } from 'react-native';
import Swiper from '../Swiper';
import RowContent from './RowContent';
import SwipeDemoStyles from './SwipeDemo.style';
import SwiperButtonCustom from './SwiperButtonCustom';

const SwipeDemo = () => {
  return (
    <View>
      <FlatList
        data={DATA.content}
        ItemSeparatorComponent={() => (
          <View style={SwipeDemoStyles.separator} />
        )}
        renderItem={({ item, index }) => (
          <Swiper
            rightButtons={DATA.rightButtons}
            leftButtons={DATA.leftButtons}
            maxSwiperWidthRatio={0.6}
            component={item}
            key={index}
          />
        )}
        keyExtractor={(item, index) => `message ${index}`}
      />
    </View>
  );
};

const DATA: any = {
  content: [
    <RowContent />,
    <RowContent />,
    <RowContent />,
    <RowContent />,
    <RowContent />,
    <RowContent />,
    <RowContent />,
  ],
  rightButtons: [
    {
      width: 200,
      component: <SwiperButtonCustom />,
    },
    {
      width: 200,
      component: <SwiperButtonCustom />,
    },
    {
      width: 200,
      component: <SwiperButtonCustom />,
    },
  ],
  leftButtons: [
    {
      width: 100,
      component: <SwiperButtonCustom />,
    },
    {
      width: 100,
      component: <SwiperButtonCustom />,
    },
  ],
};
export default SwipeDemo;
