import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
//import { useNavigation } from "@react-navigation/native";

const MoviesDetails = ({
    id,
    year,
    title,
    genres,
    poster,
}) => {
    console.log(genres.Name)
    //const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            //onPress={() => {
            //    navigate("CinemaInfo", {
            //        id: id,
            //        name: name,
            //        address: address,
            //        city: city,
            //        phone: phone,
            //        website: website,
            //        description: description,
            //        google_map: google_map
            //    });
            //}}
            >
            <View
                style={styles.container}>
                <Image style={styles.img} source={{uri: poster}}></Image>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{year}</Text>
                <View>
                    {genres.map((genre, index) => (
                        <Text key={index} style={styles.genreText}>
                            {genre.Name}
                        </Text>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MoviesDetails;
