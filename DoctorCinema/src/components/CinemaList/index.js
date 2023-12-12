import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import CinemaDetails from "../CinemaDetail";
import styles from "./styles";
import { getToken } from '../../services/token';

const CinemaList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState();

    useEffect(() => {
      const getTokenForRequest = async () => {
        try {
          const requestToken = await getToken();
          if (requestToken) {
            setToken(requestToken); // State is updated here, but not immediately
          } else {
            console.log('No token found');
          }
        } catch (error) {
          console.error('Error getting token', error);
        }
      };

      getTokenForRequest();
    }, []); // This effect runs once on mount to get the token

    useEffect(() => {
        if (token) { // This effect runs when the `token` state updates
          console.log("token for request" + token);
          const headers = {
            'Content-Type': 'application/json',
            'x-access-token': token  // The token state is now updated
          };
        
          fetch('https://api.kvikmyndir.is/theaters', { method: 'GET', headers: headers })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Server response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              setData(data);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Fetch error:', error.message);
              setError(error);
              setLoading(false);
            });
        }
    }, [token]);
      
  
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
  