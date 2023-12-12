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
  trailer : {
    fontSize: 14,
    color: secondaryColor,
    textAlign: 'center',
    padding: 20,
  },
  scheduleContainer: {
    marginTop: 10,
},
  scheduleTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
  },
  showtime: {
      marginBottom: 5,
  },
  time: {
      fontSize: 16,
      marginLeft: 10,
  },
  noShowtimes: {
      fontSize: 16,
      color: "red",
      textAlign: "center",
  },
  });