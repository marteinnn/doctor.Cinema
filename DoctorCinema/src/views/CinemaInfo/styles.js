import { StyleSheet } from "react-native";
import { mainColor, secondaryColor } from '../../styles/colors.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: mainColor,
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
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    //marginBottom: 4,
    color: 'black',
  },
  description: {
    fontSize: 12,
    marginBottom: 8,
    color: '#555',
    lineHeight: 16, // for better readability of longer descriptions
  },
  address: {
    fontSize: 15,
    marginBottom: 4,
    color: '#777',
  },
  phone: {
    fontSize: 15,
    marginBottom: 4,
    color: '#777',
  },
  website: {
    fontSize: 15,
    color: '#0066cc',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  readMore: {
    marginBottom: 4,
    fontSize: 15,
    color: 'blue',
  }
});