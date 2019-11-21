import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  episodeContainer: {
    height: 100,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(150, 54, 148,0.95)',
    width: 350,
  },
  name: {
    color: 'yellow',
    fontSize: 20,
    marginLeft: 20
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    resizeMode: 'contain',
  },
});
