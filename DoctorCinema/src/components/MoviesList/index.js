import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import MoviesDetails from "../MoviesDetail";
import styles from "./styles";
import { getToken } from "../../services/token";

const MoviesList = ({ cinemaId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getTokenForRequest = async () => {
            try {
                const requestToken = await getToken();
                if (requestToken) {
                    setToken(requestToken);
                } else {
                    console.log("No token found");
                }
            } catch (error) {
                console.error("Error getting token", error);
            }
        };

        getTokenForRequest();
    }, []); // This effect runs once on mount to get the token

    useEffect(() => {
        if (token && cinemaId) {
            // This effect runs when the `token` or `cinemaId` state updates
            const headers = {
                "Content-Type": "application/json",
                "x-access-token": token,
            };

            fetch(`https://api.kvikmyndir.is/movies`, {
                method: "GET",
                headers: headers,
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Server response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    const filteredData = data.filter(movie =>
                        movie.showtimes.some(
                            showtime => showtime.cinema.id === cinemaId
                        )
                    );
                    setData(filteredData);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Fetch error:", error.message);
                    setError(error);
                    setLoading(false);
                });
        }
    }, [token, cinemaId]); // This effect depends on the `token` and `cinemaId` states

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                data={data}
                renderItem={({ item }) => (
                    <MoviesDetails {...item} cinemaId={cinemaId} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default MoviesList;
