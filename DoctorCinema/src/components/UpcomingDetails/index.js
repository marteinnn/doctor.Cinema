import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { WebView } from "react-native-webview";
import styles from "./styles";

const UpcomingDetails = ({
    title,
    poster,
    trailers,
    "release-dateIS": releaseDate,
}) => {
    const [selectedTrailerUrl, setSelectedTrailerUrl] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const hasTrailers = Array.isArray(trailers) && trailers.length > 0;

    const handlePressTrailer = url => {
        setSelectedTrailerUrl(url);
        setModalVisible(true);
    };

    const date = new Date(releaseDate);
    const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()}`;

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: poster }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.releaseDate}>
                    Date of release: {formattedDate}
                </Text>
                {hasTrailers && (
                    <View>
                        {trailers[0].results.map((trailer, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handlePressTrailer(trailer.url)}
                            >
                                <Text style={styles.trailerText}>
                                    {trailer.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    {selectedTrailerUrl && (
                        <WebView
                            style={styles.webviewStyle}
                            source={{ uri: selectedTrailerUrl }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                        />
                    )}
                    <TouchableOpacity
                        style={styles.modalCloseButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.modalCloseButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default UpcomingDetails;
