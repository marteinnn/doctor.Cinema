import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Linking,
    Alert,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const MovieInfo = ({ route }) => {
    const movieInfo = route.params;
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <Text>{movieInfo.durationMinutes}</Text>
            <Text>{movieInfo.title}</Text>
            <Image
                style={styles.img}
                source={{ uri: movieInfo.poster }}
            ></Image>
            <Text>{movieInfo.cinemaId}</Text>
        </View>
    );
};

export default MovieInfo;
