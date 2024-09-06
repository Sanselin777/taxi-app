import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
