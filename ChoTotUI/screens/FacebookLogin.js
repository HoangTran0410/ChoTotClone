import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import * as Facebook from 'expo-facebook';

export default class FacebookLogin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            urlPicture: '',
        };
    };
    logIn = async () => {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('629025020959359');
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
            //console.log(token);
            data = await response.json();
            this.setState({
                id: data.id,
                name: data.name,
                urlPicture: data.picture.data.url,
            });
            //console.log(this.state.urlPicture);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      };

    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity onPress = {this.logIn} style={{width: 120, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                    <Text>Login Facebook</Text>
                </TouchableOpacity>
                <Text>{this.state.id}</Text>
                <Text>{this.state.name}</Text>
                <Image style={{height:100, width: 100}} source={{uri: this.state.urlPicture}}/>
            </View>
        );
    }
}
