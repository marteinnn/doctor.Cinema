import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';
import UpcomingList from '../../components/UpcomingList'; 

const Upcoming = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <UpcomingList/>
    </View>
);

export default Upcoming;

