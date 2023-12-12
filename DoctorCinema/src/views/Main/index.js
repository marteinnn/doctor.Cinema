import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, TouchableHighlight, View } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => {
    const logoPosition = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(logoPosition, {
                    toValue: 2.5,
                    duration: 1500,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(logoPosition, {
                    toValue: 0,
                    duration: 1500,
                    easing: Easing.inOut(Easing.quad),
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, []);

    const animatedStyle = {
        transform: [
            {
                translateY: logoPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 10],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Animated.Image style={[styles.logo, animatedStyle]} source={logo} />
            <Text style={styles.text}>Doctor Cinemas</Text>
            <View style={styles.buttonContainer}>
                <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigate('Cinemas')}>
                    <Text style={styles.textButton}>Cinema's</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigate('Upcoming')}>
                    <Text style={styles.textButton}>Upcoming Movie's</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default Main;