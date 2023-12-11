import { StyleSheet } from "react-native";
import { secondaryColor } from "../../styles/colors";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      //width: '90%', // container width is 90% of the screen width
      padding: 20,
      backgroundColor: secondaryColor, // a slightly off-white background for the info container
      borderRadius: 8,
      shadowColor: '#000', // shadow for elevation effect
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5, // elevation for Android
      marginBottom: 20,
      },
    img: {
        width: 100, // Set the width of the image
        height: 100, // Set the height of the image
        resizeMode: 'contain', // This will ensure the whole image is scaled down to fit within the dimensions without stretching
      },
});