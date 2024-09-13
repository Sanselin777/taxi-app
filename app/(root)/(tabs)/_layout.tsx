import TabIcon from "@/components/TabIcon";
import { icons, tabList } from "@/constants";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      {tabList.map(({ name, title, icon }, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={name}
            options={{
              title: `${title}`,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon source={icon} focused={focused} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default Layout;
