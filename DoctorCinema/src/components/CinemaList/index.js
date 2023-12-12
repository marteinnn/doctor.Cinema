import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import CinemaDetails from "../CinemaDetail";
import styles from "./styles";
import { getToken } from '../../services/token';

const CinemaList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTokenForRequest = async () => {
      try {
        const token = await getToken();
        if (token) {
          return token;
          // You now have access to the token and can use it for your requests
        } else {
          console.log('No token found');
        }
      } catch (error) {
        console.error('Error getting token', error);
      }
    };

    useEffect(() => {
        const requestToken = getTokenForRequest();
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': requestToken  // Set the token in the header
        };
      
        fetch('https://api.kvikmyndir.is/theaters', { method: 'GET', headers: headers })
          .then((response) => {
            if (!response.ok) {
              // If the server response was not ok, throw an error with the status
              throw new Error('Server response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Process your data here
            setData(data);
            
            setLoading(false);
          })
          .catch((error) => {
            // Handle any errors here
            console.error('Fetch error:', error.message);
            setError(error);
            setLoading(false);
          });
      }, []); // The empty array means this effect will only run once when the component mounts
      
  
    if (loading) {
      return <Text>Loading...</Text>;
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
    return (
      <View>
        <FlatList
            numColumns={1}
            data={data}
            renderItem={({ item }) => (
                <CinemaDetails
                    {...item}
                />
            )}
            keyExtractor={data => data.id}
        />
      </View>
    );
  };

  export default CinemaList;
  