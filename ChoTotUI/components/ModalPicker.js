import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import {Citys_VN, Citys} from '../utils/data';

import {change_alias} from '../utils/function';

export default class ModalPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valueSearch: '',
        };
    };

    onChangeValueSearch = (city) => {
        this.setState({
            valueSearch: city,
        });
    };



    render() {
        const input = change_alias(this.state.valueSearch.toLowerCase());
        const option = Citys_VN.filter((city, index) => {return Citys[index].indexOf(input) != -1;}).map( (city) => {
            return (
                <TouchableOpacity onPress={() => this.props.choiceCity(city)} activeOpacity={0.5} style={styles.pickerItem} key={city}>
                    <Text style={{marginLeft: 30}}>{city}</Text>
                </TouchableOpacity>
            )
        })
        
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput 
                        style={styles.textSearch} 
                        value={this.state.valueSearch}
                        placeholder={'Tìm vùng bạn ở'}
                        placeholderTextColor={'#555555'}
                        onChangeText={(city) => this.onChangeValueSearch(city)}
                        />
                    <TouchableOpacity>
                        <Ionicons name="md-search" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width: '100%'}} >
                    {option}
                </ScrollView>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    pickerItem: {
        backgroundColor: 'white', 
        justifyContent: 'center', 
        height: 60, 
        borderBottomWidth: 0.5, 
        borderColor: 'gray'
    },

    container: {
        width: '90%', 
        height: 470, 
        backgroundColor: 'white', 
        borderRadius: 10,
    },

    searchContainer: {
        height:50, 
        backgroundColor: '#FFD02C', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10,
    },

    textSearch: {
        height:'80%', 
        width: '80%', 
        borderColor: 'black', 
        borderBottomWidth: 1,
    },
});
  