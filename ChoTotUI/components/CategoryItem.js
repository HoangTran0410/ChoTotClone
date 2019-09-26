import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

export default function CategoryItem(item){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name={item.icon} size={27} color="grey" />
            </View>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginHorizontal: 10, 
        marginVertical: 5,
    },

    icon: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: 'rgba(196,196,196,0.3)',
    },
    
    text: {
        fontSize: 10,
    },
  });
