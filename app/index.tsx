import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Redirect } from "expo-router";

const Home = () => {
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;

const styles = StyleSheet.create({});
