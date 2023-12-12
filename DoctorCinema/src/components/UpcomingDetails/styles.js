import { StyleSheet, Dimensions } from 'react-native';
import { mainColor, secondaryColor } from "../../styles/colors";

// Get the window dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'flex-start', // Align items to the start of the cross axis
        marginBottom: 15,
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 4,
        marginRight: 20,
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'column', // Stack texts vertically
        justifyContent: 'flex-start', // Align texts to the start of the main axis
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
        flexShrink: 1, // Ensure text doesn't overflow
    },
    releaseDate: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5,
    },
    trailerText: {
        fontSize: 12,
        color: 'blue', // Color to indicate it's clickable
        textDecorationLine: 'underline',
        marginVertical: 5,
        marginRight: 5,
        flexWrap: 'wrap', // Wrap text if it's too long
        flexShrink: 1,
    },
    webviewStyle: {
        width: windowWidth * 0.7, // 80% of the window width
        height: windowHeight * 0.35, // 40% of the window height
        borderRadius: 10, // Match modal's border radius
        overflow: 'hidden', // Hide overflow
        //marginTop: 20, // Space from the top
    },
    modalView: {
        margin: '70%',
        backgroundColor: mainColor,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        width: windowWidth * 0.8, // 80% of the window width
        height: windowHeight * 0.4, // 40% of 
    },
    modalCloseButton: {
        backgroundColor: secondaryColor,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 10,

    },
    modalCloseButtonText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    },
});

export default styles;
