import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

const apiBaseUrl = 'https://api.kvikmyndir.is';

const authenticate = async (username, password) => {
  try {
    const credentials = `${username}:${password}`; // Replace with your actual username and password
    const encodedCredentials = base64.encode(credentials);

    const response = await fetch(`${apiBaseUrl}/authenticate`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`
      }
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const data = await response.json();
    const token = data.token;
    console.log(token)
    await AsyncStorage.setItem('userToken', token); // Store the token for later use
  } catch (error) {
    console.error('Authentication error:', error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    console.log("getToken token: "+ token)
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

const makeAuthenticatedRequest = async (endpoint) => {
  const token = await getToken();
  if (token) {
    try {
      const response = await fetch(`${apiBaseUrl}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      // Handle the response
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error with authenticated request:', error);
    }
  } else {
    console.error('No token available');
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage has been cleared!');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

export { authenticate, getToken, makeAuthenticatedRequest, clearStorage };
