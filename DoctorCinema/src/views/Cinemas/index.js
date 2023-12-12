import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import CinemaList from '../../components/CinemaList';  

const Cinemas = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <CinemaList/>
    </View>
);

export default Cinemas;

