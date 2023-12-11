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
        fontSize: 24,
        color: 'white'
    },
    textButton: {
        fontSize: 24,
        color: 'black',
        borderWidth: 2,      
        borderColor: 'black',
        backgroundColor: secondaryColor,
        padding: 10           
    }
})