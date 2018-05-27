import React , { Component } from 'react';

import { Platform, StyleSheet, Text, Animated, View, TouchableOpacity, Dimensions, Image } from 'react-native';

import ClapBubble from './clapBubble.js';

export default class ClapButton extends Component {

    render() {
        return (
            <View style = {{flex:1}} >
            <TouchableOpacity style={styles.clapButton}>
                <Image source={require('../images/clap.png')} style={styles.clapImage}/>
            </TouchableOpacity>
            <ClapBubble / >
            </View>

        )
    }

}

const styles = StyleSheet.create ( {
    clapButton : {
        position : 'absolute',
        height : 60,
        width : 60,
        borderRadius : 30,
        borderWidth : 1,
        borderColor : '#66CCCC',
        backgroundColor : '#fff',
        elevation : 5,
        bottom : 20,
        right : 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    clapImage : {
        height : 35,
        width : 35,
    }
});

