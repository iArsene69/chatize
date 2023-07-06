import React from "react";
import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between pt-10 pb-3 px-4 bg-tertier">
      <Text className="font-barlow text-secondary text-2xl">
        CHAT<Text className="text-primary">i</Text>ZE
      </Text>
      <Image
        source={require("../../assets/icon.png")}
        className="w-6 h-6 rounded-full"
      />
    </View>
  );
}
