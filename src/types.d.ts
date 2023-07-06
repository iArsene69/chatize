import { RouteProp } from '@react-navigation/native';

export interface chatProps {
    id: number,
    name: string,
    lastChat: string,
    username: string
}


export type StackList = {
  Main: undefined;
  ChatPage: { id: number };
};

export type ChatPageRouteProp = RouteProp<StackList, 'ChatPage'>;
