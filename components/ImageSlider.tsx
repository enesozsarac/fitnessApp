import { View, Image } from "react-native";
import React from "react";
import { sliderImages } from "@/constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel from "react-native-reanimated-carousel";

const ImageSlider = () => {
  return (
    <View>
      <Carousel
        data={sliderImages}
        height={258}
        width={wp(100)}
        scrollAnimationDuration={800}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            source={item}
            style={{
              width: wp(100),
              height: 258,
            }}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
};

export default ImageSlider;
