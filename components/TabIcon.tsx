import { View, Text, ImageSourcePropType, Image } from "react-native";

interface Props {
  source: ImageSourcePropType;
  focused: boolean;
}

const TabIcon = ({ source, focused }: Props) => {
  return (
    <View
      className={`flex flew-row justify-center items-center rounded-full ${focused && "bg-general-300"}`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${focused && "bg-general-400"}`}
      >
        <Image
          source={source}
          tintColor="white"
          resizeMode="contain"
          className="w-7 h7"
        />
      </View>
    </View>
  );
};

export default TabIcon;
