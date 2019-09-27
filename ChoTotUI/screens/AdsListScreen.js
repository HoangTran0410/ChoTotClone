import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';


import { SimpleLineIcons, Ionicons, } from '@expo/vector-icons';

import CategoryItem from '../components/CategoryItem';
import LableListItem from '../components/LableListItem';
import ProductListItem from '../components/ProductListItem';

import {labelData, categoryData} from '../utils/data';


export default class AdsListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Tp Hồ Chí Minh',
            type: 'Điện thoại',
            filter: 'Lọc',
            productData: [],
            pageNumber: 0,

        }
    };

    filterForUnique = (arr) => {
        let res = this.state.productData;
        arr.forEach((item) => {
            let unique = true;
            res.forEach((item2) => {
                if(item.list_id === item2.list_id)
                    unique = false;
            });
            if (unique) res.push(item)
        });
        return res;
    };

    getData = async () => {
        const response = await fetch(`https://gateway.chotot.com/v1/public/ad-listing?app_id=android&cg=5010&limit=50&o=${this.state.pageNumber}`);
        const jsonData = await response.json();
        //const newProductData = filterForUniqueProduct(this.state.productData.concat(jsonData.ads.filter((item) => {return item.region_name === this.state.city;})));
        const newProductData = this.filterForUnique(jsonData.ads);
        this.setState({
            productData: newProductData,
            pageNumber: this.state.pageNumber + 10,
        });
        console.log(this.state.productData.length);
    };

    componentDidMount() {
        this.getData();
    };

    render(){
        return (
            <View style={{flex: 1}}>
                <View style={styles.pickerContainer}>
                    <TouchableOpacity style={[styles.shadow,styles.pickerItem]}>
                        <Text style={{fontSize: 13}}>{this.state.city}</Text>
                        <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow,styles.pickerItem]}>
                        <Text style={{fontSize: 13}}>{this.state.type}</Text>
                        <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.shadow,styles.pickerItem, {width: 60}]}>
                        <Text style={{fontSize: 13}}>{this.state.filter}</Text>
                        <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.categoryContainer}>
                    <FlatList
                        data={categoryData}
                        renderItem={({item}) => CategoryItem(item)}
                        keyExtractor={item => item.title}
                        horizontal = {true}
                        
                    />
                </View>
                <View style={[styles.shadow, styles.lableContainer]}>
                    <FlatList
                        data={labelData}
                        renderItem={({item}) => LableListItem(item)}
                        keyExtractor={item => item.title}
                        horizontal = {true}
                        
                    />
                </View>
                <View style={styles.productContainer}>
                    <FlatList
                        data={this.state.productData}
                        renderItem={({item}) => <ProductListItem item={item}/>}
                        keyExtractor={item => item.list_id}
                        numColumns = {2}
                        onEndReached={() => this.getData()}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent = {<ActivityIndicator size='large' loading={this.state.loading} color='#ffbf17' />}
                    />
                </View>
            </View>
        );
    };
}

AdsListScreen.navigationOptions = {
  headerTitle: (
    <TouchableOpacity style={{backgroundColor: 'white', height: 32, width: 260, borderRadius: 5}}>
    </TouchableOpacity>
  ),
  headerRight: (
      <TouchableOpacity style={{marginRight: 5}}>
          <SimpleLineIcons name="login" size={27} color="black" />
      </TouchableOpacity>
  ),
  headerStyle: {
    backgroundColor: '#ffbf17',
  },
  
};

const styles = StyleSheet.create({
  pickerContainer: {
      flex: 0.08,
      backgroundColor: '#ffeb4d',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
  },

  pickerItem: {
    backgroundColor: 'white', 
    width: 135,
    height: '60%', 
    borderRadius: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },

  categoryContainer: {
      flex: 0.11,
      backgroundColor: 'white',
  },

  lableContainer: {
      flex: 0.075,
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
      flex: 0.735,
      backgroundColor: '#f1f2f6',
  },
  
});
