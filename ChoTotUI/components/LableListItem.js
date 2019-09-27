import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function LableListItem(item) {
    return (
        <TouchableOpacity style={[styles.shadow, styles.lableItem]}>
            <Text style={styles.textLableItem}>{item.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
    },

    textLableItem: {
        marginHorizontal: 5,
        fontSize: 12,
    },

});

