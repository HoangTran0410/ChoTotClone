import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { labelProductData } from '../utils/data';
import ListTags from './ListTags';

export default class ProductItem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    openDetail = async () => {
        this.props.onPress(this.props.item, this)
    }

    render() {
        const { item, customWidth } = this.props;

        const { subject, price_string, date, area_name } = (item.ad || item)
        const number_of_images = (item.ad ? item.ad.images.length : item.number_of_images)
        const image = (item.ad ? item.ad.thumbnail_image : item.image)

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
                    <ListTags tags={labelProductData} limit={this.props.limitTags || 4} />
                </View>
                {
                    this.state.loading &&
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size='large' color='#ffbf17' />
                    </View>
                }
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
    loadingContainer: {
        backgroundColor: '#2229',
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


