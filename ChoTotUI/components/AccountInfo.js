import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Rating from '../components/Rating'
import { getAccountInfo } from '../utils/callAPI';
import { calculateOnlineTime, responseTimeText } from '../utils/functions'
import { defaultAccountInfo } from '../utils/data';

export default class AccountInfo extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      accountDetail: defaultAccountInfo
    }
  }

  componentDidMount() {
    const { account_oid } = this.props.adDetail.ad

    getAccountInfo(account_oid, (accountData) => {
      if (accountData)
        this.setState({
          accountDetail: accountData
        })
    })
  }

  render() {
    const { accountDetail } = this.state;
    const { adDetail } = this.props;

    return (
      <View style={styles.userInfoContainer}>
        {/* user */}
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: accountDetail.info.avatar }}
              style={accountDetail.chat.result.online_status ? [styles.avatar, styles.active] : styles.avatar}
            />
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
              <Text style={{ flexWrap: "wrap" }}>{adDetail.ad.account_name}</Text>
              {
                accountDetail.chat.result.online_status ?
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }}></View>
                    <Text style={{ fontSize: 11, color: '#555' }}> Đang hoạt động</Text>
                  </View> :
                  <Text style={{ fontSize: 11, color: '#555' }}>{calculateOnlineTime(accountDetail.chat.result.online_time)}</Text>
              }
            </View>
          </View>
          <TouchableOpacity style={{ borderRadius: 20, borderColor: '#FFBF17', borderWidth: 2 }}>
            <Text style={{ color: '#FFBF17', paddingHorizontal: 10, paddingVertical: 5, fontSize: 12 }}>Xem trang</Text>
          </TouchableOpacity>
        </View>

        {/* info detail */}
        <View style={[styles.row, { margin: 10 }]}>
          {
            adDetail.ad.company_ad ?
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.size14}>Bán chuyên</Text>
                <AntDesign name='isv' style={{ fontSize: 20 }} />
              </View> :
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={styles.size14}>Cá nhân</Text>
                <AntDesign name='user' style={{ fontSize: 20 }} />
              </View>
          }
          <View style={[styles.borderHorizontal, { flex: 1, alignItems: 'center' }]}>
            <Text style={styles.size14}>Đánh giá</Text>
            <Rating
              star={accountDetail.rating.average_rating}
              totalRating={accountDetail.rating.total_rating}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.size14}>Phản hồi</Text>
            <View>
              {/* <Text style={{ fontSize: 12 }}>{accountDetail.chat.result.response_rate_text}</Text> */}
              <Text style={{ fontSize: 12, textAlign: 'center' }}>{accountDetail.chat.result.response_rate * 100}%</Text>
              <Text style={{ fontSize: 12, textAlign: 'center' }}>{responseTimeText(accountDetail.chat.result.response_time)}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    marginVertical: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#d1d2d3',
    borderBottomColor: '#d1d2d3',
  },
  size14: { fontSize: 14, marginBottom: 10, flex: 1 },
  row: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    borderWidth: 3,
    borderColor: '#ddd',
  },
  active: {
    borderColor: '#4CB944',
  },
})