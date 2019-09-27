// import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import IntroScreen from "../screens/IntroScreen";
import ChoiceCityScreen from "../screens/ChoiceCityScreen";
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LogInScreen';
import SignupScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator(
  {
    LogIn: LoginScreen,
    SignUp: SignupScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    },
  }
)

const MainStack = createStackNavigator(
  {
    Main: MainTabNavigator,
    AuthStack: AuthStack,
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const screens = {
  // Intro: IntroScreen,
  // ChoiceCity: ChoiceCityScreen,
  MainStack: MainStack
}

export default createAppContainer(
  createSwitchNavigator(screens)
);
