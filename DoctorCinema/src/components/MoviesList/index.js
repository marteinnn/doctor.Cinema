import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import MoviesDetails from "../MoviesDetail";
import styles from "./styles";
import { getToken } from '../../services/token';

const MoviesList = ({ cinemaId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTokenForRequest = async () => {
      try {
        const token = await getToken();
        if (token) {
          return token;
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
          'x-access-token': requestToken
        };
      
        fetch('https://api.kvikmyndir.is/movies', { method: 'GET', headers: headers })
          .then((response) => {
            if (!response.ok) {
              // If the server response was not ok, throw an error with the status
              throw new Error('Server response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Process your data here
            const filteredData = data.filter(movie => movie.showtimes.some(showtime => showtime.cinema.id === cinemaId));
            setData(filteredData);
            
            setLoading(false);
          })
          .catch((error) => {
            // Handle any errors here
            console.error('Fetch error:', error.message);
            setError(error);
            setLoading(false);
          });
      }, [cinemaId, setData]); // The empty array means this effect will only run once when the component mounts
      
  
    if (loading) {
      return <Text>Loading...</Text>;
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
    console.log(data);
    return (
      <View>
        <FlatList
            numColumns={1}
            data={data}
            renderItem={({ item }) => (
                <MoviesDetails
                    {...item}
                />
            )}
            keyExtractor={data => data.id}
        />
      </View>
    );
  };

  export default MoviesList;
  