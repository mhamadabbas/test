import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { style } from './Style';

interface CarouselProps {
  carouselWidth: number;
  carouselHeight: number;
  automatic: boolean; // Is carousel automatic
  automaticDuration: number; // Carousel's duration on each item
  children: ReactNode[]; // Carousel's children. length > 1
}

const Carousel = ({
  carouselWidth,
  carouselHeight,
  automatic,
  automaticDuration,
  children,
}: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const width = (Dimensions.get('window').width * carouselWidth) / 100;
  const height = (Dimensions.get('window').height * carouselHeight) / 100;
  const scrollViewRef = useRef<ScrollView>(null);

  /**
   * Handle scroll position
   * @param absciss Absciss value
   */
  function moveScrollTo(absciss: number): void {
    scrollViewRef.current?.scrollTo({ x: absciss, y: 0, animated: true });
  }

  /**
   * Get paging style tab
   * @param index paging index
   */
  const getPagingTextStyle = (index: number): { [key: string]: Object }[] => {
    return [
      style.pagingText,
      activeItem === index
        ? style.pagingTextDeactivate
        : style.pagingTextActive,
    ];
  };

  /**
   * Gets child view tab
   */
  const childView = (): JSX.Element[] => {
    return children.map((child, index) => (
      <View key={index} style={{ width, height }}>
        {child}
      </View>
    ));
  };

  /**
   * Gets paging view tab
   */
  const pagingView = (): JSX.Element[] => {
    return children.map((c, index) => (
      <Text key={index} style={getPagingTextStyle(index)}>
        ⬤
      </Text>
    ));
  };

  /**
   * Handle automatic scroll
   */
  const automaticScroll = useCallback(
    function () {
      if (activeItem < children?.length - 1) {
        moveScrollTo(width + activeItem * width);
        setActiveItem((prevActiveItem) => prevActiveItem + 1);
      } else {
        moveScrollTo(0);
        setActiveItem(0);
      }
    },
    [activeItem, children, width]
  );

  /**
   * Trigered when scroll drag end
   * @param nativeEvent Event linked to scroll action
   */
  const scrollDragEnd = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    setActiveItem(slide);
  };

  /**
   * Set automatic carousel interval
   */
  useEffect(() => {
    if (automatic) {
      const automaticCarouselTimer = setInterval(() => {
        automaticScroll();
      }, automaticDuration);
      return function () {
        clearInterval(automaticCarouselTimer);
      };
    }
  }, [activeItem, automatic, automaticDuration, automaticScroll]);

  return (
    <View style={[style.container, { width, height }]}>
      <ScrollView
        pagingEnabled
        horizontal
        onMomentumScrollEnd={scrollDragEnd}
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}>
        {childView()}
      </ScrollView>

      <View style={style.pagination}>{pagingView()}</View>
    </View>
  );
};

Carousel.defaultProps = {
  carouselWidth: 100,
  carouselHeight: 60,
  automatic: false,
  automaticDuration: 5000,
};

export default Carousel;
