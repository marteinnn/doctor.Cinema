import { StyleSheet } from "react-native";
import { secondaryColor } from "../../styles/colors";

export default StyleSheet.create({
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
    
  },
  textContainer: { // New style for the text container
    flexDirection: 'column', // Stack texts vertically
    justifyContent: 'flex-start', // Align texts to the start of the main axis
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    flexShrink: 1, // Allows the title to shrink if the text is too long
  },
  year: {
    color: '#666',
    fontSize: 14,
    marginBottom: 5, // Adds space below the year
  },
  genreText: {
    color: '#007BFF',
    fontSize: 12,
    marginRight: 5,
    marginBottom: 5, // Adds space below each genre
  },
});
