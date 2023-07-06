import React from 'react'
import {View, Pressable} from 'react-native'
import ChatPreview from 'components/ChatPreview'
import { NavigationProp } from '@react-navigation/native';
import { StackList } from 'types';

const datas = [
  {
    id: 1,
    profilePict: "icon.png",
    name: "Waku-waku",
    lastChat: "Wazzup beijing",
    username: "@okay",
  },
  {
    id: 2,
    profilePict: "icon.png",
    name: "Doki-doki",
    lastChat: "Wazzup beijing",
    username: "@okay",
  },
  {
    id: 3,
    profilePict: "icon.png",
    name: "Washoi",
    lastChat: "Wahahahah",
    username: "@okay",
  },
];


type ChatScreensProps = {
  navigation: NavigationProp<StackList, 'ChatPage'>;
};


export default function ChatScreens({navigation}: ChatScreensProps) {
  const goToChatPage = (id: number) => {
    navigation.navigate("ChatPage", { id: id });
  };
  return (
    <View>
      {datas.map((data) => (
        <Pressable key={data.id} onPress={() => goToChatPage(data.id)}>
          <ChatPreview {...data} />
        </Pressable>
      ))}
    </View>
  );
}

