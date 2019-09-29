import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { labelProductData } from '../utils/data';
import ListLabels from '../components/ListLabels';
import { number } from 'prop-types';

export default class ProductListItem extends PureComponent {
    constructor(props) {
        super(props)
    }

    openDetail = () => {
        this.props.navigation.navigate('DetailAd', { 'item': this.props.item })
    }

    render() {
        const { item, customWidth } = this.props;
        const image = item.image || item.ad.thumbnail_image;
        const subject = item.subject || item.ad.subject;
        const number_of_images = item.number_of_images || item.ad.images.length;
        const price_string = item.price_string || item.ad.price_string;
        const date = item.date || item.ad.date;
        const area_name = item.area_name || item.ad.area_name;

        return (
            <TouchableOpacity
                onPress={this.openDetail}
                style={[styles.shadow, styles.container, customWidth ? { width: customWidth } : {}]}
            >
                <View style={styles.headerContainer}>
                    <Image style={styles.image} source={{ uri: image }} resizeMode={'cover'} />
                    <Text style={{ fontSize: 14, margin: 5 }}>{subject}</Text>
                </View>
                <View style={styles.imageCountContainer}>
                    <Text style={styles.imageCount}>{number_of_images}</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <View style={styles.bodyContainer}>
                        <Text style={{ color: 'red', fontSize: 14, fontWeight: '500' }}>{price_string}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 3 }}>
                            <FontAwesome name="home" size={12} color='#ffbf17' />
                            <Text style={{ fontSize: 12 }}>|</Text>
                            <Text style={{ color: 'grey', fontSize: 11 }}>{date}</Text>
                            {/* <Feather name='award' size={15} color='#ffbf17' />
                        <Text style={{color: 'grey', fontSize: 13}}>Tin uu tien</Text> */}
                            <Text style={{ fontSize: 12 }}>|</Text>
                            <Text style={{ color: 'grey', fontSize: 11 }}>{area_name}</Text>
                        </View>
                    </View>
                    <ListLabels listLabels={labelProductData} limit={2} />
                </View>
            </TouchableOpacity>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },

    headerContainer: {

    },

    bodyContainer: {
        marginLeft: 5,
        justifyContent: 'center',
    },

    image: {
        height: 150,
        width: '100%',
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,

        elevation: 7,
    },
    imageCountContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#0005',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddda',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCount: {
        color: '#fff',
        fontWeight: 'bold'
    },
});


