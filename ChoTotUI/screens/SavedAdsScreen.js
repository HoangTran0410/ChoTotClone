import React, { PureComponent } from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import { connect } from 'react-redux'

import ProductItem from '../components/ProductItem'
import MySearchBar from '../components/MySearchBar'
import { getDetailAd, getAccountInfo } from '../utils/callAPI'

class SavedAdsScreen extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      listAds: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.savedAds != this.props.savedAds) {
      this.getData()
    }
  }

  getData = () => {
    Promise.all(this.props.savedAds.map(id => getDetailAd(id)))
      .then(ads => {
        if (!ads) return;
        let filtered = ads.filter(item => item.message == undefined)
        this.setState({
          listAds: filtered,
          isFetching: false
        })
      })
  }

  onRefresh = () => {
    this.setState({ isFetching: true }, () => { this.getData(1, true) });
  }

  onPressItem = async (item, product_item) => {
    product_item.setState({ loading: true })
    const adDetail = await getDetailAd(item.list_id)
    const accountDetail = await getAccountInfo(item.account_oid)
    product_item.setState({ loading: false })

    this.props.navigation.navigate('DetailAd', { 'adDetail': adDetail, 'accountDetail': accountDetail })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MySearchBar
          placeholder="Tìm kiếm trên Chợ Tốt"
          onSubmitEditing={this.onSubmitEditingSearch}
          leftButton={'arrow-back'}
          onPressLeftButton={() => this.props.navigation.goBack(null)}
        // rightButton={'ios-log-out'}
        // onPressRightButton={() => alert('login')}
        />
        {
          this.state.listAds.length ?
            <FlatList
              data={this.state.listAds}
              renderItem={({ item }) => <ProductItem item={item} onPress={this.onPressItem} />}
              keyExtractor={(item, index) => (index + '')}
              // ListEmptyComponent={<Text style={{ alignSelf: 'center' }}>Đang tải...</Text>}
              ListHeaderComponent={this.renderFilters}
              numColumns={2}
              onRefresh={this.onRefresh}
              refreshing={this.state.isFetching}
            // ListFooterComponent={<ActivityIndicator size='large' color='#ffbf17' />}
            /> :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Hiện chưa có tin nào được lưu</Text>
            </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    savedAds: state.UserReducer.savedAds
  }
}

export default connect(mapStateToProps)(SavedAdsScreen);