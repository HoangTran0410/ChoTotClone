import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Container } from 'native-base';

import MySearchBar from '../components/MySearchBar';
import CategoryItem from '../components/CategoryItem';
import LabelListItem from '../components/LabelListItem';
import ProductItem from '../components/ProductItem';

import { labelData, categoryData } from '../utils/data';
import { getListAds, getDetailAd, getAccountInfo, sendEvent } from '../utils/callAPI';

export default class AdsListScreen extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            city: 'Tp Hồ Chí Minh',
            type: 'Điện thoại',
            filter: 'Lọc',
            productData: [],
            pageNumber: 1,
            cg: this.props.navigation.getParam('cg', 5000),
            giveaway: this.props.navigation.getParam('giveaway', false),

            isFetching: false,
        }
    }

    componentDidMount() {
        this.getData(1, true);
    }

    getData = async (page, isRefresh) => {
        page = page || this.state.pageNumber + 1
        const { cg, giveaway } = this.state;
        getListAds({ page, cg, giveaway }, (jsonData) => {
            if (jsonData) {
                const newProductData = jsonData.ads;
                this.setState({
                    productData: (isRefresh ? newProductData : [...this.state.productData, ...newProductData]),
                    pageNumber: page,
                    isFetching: false
                });
            }
        });

    }

    onPressItem = async (item, product_item) => {
        sendEvent('click', item, (jsonData) => console.log(jsonData));

        product_item.setState({ loading: true })
        const adDetail = await getDetailAd(item.list_id)
        const accountDetail = await getAccountInfo(item.account_oid)
        product_item.setState({ loading: false })

        this.props.navigation.navigate('DetailAd', { 'adDetail': adDetail, 'accountDetail': accountDetail })
    }

    onRefresh = () => {
        this.setState({ isFetching: true }, () => { this.getData(1, true) });
    }

    scrollToTop = () => {
        this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
    }

    renderFilters = () => {
        const { city, type, filter } = this.state;
        return (
            <View style={styles.filterContainer}>
                <View style={styles.pickerContainer}>
                    <TouchableOpacity style={[styles.shadow, styles.pickerItem]}>
                        <Text style={{ fontSize: 12 }}>{city}</Text>
                        <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow, styles.pickerItem, { flex: 30 }]}>
                        <Text style={{ fontSize: 12 }}>{type}</Text>
                        <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow, styles.pickerItem, { flex: 20 }]}>
                        <Text style={{ fontSize: 12 }}>{filter}</Text>
                        <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                    </TouchableOpacity>

                </View>
                <View style={styles.categoryContainer}>
                    <FlatList
                        data={categoryData}
                        renderItem={({ item }) => CategoryItem(item)}
                        keyExtractor={item => item.title}
                        horizontal={true}
                    />
                </View>
                <View style={[styles.shadow, styles.labelContainer]}>
                    <FlatList
                        data={labelData}
                        renderItem={({ item }) => LabelListItem(item)}
                        keyExtractor={item => item.title}
                        horizontal={true}
                    />
                </View>
            </View>
        )
    }

    render() {

        return (
            <Container>
                <MySearchBar
                    placeholder="Tìm kiếm trên Chợ Tốt"
                    onSubmitEditing={() => { alert('search') }}
                    leftButton={'arrow-back'}
                    onPressLeftButton={() => this.props.navigation.goBack()}
                    rightButton={'ios-log-out'}
                    onPressRightButton={() => this.props.navigation.navigate('AuthStack')}
                />

                {this.state.isFetching ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size='large' color='#ffbf17' />
                    </View> :
                    <FlatList
                        ref={ref => this.flatListRef = ref}
                        data={this.state.productData}
                        renderItem={({ item }) => <ProductItem item={item} onPress={this.onPressItem} />}
                        keyExtractor={(item, index) => (index + '')}
                        ListEmptyComponent={<Text style={{ alignSelf: 'center' }}>Đang tải...</Text>}
                        ListHeaderComponent={this.renderFilters}
                        numColumns={2}
                        onRefresh={this.onRefresh}
                        refreshing={this.state.isFetching}
                        onEndReached={() => this.getData()}
                        onEndReachedThreshold={1}
                        ListFooterComponent={<ActivityIndicator size='large' color='#ffbf17' />}
                    />
                }

                <TouchableOpacity style={styles.buttonUp} onPress={this.scrollToTop}>
                    <AntDesign name="upcircleo" color="black" size={36} />
                </TouchableOpacity>
            </Container>
        );
    };
}

const styles = StyleSheet.create({
    filterContainer: {

    },
    pickerContainer: {
        backgroundColor: '#ffeb4d',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

    pickerItem: {
        backgroundColor: 'white',
        flex: 40,
        margin: 5,
        paddingVertical: 5,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    categoryContainer: {
        backgroundColor: 'white',
    },

    labelContainer: {
        backgroundColor: '#f1f2f6',
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

    productContainer: {
        backgroundColor: '#f1f2f6',
    },
    buttonUp: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        right: 10,
        width: 50,
        height: 50,
        backgroundColor: '#eeee',
        borderRadius: 25,
    }
});
