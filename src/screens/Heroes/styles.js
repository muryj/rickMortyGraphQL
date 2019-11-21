import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 150,
    justifyContent: 'flex-start'
  },
  input: {
    flex: 5,
    borderRightWidth: 0
  },
  button: {
    flex: 2
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
