import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { data } from "@/constants";

const Welcome = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper>
        {data.onboarding.map((item, index) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
