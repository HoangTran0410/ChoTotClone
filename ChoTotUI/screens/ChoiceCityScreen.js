import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ImageBackground
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ModalPicker from '../components/ModalPicker'

export default class ChoiceCityScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      cityText: 'Chọn vùng của bạn',
    };
  };

  changeModalVisibility = (bool) => {
    this.setState({
      isModalVisible: bool,
    });
  };

  choiceCity = (city) => {
    this.changeModalVisibility(false);
    this.setState({
      cityText: city,
    });
  };

  render(){
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/2.png')}>
        <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={styles.pickerLabel}>
          <Text style={styles.textLabel}>{this.state.cityText}</Text>
          <TouchableOpacity onPress={() => this.changeModalVisibility(true)} style={styles.dropdownButton}>
            <Ionicons name="md-arrow-dropdown" size={32} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.changeModalVisibility(false)}
          animationType= 'slide'>
            <View style={{flex: 0.22}}></View>
            <View style={{alignItems: 'center', flex: 0.78}}>
              <ModalPicker choiceCity={this.choiceCity}/>
            </View>
        </Modal>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  pickerLabel: {
    height: 60, 
    width:'75%', 
    backgroundColor: '#FFD02C', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center', 
    borderRadius: 10,
  },

  textLabel: {
    fontSize: 15,
    marginLeft: 15,
  },

  dropdownButton: {
    height: 60, 
    width: 60, 
    borderRadius: 10, 
    backgroundColor: "rgba(255,255,255,0.5)",  
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
