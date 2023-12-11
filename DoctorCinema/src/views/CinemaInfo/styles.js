import { StyleSheet } from "react-native";
import { mainColor, secondaryColor } from '../../styles/colors.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: mainColor, // assuming a light theme
  },
  infoContainer: {
    width: '90%', // container width is 90% of the screen width
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
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
    lineHeight: 24, // for better readability of longer descriptions
  },
  address: {
    fontSize: 14,
    marginBottom: 4,
    color: '#777',
  },
  phone: {
    fontSize: 14,
    marginBottom: 4,
    color: '#777',
  },
  website: {
    fontSize: 14,
    color: '#0066cc',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
});