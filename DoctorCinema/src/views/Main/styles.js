import { StyleSheet } from "react-native";
import { mainColor, secondaryColor } from '../../styles/colors.js'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: mainColor,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo: {
        width: 400,
        height: 400
    },
    text: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold', // make the text bold
        textTransform: 'uppercase', // transform the text to uppercase
    },
    buttonContainer: {
        backgroundColor: secondaryColor,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 2,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textButton: {
        fontSize: 30,
        color: '#333', // softer color for the text
        padding: 10,
        textAlign: 'center',
    }
})