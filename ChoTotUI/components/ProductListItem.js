import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';


import { SimpleLineIcons, Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

import {lableProductData} from '../utils/data';

export default class ProductListItem extends React.PureComponent {
    render(){
        item = this.props.item;
        return(
            <TouchableOpacity style={[styles.shadow, styles.container]}>
                <View style={styles.headerContainer}>
                    <Image style={styles.image} source={{uri: item.image}} key={item.list_id} resizeMode={'contain'}/>
                    <Text style={{fontSize:14, fontWeight: '500'}}>{item.subject}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={{color: 'red', fontSize: 14, fontWeight: '500'}}>{item.price_string}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <FontAwesome name="home" size={12} color='#ffbf17'/>
                        <Text style={{fontSize: 12}}>|</Text>
                        <Text style={{color: 'grey', fontSize: 11}}>{item.date}</Text>
                        {/* <Feather name='award' size={15} color='#ffbf17' />
                        <Text style={{color: 'grey', fontSize: 13}}>Tin uu tien</Text> */}
                        <Text style={{fontSize: 12}}>|</Text>
                        <Text style={{color: 'grey', fontSize: 11}}>{item.area_name}</Text>
                    </View>
                </View>
                <View style={styles.lableContainer}>
                    {   lableProductData.map(item => {
                        return(
                            <TouchableOpacity key={item.id} style={[styles.lableItem, {backgroundColor: item.color, }]}>
                                <Text style = {styles.lableText}>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </TouchableOpacity>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        height: 260, 
        margin: 5, 
        flex: 1, 
        backgroundColor: 'white', 
        justifyContent: 'space-around',
    },

    headerContainer: {
        flex: 0.5, 
        margin: 5,
    },

    lableContainer: {
        flex: 0.275, 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        flexDirection: 'row',
    },

    bodyContainer: {
        flex: 0.225, 
        marginLeft: 5, 
        justifyContent: 'center',
    },

    image: {
        height: 93, 
        width: 160,
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

    lableItem: {
        height: 18, 
        margin: 2.5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 4,
    },

    lableText: {
        marginHorizontal: 5, 
        fontSize: 12,
    },
  });


