// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import IntroScreen from "../screens/IntroScreen";
import ChoiceCityScreen from "../screens/ChoiceCityScreen";

let screens = {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Intro: IntroScreen,
  // ChoiceCity: ChoiceCityScreen,
  Main: MainTabNavigator
}

export default createAppContainer(
  createSwitchNavigator(screens)
);
