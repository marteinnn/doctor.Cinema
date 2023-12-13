import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, TouchableHighlight, View, ActivityIndicator } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';
import { secondaryColor } from '../../styles/colors.js';

const Main = ({ navigation: { navigate } }) => {
    const logoPosition = useRef(new Animated.Value(0)).current;
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const buttonFadeAnim = useRef(new Animated.Value(0)).current; // Initial value for button opacity: 0

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonDisabled(false);
            setLoading(false);
            Animated.timing(buttonFadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        }, 3000);

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

        Animated.timing(logoPosition, {
            toValue: 1,
            duration: 1500,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
        }).start();

        return () => clearTimeout(timer); // cleanup on component unmount
    }, []);

    const animatedStyle = {
        transform: [
            {
                translateY: logoPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -50],
                }),
            },
        ],
        opacity: fadeAnim,
    };

    return (
        <View style={styles.container}>
            <Animated.Image style={[styles.logo, animatedStyle]} source={logo} />
            <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>Doctor Cinemas</Animated.Text>
            {isLoading ? (
                <ActivityIndicator size={159} color={secondaryColor} />
            ) : (
                <Animated.View style={{ opacity: buttonFadeAnim }}>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigate('Cinemas')} disabled={isButtonDisabled}>
                            <Text style={styles.textButton}>Cinema's</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigate('Upcoming')} disabled={isButtonDisabled}>
                            <Text style={styles.textButton}>Upcoming Movie's</Text>
                        </TouchableHighlight>
                    </View>
                </Animated.View>
            )}
        </View>
    );
};

export default Main;