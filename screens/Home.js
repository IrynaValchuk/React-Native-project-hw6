import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { View, StyleSheet } from "react-native";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CommentsScreen } from "./CommentsScreen";
import { MapScreen } from "./MapScreen";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        initialRouteName: "Posts",
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.80)",
        tabBarStyle: {
          paddingHorizontal: 39,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="grid" color={color} size={24} />
          ),
          headerTitle: "Публікації",
          headerRight: () => (
            <View style={{ marginRight: 16 }}>
              <Icon
                name="log-out"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <Icon name="plus" size={24} color={"#FFFFFF"} />
            </View>
          ),
          headerTitle: "Створити публікації",
          headerLeft: () => (
            <View style={{ marginLeft: 16 }}>
              <Icon
                name="arrow-left"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          tabBarButton: () => null,
          headerTitle: "Коментарі",
          headerLeft: () => (
            <View style={{ marginLeft: 16 }}>
              <Icon
                name="arrow-left"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarButton: () => null,
          headerTitle: "Карта",
          headerLeft: () => (
            <View style={{ marginLeft: 16 }}>
              <Icon
                name="arrow-left"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 25,
  },
});
