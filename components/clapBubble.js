import React , { Component } from 'react';

import { Platform, StyleSheet, Text, Animated, View, TouchableOpacity, Dimensions, Image } from 'react-native';

export default class ClapBubble extends Component {

    constructor() {
        super()
        this.state = {
            yPosition : new Animated.Value(0)

        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.yPosition,{
                toValue: -120,
                duration: 500
            }
        ).start();
    }

    render() {
        const animationStyles = {
            transform : [{translateY : this.state.yPosition}]
        }

        return (
            <Animated.View style={[styles.clapBubble , animationStyles]} >
            
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create ( {
    clapBubble : {
        position : 'absolute',
        height : 60,
        width : 60,
        borderRadius : 30,
        backgroundColor : '#66CCCC',
        bottom : 20,
        right : 20,
    }
});