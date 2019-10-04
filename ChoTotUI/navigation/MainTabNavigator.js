import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon, TabBarLabel } from '../components/TabBarItems';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MoreScreen from '../screens/MoreScreen';

const config = {
  defaultNavigationOptions: {
    header: null
  },
};

// ============================== HOME ==================================
const HomeStack = createStackNavigator(
  { Home: HomeScreen, },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} text="Đi chợ" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="home" type="FontAwesome5" />
  ),
};

HomeStack.path = '';

// ============================== Chat ==================================
const ChatStack = createStackNavigator(
  { Chat: ChatScreen },
  config
)

ChatStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} text="Tin nhắn" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-chatboxes" />
  ),
};

// ============================== Thông báo ==================================
const NotificationStack = createStackNavigator(
  { Notification: NotificationScreen },
  config
)

NotificationStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} text="Thông báo" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="bell" type="FontAwesome5" />
  ),
};

// ============================== Profile ==================================
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
)

ProfileStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} text="Tôi bán" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon badgeCount={2} focused={focused} name="user" type="FontAwesome5" />
  ),
};

// ============================== Thêm ==================================
const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
  },
  config
)

MoreStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} text="Thêm" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon badgeCount={2} focused={focused} name="ios-more" />
  ),
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ChatStack,
  NotificationStack,
  ProfileStack,
  MoreStack
});

tabNavigator.path = '';

export default tabNavigator;
