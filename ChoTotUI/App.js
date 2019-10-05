import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { Root } from "native-base";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './navigation/AppNavigator';
import AppLoading from './screens/AppLoading';
import { store, persistor } from './reducers/store';

// https://reactnavigation.org/docs/en/react-native-screens.html
// import { useScreens } from 'react-native-screens';
// useScreens();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingComplete: false
    }
  }

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // require('./assets/images/icons/tinDangDaLuu.png'),
        // require('./assets/images/icons/timKiemDaLuu.png'),
        // require('./assets/images/icons/friends.png'),
        // require('./assets/images/icons/dongTot.png'),
        // require('./assets/images/icons/lichSuGiaoDich.png'),
        // require('./assets/images/icons/theCuaToi.png'),
        // require('./assets/images/icons/taoCuaHang.png'),
        // require('./assets/images/icons/quangCaoTot.png'),
        // require('./assets/images/icons/uuDai.png'),
        // require('./assets/images/icons/vongQuayMayMan.png'),
        // require('./assets/images/icons/troGiup.png'),
        // require('./assets/images/icons/caiDat.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
        // remove this if you are not using it in your app
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        // 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  }

  handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  }

  renderLoadingStorage = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      )
    } else {
      return (
        // Provider dùng cho store redux
        <Provider store={store}>
          {/* PersistGate dùng cho đồng bộ redux và Asycn storage */}
          <PersistGate persistor={persistor} loading={this.renderLoadingStorage()}>
            {/* Root dùng cho toast native base */}
            <Root>
              <View style={styles.container}>
                <AppNavigator />
              </View>
            </Root>
          </PersistGate>
        </Provider>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight
  },
});
