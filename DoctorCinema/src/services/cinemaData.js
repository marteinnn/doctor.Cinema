import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const CinemaData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace 'yourTokenHere' with the actual token you've retrieved from secure storage or state
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1NzZmM2IzYzQwNzkzMzZiYzAyNTI0MyIsImlhdCI6MTcwMjI5NTgzMSwiZXhwIjoxNzAyMzgyMjMxfQ.rIZnHbM_rnu04ooBCRP4jV0H50ZoR74YiPJEVH2Z4IA';
      
        const headers = {
          'Content-Type': 'application/json',
          'x-access-token': token  // Set the token in the header
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
    console.log(data);
    return (

      <View>
        {/* Render your data here */}
        <Text>Data: {JSON.stringify(data)}</Text>
      </View>
    );
  };

  export default CinemaData;
  