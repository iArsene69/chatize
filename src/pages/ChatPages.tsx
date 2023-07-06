import { View, Text } from 'react-native'
import React from 'react'
import { ChatPageRouteProp } from 'types';


type ChatPagesProps = {
    route: ChatPageRouteProp;
  };
  
  const ChatPages: React.FC<ChatPagesProps> = ({ route }) => {
    const { id } = route.params;
    return (
      <View>
        <Text>ChatPages{id}</Text>
      </View>
    );
  };
  
  export default ChatPages;