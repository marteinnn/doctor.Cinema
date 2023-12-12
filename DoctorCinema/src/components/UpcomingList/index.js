import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import UpcomingDetails from "../UpcomingDetails";
import styles from "./styles";
import { getToken } from '../../services/token';

const UpcomingList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const token = await getToken();
                if (!token) {
                    console.log('No token found');
                    setError(new Error('No token found'));
                    setLoading(false);
                    return;
                }
                
                const headers = {
                    'Content-Type': 'application/json',
                    'x-access-token': token  // Set the token in the header
                };

                const response = await fetch('https://api.kvikmyndir.is/upcoming', { method: 'GET', headers });
                if (!response.ok) {
                    throw new Error('Server response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error:', error.message);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty array ensures this effect runs only once
  
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
                    <UpcomingDetails
                        {...item}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default UpcomingList;
