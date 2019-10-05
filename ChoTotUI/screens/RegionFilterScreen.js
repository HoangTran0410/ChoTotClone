import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import {Cities_VN, Cities} from '../utils/data';
import {change_alias} from '../utils/functions';
import { connect } from 'react-redux';

class RegionFilterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: '',

        }
    };

    onChangeValueSearch = (city) => {
        this.setState({
            valueSearch: city,
        });
    };

    render(){
        const input = change_alias(this.state.valueSearch.toLowerCase());
        const filtered = Cities_VN.filter((city, index) => { return Cities[index].indexOf(input) != -1; });
        let options;
        if (filtered.length > 0) {
            options = filtered.map((city) => {
                return (
                    <TouchableOpacity
                        onPress = {() => {this.props.changeRegion(city); this.props.navigation.navigate('AdsList')}}
                        activeOpacity={0.5}
                        style={[styles.shadow,{height: 55, marginTop: 5, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]} key={city}
                    >
                        <Text style={{marginLeft: 10, fontSize: 13, fontWeight: '400'}}>{city}</Text>
                        <AntDesign name="right" size={25} color="black" />
                    </TouchableOpacity>
                )
            })
        } else {
            options = <TouchableOpacity style={styles.buttonCity} >
                <Text style={styles.notFoundText}>- Không có kết quả phù hợp -</Text>
            </TouchableOpacity>
        }


        return (
            <View style={styles.container}>
                <View style={[{height: 65, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.goBack()}
                    style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="md-arrow-back" size={25} color="black" />
                    </TouchableOpacity>
                    <Text  style={{fontWeight: '500'}}>CHỌN TỈNH, THÀNH PHỐ</Text>
                    <View style={{height: 50, width: 50}}></View>
                </View>

                <View style={[styles.shadow, styles.searchContainer]}>
                    <TouchableOpacity>
                        <Ionicons name="md-search" size={32} color="black" />
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.textSearch} 
                        value={this.state.valueSearch}
                        placeholder={'Nhập từ khóa để lọc'}
                        placeholderTextColor={'#555555'}
                        onChangeText={(city) => this.onChangeValueSearch(city)}
                        />
                </View>

                <ScrollView>
                    {options}
                </ScrollView>
            </View>
        );
    };
}

RegionFilterScreen.navigationOptions = {
    title: "CHỌN TỈNH, THÀNH PHỐ",
      headerStyle: {
        backgroundColor: '#f1f2f6',
      },
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F1F2F6',
    },

    searchContainer: {
        height:50, 
        backgroundColor: 'white',
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        marginBottom: 10,
    },

    textSearch: {
        height:'80%', 
        width: '80%', 
        borderColor: 'black', 
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    notFoundText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
    },
});


const mapStateToProps = (state) => {
    return {
      // userData: state.UserReducer.userData
      //region: state.UserReducer.region,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      //loginFB: (userData) => dispatch({ type: 'loginFB', userData })
      changeRegion: (region) => dispatch({type: 'changeRegion', region})
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(RegionFilterScreen);
