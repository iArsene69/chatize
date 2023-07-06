import React from "react";
import { Image, Text, View } from "react-native";
import { chatProps } from "types";

export default function ChatPreview(props: chatProps) {
  return (
    <View className="flex-row justify-between px-5 py-4">
      <View className="flex-row justify-start">
        <Image
          source={require(`../../assets/icon.png`)}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex justify-center gap-1 pl-1">
          <Text className="font-barlow text-lg text-secondary">
            {props.name}
          </Text>
          <Text className="font-barlow text-xs text-opacity-5 text-secondary">
            {props.lastChat}
          </Text>
        </View>
      </View>
      <View>
        <Text className="font-barlow text-xs text-secondary">
          {props.username}
        </Text>
      </View>
    </View>
  );
}
