import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ImageBackground, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';

class SignUpScreen extends Component {
  state = {
    phone: '',
    pass: ''
  }
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/screens/waveScreen2.png')}>
        <View style={styles.smallContainer}>

          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#04CB00', textAlign: 'center', marginBottom: 20 }}>ĐĂNG KÝ</Text>

          <TextInput
            keyboardType='phone-pad'
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#575757"
            style={styles.input}
            value={this.state.phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#575757"
            style={styles.input}
            value={this.state.pass}
            onChangeText={(pass) => this.setState({ pass })}
          />

          <Button
            title="ĐĂNG KÝ"
            containerStyle={{ marginVertical: 15 }}
            buttonStyle={{ backgroundColor: '#FF9900', padding: 10 }}
            titleStyle={{ fontWeight: 'bold' }}
            onPress={() => alert('Đăng kí thành công')}
          ></Button>

          <Text>
            Bấm vào đăng ký nghĩa là bạn đã đọc và đồng ý với
            <Text style={{ color: '#FF9900' }} onPress={() => { alert('Điều khoản sử dụng') }}> Điều khoản sử dụng của Chợ Tốt.
            </Text>
          </Text>

        </View>

        <Button
          // title="TRỞ VỀ"
          icon={{
            name: "arrow-back",
            size: 25,
            color: '#999'
          }}
          containerStyle={{ position: 'absolute', top: 2, left: 0 }}
          buttonStyle={{ backgroundColor: 'transparent' }}
          titleStyle={{ color: '#999' }}
          onPress={() => { this.props.navigation.goBack() }}
        ></Button>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  smallContainer: {
    width: '80%',
  },
  input: {
    padding: 10,
    backgroundColor: "#E7E7E7",
    borderRadius: 5,
    marginTop: 10,
    fontStyle: 'italic'
  }
})

export default SignUpScreen;