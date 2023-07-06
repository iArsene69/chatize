import React from "react";
import { Image, Text, View } from "react-native";

const datas = [
  {
    profilePict: "icon.png",
    name: "Waku-waku",
    lastChat: "Wazzup beijing",
    userName: "@okay",
  },
  {
    profilePict: "icon.png",
    name: "Doki-doki",
    lastChat: "Wazzup beijing",
    userName: "@okay",
  },
  {
    profilePict: "icon.png",
    name: "Washoi",
    lastChat: "Wahahahah",
    userName: "@okay",
  },
];

export default function ChatPreview() {
  return (
    <>
      {datas.map((data, idx) => {
        return (
          <View key={idx} className="flex-row justify-between px-5 py-4">
            <View className="flex-row justify-start">
              <Image
                source={require(`../../assets/icon.png`)}
                className="w-12 h-12 rounded-full"
              />
              <View className="flex justify-center gap-1 pl-1">
                <Text className="font-barlow text-lg text-secondary">{data.name}</Text>
                <Text className="font-barlow text-xs text-opacity-5 text-secondary">{data.lastChat}</Text>
              </View>
            </View>
            <View>
              <Text className="font-barlow text-xs text-secondary">{data.userName}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}
