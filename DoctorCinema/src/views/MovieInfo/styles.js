import { StyleSheet } from "react-native";
import { mainColor, secondaryColor } from '../../styles/colors.js'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: mainColor,
  },
  infoContainer: {
    height: '90%',
    flex: 1,
  },
  img: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: secondaryColor,
    marginBottom: 10,
    textAlign: 'center',
    padding: 20,
  },
  plot: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    lineHeight: 24,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  duration: {
    fontSize: 14,
    color: '#fff',
  },
  year: {
    fontSize: 14,
    color: '#fff',
  },
  genres: {
    fontSize: 14,
    color: '#fff',
  },
  scheduleContainer: {
    marginTop: 10,
    backgroundColor: '#fff', // add a background color
    padding: 10, // add some padding
    borderRadius: 5, // round the corners
  },
  scheduleTitle: {
    fontSize: 20, // increase the font size
    fontWeight: "bold",
    marginBottom: 5,
    color: mainColor, // use the main color for the title
  },
  showtime: {
    marginBottom: 5,
    padding: 10, // add some padding
    backgroundColor: secondaryColor, // use the secondary color for the showtime
    borderRadius: 5, // round the corners
  },
  time: {
    fontSize: 18, // increase the font size
   // change the color to white
    marginLeft: 10,
  },
  noShowtimes: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },

  purchaseButton: {
    backgroundColor: secondaryColor,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  purchaseButtonText: {
      color: 'green',
      fontSize: 16,
      fontWeight: 'bold',
  },
  screen: {
      fontSize: 16,
      color: '#333',
  },
});