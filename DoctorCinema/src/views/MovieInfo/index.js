import React from "react";
import {
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Linking,
    View,
} from "react-native";
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

    console.log("Showtimes:", movieInfo.showtimes);
    console.log("Selected Cinema ID:", selectedCinemaId);

    const filteredShowtimes = movieInfo.showtimes
        ? movieInfo.showtimes.filter(
              showtime => showtime.cinema.id === selectedCinemaId
          )
        : [];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.infoContainer}>
                <Text style={styles.title}>{movieInfo.title}</Text>
                <Image style={styles.img} source={{ uri: movieInfo.poster }} />
                <Text style={styles.plot}>{movieInfo.plot}</Text>
                <Text style={styles.duration}>
                    Duration: {movieInfo.durationMinutes}
                </Text>
                <Text style={styles.year}>
                    Year of release: {movieInfo.year}
                </Text>
                <Text style={styles.genres}>
                    Genres:{" "}
                    {movieInfo.genres.map(genre => genre.Name).join(", ")}
                </Text>
                {filteredShowtimes.length > 0 ? (
                    <View style={styles.scheduleContainer}>
                        <Text style={styles.scheduleTitle}> Showtimes:</Text>
                        {filteredShowtimes.map((showtime, index) => (
                            <View key={index} style={styles.showtime}>
                                {showtime.schedule.map((time, timeIndex) => {
                                    const [showTime, screen] =
                                        time.time.split("(");
                                    const screenNumber = screen.replace(
                                        ")",
                                        ""
                                    );

                                    return (
                                        <View
                                            key={timeIndex}
                                            style={styles.timeContainer}
                                        >
                                            <Text style={styles.time}>
                                                {showTime.trim()}
                                            </Text>
                                            <Text style={styles.screen}>
                                                Screen: {screenNumber}
                                            </Text>
                                            <TouchableHighlight
                                                style={styles.purchaseButton}
                                                underlayColor="#DDDDDD"
                                                onPress={() =>
                                                    Linking.openURL(
                                                        time.purchase_url
                                                    )
                                                }
                                            >
                                                <Text
                                                    style={
                                                        styles.purchaseButtonText
                                                    }
                                                >
                                                    Buy Tickets
                                                </Text>
                                            </TouchableHighlight>
                                        </View>
                                    );
                                })}
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
