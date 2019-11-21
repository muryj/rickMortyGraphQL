import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 58, 147, 1)'
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  charactersName: {
    fontSize: 25,
    color: 'yellow',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
