import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TouchableHighlight, Linking, Alert } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MoviesList from '../../components/MoviesList';

const CinemaInfo = ({ route }) => {
    const cinemaInfo = route.params;
    const { navigate } = useNavigation();

    const stripHtmlTags = (str) => {
        if (str === !null) {
        return str.replace(/<[^>]*>?/gm, '');
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{cinemaInfo.name}</Text>
                <Text style={styles.description}>{stripHtmlTags(cinemaInfo.description)}</Text>
                <Text style={styles.address}>{cinemaInfo.address}, {cinemaInfo.city}</Text>
                <Text style={styles.phone}>{cinemaInfo.phone}</Text>
                <Text style={styles.website}>{cinemaInfo.website}</Text>
            </View>
            <MoviesList
                cinemaId={cinemaInfo.id} />
        </View>
    );
};

export default CinemaInfo;