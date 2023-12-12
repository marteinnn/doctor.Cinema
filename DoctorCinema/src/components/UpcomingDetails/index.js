import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import styles from "./styles";

const UpcomingDetails = ({
    title,
    poster,
    trailers,
    releaseDate,
}) => {
    const [selectedTrailerUrl, setSelectedTrailerUrl] = useState(null);
    const hasTrailers = Array.isArray(trailers) && trailers.length > 0;

    const handlePressTrailer = (url) => {
        setSelectedTrailerUrl(url);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: poster }}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.releaseDate}>{releaseDate}</Text>
                {hasTrailers && (
                    <View>
                        {trailers[0].results.map((trailer, index) => (
                            <TouchableOpacity key={index} onPress={() => handlePressTrailer(trailer.url)}>
                                <Text style={styles.trailerText}>
                                    {trailer.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            {selectedTrailerUrl && (
                <WebView
                    style={styles.webviewStyle}
                    source={{ uri: selectedTrailerUrl }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            )}
        </View>
    );
};

export default UpcomingDetails;
