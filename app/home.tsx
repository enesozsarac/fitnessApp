import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import ImageSlider from "../components/ImageSlider";
import { sliderImages } from "@/constants";
import BodyParts from "@/components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="auto" />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-red-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/bookmarks" })}
            className="bg-neutral-100 rounded-full flex justify-center items-center border-[3px] border-neutral-300 mt-2"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <FontAwesome name="bookmark" size={hp(3)} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1 mt-4">
        <ImageSlider />
      </View>

      <View className="flex-1 mt-[-90px]">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
