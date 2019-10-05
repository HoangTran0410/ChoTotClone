import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Image, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux'

import { readableItem } from '../utils/callAPI'
import { labelProductData } from '../utils/data';
import ListTags from './ListTags';

class ProductItem extends PureComponent {
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
        const { subject, price_string, date, area_name, number_of_images, image, company_ad, giveaway } = readableItem(item);

        return (
            <TouchableWithoutFeedback
                onPress={this.openDetail}
            // style={}
            >
                <View style={[styles.shadow, styles.container, { width: customWidth }]}>
                    <View style={styles.headerContainer}>
                        <Image style={styles.image} source={{ uri: image }} />
                        <Text style={{ fontSize: 13, margin: 5 }}>{subject}</Text>
                    </View>
                    <View style={styles.imageCountContainer}>
                        <Text style={styles.imageCount}>{number_of_images}</Text>
                    </View>
                    <View style={{ padding: 5 }}>
                        <View style={styles.bodyContainer}>
                            {
                                giveaway ?
                                    <Text style={{ fontSize: 14, color: '#49A2A1' }}>
                                        <AntDesign name="gift" style={{ fontSize: 17 }} />
                                        {' Cho tặng'}
                                    </Text> :
                                    <Text style={{ color: 'red', fontSize: 14 }}>{price_string}</Text>
                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 5 }}>
                                {
                                    company_ad ?
                                        <AntDesign name='isv' size={13} color='#ffbf17' /> :
                                        <AntDesign name="user" size={13} color='#333' />
                                }
                                <Text style={styles.small}>{` | ${date} | ${area_name}`}</Text>
                            </View>
                            {/* <ListTags tags={labelProductData} limit={this.props.limitTags || 4} /> */}
                        </View>
                    </View>
                    {
                        this.state.loading &&
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size='large' color='#ffbf17' />
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    };
};

const styles = StyleSheet.create({
    small: {
        fontSize: 10,
        color: 'grey',
    },
    container: {
        margin: 4,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    headerContainer: {

    },
    bodyContainer: {
        // marginLeft: 5,
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'cover',
        height: 150,
        // width: '100%',
        margin: 5
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


const mapStateToProps = (state) => {
    return {
        savedAds: state.UserReducer.savedAds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSavedAd: (list_id) => dispatch({ type: 'toggleSavedAd', list_id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);