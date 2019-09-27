import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { labelProductData } from '../utils/data';

export default class ProductListItem extends React.PureComponent {

    openDetail = () => {
        this.props.navigation.navigate('DetailAd')
    }

    render() {
        const item = this.props.item;
        return (
            <TouchableOpacity style={[styles.shadow, styles.container]} onPress={this.openDetail}>
                <View style={styles.headerContainer}>
                    <Image style={styles.image} source={{ uri: item.image }} key={item.list_id} resizeMode={'cover'} />
                    <Text style={{ fontSize: 14, fontWeight: '500', margin: 5 }}>{item.subject}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={{ color: 'red', fontSize: 14, fontWeight: '500' }}>{item.price_string}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <FontAwesome name="home" size={12} color='#ffbf17' />
                        <Text style={{ fontSize: 12 }}>|</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>{item.date}</Text>
                        {/* <Feather name='award' size={15} color='#ffbf17' />
                        <Text style={{color: 'grey', fontSize: 13}}>Tin uu tien</Text> */}
                        <Text style={{ fontSize: 12 }}>|</Text>
                        <Text style={{ color: 'grey', fontSize: 11 }}>{item.area_name}</Text>
                    </View>
                </View>
                <View style={styles.labelContainer}>
                    {labelProductData.map(item => {
                        return (
                            <View key={item.id} style={[styles.labelItem, { backgroundColor: item.color, }]}>
                                <Text style={styles.labelText}>{item.title}</Text>
                            </View>
                        );
                    })}
                </View>
            </TouchableOpacity>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        // height: 260,
        margin: 5,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },

    headerContainer: {
        // flex: 0.5,
        // margin: 5,
    },

    labelContainer: {
        // flex: 0.275,
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    bodyContainer: {
        // flex: 0.225,
        marginLeft: 5,
        justifyContent: 'center',
    },

    image: {
        height: 120,
        width: '100%',
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

    labelItem: {
        height: 18,
        margin: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },

    labelText: {
        marginHorizontal: 5,
        fontSize: 12,
    },
});


