import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, TouchableOpacity, TouchableHighlight, Linking, Alert, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MovieInfo = ({ route }) => {
    const movieInfo = route.params;
    const { navigate } = useNavigation();
    const selectedCinemaId = route.params?.cinemaId;

    // Check if movieInfo is available
    if (!movieInfo) {
        return <Text>No movie information available.</Text>;
    }

    console.log('Showtimes:', movieInfo.showtimes);
    console.log('Selected Cinema ID:', selectedCinemaId);

    const filteredShowtimes = movieInfo.showtimes
        ? movieInfo.showtimes.filter(showtime => showtime.cinema.id === selectedCinemaId)
        : [];

    const openTrailer = () => {
        console.log(movieInfo);
        if (movieInfo.trailers && movieInfo.trailers.length > 0 && movieInfo.trailers[0].results && movieInfo.trailers[0].results.length > 0) {
            const trailerUrl = movieInfo.trailers[0].results[0].url;
            console.log(trailerUrl);
            Linking.openURL(trailerUrl);
        }
    };

    return ( //Name, Image, Plot, Duration, Year of release, Genres
        <View style={styles.container}>
            <ScrollView style={styles.infoContainer}>
                <Text style={styles.title}>{movieInfo.title}</Text>
                <Image style={styles.img} source={{uri: movieInfo.poster}} />
                <Text style={styles.plot}>{movieInfo.plot}</Text>
                <Text style={styles.duration}>Duration: {movieInfo.durationMinutes}</Text>
                <Text style={styles.year}>Year of release: {movieInfo.year}</Text>
                <Text style={styles.genres}>Genres: {movieInfo.genres.map(genre => genre.Name).join(', ')}</Text>
                <TouchableOpacity onPress={openTrailer}>
                    <Text style={styles.trailer}>Watch a Trailer</Text>
                </TouchableOpacity>
                {filteredShowtimes.length > 0 ? (
                <View style={styles.scheduleContainer}>
                    <Text style={styles.scheduleTitle}>Showtimes:</Text>
                    {filteredShowtimes.map((showtime, index) => (
                        <View key={index} style={styles.showtime}>
                            {showtime.schedule.map((time, timeIndex) => (
                                <Text key={timeIndex} style={styles.time}>
                                    {time.time}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={styles.noShowtimes}>
                    No showtimes available for this cinema.
                </Text>
            )}
            </ScrollView>
        </View>
    );
};

export default MovieInfo;
