import { StyleSheet } from 'react-native';
import { secondaryColor } from "../../styles/colors";

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
        flex: 1,
        marginTop: 20,
        height: 300,
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%',
    }
});

export default styles;
