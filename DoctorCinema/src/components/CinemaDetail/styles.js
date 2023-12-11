import { StyleSheet } from 'react-native';
import { mainColor, secondaryColor } from '../../styles/colors.js'

export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: secondaryColor, // white background for each list item
          padding: 10, // adds some padding inside each list item
          marginVertical: 5, // adds vertical margin to space out the list items
          marginHorizontal: 10, // adds horizontal margin for better side spacing
          borderBottomWidth: 1, // adds a bottom border to each list item
          borderBottomColor: '#ddd', // light gray color for the bottom border
          borderRadius: 5, // optional, rounds the corners of each list item
        },
        text: {
          fontSize: 16, // sets a standard font size
          color: '#333', // dark gray color for the text for better readability
          marginBottom: 2, // adds a bit of margin below each text element
        },
      });
