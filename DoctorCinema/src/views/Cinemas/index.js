import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import CinemaList from '../../components/CinemaList';
import { getToken } from '../../services/token';

const useTokenForSomething = async () => {
    try {
      const token = await getToken();
      if (token) {
        console.log(token);
        // You now have access to the token and can use it for your requests
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error getting token', error);
    }
  };
  

const Cinemas = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <CinemaList/>
    </View>
);

export default Cinemas;

