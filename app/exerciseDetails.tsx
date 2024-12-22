import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const exerciseDetails = () => {
  const item = useLocalSearchParams<any>();
  const router = useRouter();

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          resizeMode="cover"
          style={{ width: wp(100), height: hp(50) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: wp(12), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color={"white"} />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.delay(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className={"text-neutral-700 tracking-wide"}
        >
          Equipment:{""}
          <Text>{item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles: <Text>{item?.secondaryMuscles}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide font-semibold my-2"
        >
          Instructions
        </Animated.Text>
        {item?.instructions
          .split(",")
          .map((instruction: string, index: number) => (
            <Animated.Text
              entering={FadeInDown.delay(500).duration(300).springify()}
              key={index}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Animated.Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
