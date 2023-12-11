import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const CinemaDetails = ({
    id,
    name,
    address,
    city,
    phone,
    website,
    description,
    google_map,
}) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigate("CinemaInfo", {
                    id: id,
                    name: name,
                    address: address,
                    city: city,
                    phone: phone,
                    website: website,
                    description: description,
                    google_map: google_map
                });
            }}
            >
            <View
                style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{website}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CinemaDetails;
