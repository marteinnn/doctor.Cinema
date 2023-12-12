import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MoviesDetails = ({
    id,
    title,
    poster,
    plot,
    durationMinutes,
    year,
    genres,
    trailers,
    cinemaId,
    showtimes,
    
}) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigate("MovieInfo", {
                    id: id,
                    title: title,
                    poster: poster,
                    plot: plot,
                    durationMinutes: durationMinutes,
                    year: year,
                    genres: genres,
                    trailers: trailers,
                    cinemaId: cinemaId,
                    showtimes: showtimes,
                    

                });
            }}
            >
            <View
                style={styles.container}>
                <Image style={styles.img} source={{uri: poster}}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>{year}</Text>
                    <View>
                        {genres.map((genre, index) => (
                            <Text key={index} style={styles.genreText}>
                                {genre.Name}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MoviesDetails;
