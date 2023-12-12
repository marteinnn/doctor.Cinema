import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.text}>Doctor Cinema</Text>
        <TouchableHighlight
            onPress={() => navigate('Upcoming')}>
            <Text style={styles.textButton}>Upcoming Movie's</Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={() => navigate('Cinemas')}>
            <Text style={styles.textButton}>Cinema's</Text>
        </TouchableHighlight>

    </View>
);

export default Main;

