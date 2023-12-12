import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import CinemaDetails from "../CinemaDetail";
import styles from "./styles";
import { getToken } from "../../services/token";

const CinemaList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    const getTokenForRequest = async () => {
        try {
            const requestToken = await getToken();
            if (requestToken) {
                setToken(requestToken);
                return;
                // You now have access to the token and can use it for your requests
            } else {
                console.log("No token found");
            }
        } catch (error) {
            console.error("Error getting token", error);
        }
    };

    useEffect(() => {
        getTokenForRequest();
        console.log(token);
        const headers = {
            "Content-Type": "application/json",
            "x-access-token": token, // Set the token in the header
        };

        fetch("https://api.kvikmyndir.is/theaters", {
            method: "GET",
            headers: headers,
        })
            .then(response => {
                if (!response.ok) {
                    // If the server response was not ok, throw an error with the status
                    throw new Error("Server response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Check if data is an array before sorting
                if (Array.isArray(data)) {
                    const sortedData = data.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    setData(sortedData);
                } else {
                    // If data is not an array, handle it accordingly
                    console.error("Fetched data is not an array:", data);
                    setData([]); // Set data to an empty array or handle it as needed
                }
                setLoading(false);
            })
            .catch(error => {
                // Handle any errors here
                console.error("Fetch error:", error.message);
                setError(error);
                setLoading(false);
            });
    }, [token]); // Include token in the dependency array if it's expected to change

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
                renderItem={({ item }) => <CinemaDetails {...item} />}
                keyExtractor={data => data.id}
            />
        </View>
    );
};

export default CinemaList;
