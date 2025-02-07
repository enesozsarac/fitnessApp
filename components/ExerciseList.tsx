import { View, Text, FlatList } from "react-native";
import React from "react";
import ExerciseCard from "./ExerciseCard";
import { useRouter } from "expo-router";

export default function ExerciseList({ data }: any) {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExerciseCard item={item} index={index} router={router} />
        )}
      />
    </View>
  );
}
