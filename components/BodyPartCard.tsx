import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const BodyPartCard = ({ item, index, router }: any) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(200 * index)
        .springify()}
    >
      <TouchableOpacity
        style={{ width: wp(44), height: hp(22) }}
        className="justify-end p-4 mb-4"
        onPress={() => router.push({ pathname: "/exercises", params: item })}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: hp(22) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            width: wp(44),
            height: hp(15),
            borderRadius: 35,
            position: "absolute",
            bottom: 0,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <Text
          style={{ fontSize: hp(2.5) }}
          className="font-semibold text-white text-center tracking-wide"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BodyPartCard;
