import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function LabelListItem(item) {
    return (
        <TouchableOpacity style={[styles.shadow, styles.labelItem]}>
            <Text style={styles.textLabelItem}>{item.title}</Text>
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

    labelItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin: 5
    },

    textLabelItem: {
        marginHorizontal: 5,
        fontSize: 12,
    },

});

