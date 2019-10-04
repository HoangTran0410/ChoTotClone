import React, { Component } from 'react';
import { View, Image, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ProfileScreen extends Component {
  state = {
    loggedIn: true,
  }

  componentDidMount = () => {
    // this.checkLogin();
    // this.logOut()
  }

  checkLogin = async () => {
    const token = await AsyncStorage.getItem('@token')

    if (!token) {
      this.setState({
        loggedIn: false
      })

    } else {
      console.log(token)

      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=name,picture.type(large)`);
      data = await response.json();
      console.log(data);

      this.setState({
        userName: data.name,
        avatar: data.picture.data.url,
      });
    }
  }

  logOut = async () => {
    await AsyncStorage.removeItem('@token')
    this.checkLogin()
  }

  render() {

    const container = { flex: 1, justifyContent: 'center', alignItem: 'center' }

    // if (!this.state.userName) {
    //   if (this.state.loggedIn)
    //     return (
    //       <View style={container}>
    //         <ActivityIndicator />
    //       </View>
    //     )

    //   return <View style={container}>
    //     <Button
    //       title="LogIn"
    //       onPress={() => this.props.navigation.navigate('LogIn')}
    //     />
    //   </View>;
    // }

    const { userName, avatar } = this.state

    return (
      <View style={container}>
        {/* <Image source={{ uri: avatar }} style={{ width: 200, height: 200 }} /> */}
        <Text>Count: {this.props.count}</Text>
        {/* <Button title="Đăng xuất" onPress={() => this.logOut()} /> */}
        <Button title="Tăng" onPress={() => this.props.dispatch({ type: 'INCREMENT' })} />
        <Button title="Giảm" onPress={() => this.props.dispatch({ type: 'DECREMENT' })} />
      </View>
    )
  }
}

// export default ProfileScreen;
export default connect(state => {
  return {
    count: state.count
  }
})(ProfileScreen)