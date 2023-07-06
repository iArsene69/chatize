import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "components/Header";
import TabApp from "screens/TabApp";

export default function Main() {
  return (
    // <View className="pt-10 pb-3 px-4 bg-tertier">
    <>
      <Header />
      <TabApp />
    </>
    // </View>
  );
}
