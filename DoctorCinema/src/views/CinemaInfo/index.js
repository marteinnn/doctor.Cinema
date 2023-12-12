import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TouchableHighlight, Linking, Alert } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MoviesList from '../../components/MoviesList';

const CinemaInfo = ({ route }) => {
    const stripHtmlTags = (str) => {
        if (str != null) {
            return str.replace(/<[^>]*>?/gm, '');
        }
        return '';
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const cinemaInfo = route.params;
    const shortDescription = `${stripHtmlTags(cinemaInfo.description).substring(0, 0)}`;
    const { navigate } = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{cinemaInfo.name}</Text>
                <Text style={styles.description}>
                    {isExpanded ? stripHtmlTags(cinemaInfo.description) : shortDescription}
                </Text>
                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                    <Text style={styles.readMore}>{isExpanded ? 'Close Description' : 'Read Description'}</Text>
                </TouchableOpacity>
                <Text style={styles.address}>{route.params.address}, {route.params.city}</Text>
                <Text style={styles.phone}>{cinemaInfo.phone}</Text>
                <Text style={styles.website}>{cinemaInfo.website}</Text>
            </View>
            <MoviesList
                cinemaId={cinemaInfo.id} />
        </View>
    );
};

export default CinemaInfo;