import React, { useState, useEffect, useRef } from 'react';
import { Image, ScrollView, View, Dimensions, StyleSheet } from 'react-native';
import { biru, abumuda } from '../constants/warna';
import { BannerSitc, BannerSitc2, BannerSitc3, BannerSitc4, BannerSitc5 } from '../constants/gambar';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export default function Banner() {
  const pages = [BannerSitc, BannerSitc2, BannerSitc3, BannerSitc4, BannerSitc5];
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % pages.length;
        scrollRef.current.scrollTo({ x: nextPage * SCREEN_WIDTH, animated: true });
        return nextPage;
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const onScroll = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== currentPage) {
      setCurrentPage(slide);
    }
  };

  return (
    <View style={{ position: 'relative', width: '100%' }}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}>
        {pages.map((val, index) => (
          <View
            key={index}
            style={{
              width: SCREEN_WIDTH,
              paddingHorizontal: 24,
              height: 115,
            }}>
            <Image
              source={val}
              style={{ height: 115, width: '100%', borderWidth: 16, borderColor: biru}}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotStyle,
              currentPage === index && { backgroundColor: biru, width: 30 },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dotStyle: {
    width: 8,
    height: 8,
    backgroundColor: abumuda,
    borderRadius: 5,
    marginHorizontal: 1,
  },
});
