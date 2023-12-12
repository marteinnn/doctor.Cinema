import { StyleSheet } from "react-native";
import { secondaryColor } from "../../styles/colors";

export default StyleSheet.create({
    img: {
        width: 100, // Set the width of the image
        height: 100, // Set the height of the image
        resizeMode: 'contain', // This will ensure the whole image is scaled down to fit within the dimensions without stretching
      },
});