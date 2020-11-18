import React, { useState } from 'react';
import { Animated, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ReactComponentLike } from 'prop-types';
import SwiperContext from './SwiperContext';
import SwiperStyle from './Swiper.style';

interface SwiperButton {
  // Width of a single button
  // Each button can have its own size
  width: number;
  // Component that will contains a single button
  component: ReactComponentLike;
}
interface SwiperProps {
  // The component that will provide the content inside the row
  component: ReactComponentLike;
  // Array for the lefts swipe buttons
  leftButtons?: SwiperButton[];
  // Array for the right swipe buttons
  rightButtons?: SwiperButton[];
  // Ratio that defines what will be the max length that buttons can take in row
  // For example : 0.6 means that buttons will take a maximum of 60% of row width
  maxSwiperWidthRatio: number;
}

const Swiper = ({
  rightButtons,
  leftButtons,
  component,
  maxSwiperWidthRatio,
}: SwiperProps) => {
  const [maxSwiperWidth, setMaxSwiperWidth] = useState(300);
  const [leftSwiperWidth, setLeftSwiperWidth] = useState(300);
  const [rightSwiperWidth, setRightSwiperWidth] = useState(300);

  let _swipeableRow: Swipeable;

  /**
   * Will update the state of Swipeable component
   * @param ref
   */
  const updateRef = (ref: Swipeable) => {
    _swipeableRow = ref;
  };

  /**
   * Close the Swipeable component
   */
  const close = () => {
    _swipeableRow.close();
  };

  /**
   * If you want to give your button the permission to close the swiper content
   * You can use the function "closeParent()" from the SwiperContext in your button
   * Check the demo to see how it's done
   */
  const swiperContextValue = {
    closeParent: close,
  };

  /**
   * Get the width of the row that contains swipers button
   * Change the width of buttons container to fit them while also checking if this size doesn't exceed the row width
   * @param e
   * @returns {void}
   */
  const handleSizeChange = (e: any) => {
    const { width } = e.nativeEvent.layout;

    setMaxSwiperWidth(width * maxSwiperWidthRatio);

    setLeftSwiperWidth(checkSize(leftButtons));
    setRightSwiperWidth(checkSize(rightButtons));
  };

  /**
   * Compare the width of row with the sum of buttons width
   * If the row width is smaller, then returns the row width
   * Otherwise, returns the sum of buttons width
   * @param buttons Receive leftButtons or rightButtons from props
   * @returns {number}
   */
  function checkSize(buttons: SwiperButton[] | undefined) {
    let width = 0;
    buttons?.map((button) => {
      width += button.width;
    });
    return width < maxSwiperWidth ? width : maxSwiperWidth;
  }

  /**
   * Will render all swipe buttons
   * @param progress
   * @returns {Object}
   */
  const renderActions = (side: 'left' | 'right') => (
    progress: Animated.AnimatedInterpolation
  ) => {
    const arrayButtons = side === 'left' ? leftButtons : rightButtons;

    if (!arrayButtons || arrayButtons.length === 0) {
      return undefined;
    }

    const width = side === 'left' ? leftSwiperWidth : rightSwiperWidth;
    return (
      <View style={[SwiperStyle.row, { width }]}>
        {arrayButtons?.map((button, index) => {
          const x = (side === 'left' ? -1 : 1) * button.width;
          return renderAction(button.component, x, progress, index);
        })}
      </View>
    );
  };

  /**
   * Will render a single swipe button
   * @param text : button title
   * @param color : text color
   * @param x : width
   * @param progress : progress object from swipeable ref
   * @param index : index of the object in the map function (in order to provide a React key on the component)
   * @param action : Function on button click
   * @returns {Object}
   */
  const renderAction = (
    button: ReactComponentLike,
    x: number,
    progress: Animated.AnimatedInterpolation,
    index: number
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View
        style={[SwiperStyle.flexOne, { transform: [{ translateX: trans }] }]}
        key={index}>
        {button}
      </Animated.View>
    );
  };

  return (
    <SwiperContext.Provider value={swiperContextValue}>
      <Swipeable
        ref={updateRef}
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderRightActions={renderActions('right')}
        renderLeftActions={renderActions('left')}>
        <View onLayout={handleSizeChange}>{component}</View>
      </Swipeable>
    </SwiperContext.Provider>
  );
};

export default Swiper;
