import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../constants/colors';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 34,
    marginBottom: 120,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: Dimensions.get('window').width > 350 ? '58%' : '45%',
    borderRadius: 24,
    marginBottom: 10,
  },
  containerIconLeft: {
    position: 'absolute',
    top: Dimensions.get('window').width > 350 ? 80 : 60,
    left: 10,
    width: 44,
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
    color: colors.darkBrown,
  },
  containerIconRight: {
    position: 'absolute',
    top: Dimensions.get('window').width > 350 ? 80 : 60,
    right: 10,
    width: 44,
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 24,
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  text: {
    fontSize: Dimensions.get('window').width > 350 ? 24 : 18,
    fontFamily: 'semiBold',
  },
  add: {
    flexDirection: 'row',
  },
  addContainer: {
    width: Dimensions.get('window').width > 350 ? 40 : 30,
    height: Dimensions.get('window').width > 350 ? 40 : 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 24,
    color: colors.black,
  },
  addNumber: {
    paddingTop: 5,
    marginLeft: 18,
    marginRight: 18,
    fontSize: Dimensions.get('window').width > 350 ? 24 : 20,
    color: colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    width: 18,
    height: 18,
    marginTop: 8,
  },
  ratingText: {
    alignSelf: 'flex-end',
    paddingLeft: 10,
    color: colors.darkGrey,
    fontSize: 12,
  },
  ratingReviews: {
    alignSelf: 'flex-end',
    paddingLeft: 5,
    color: colors.blue,
    fontSize: 12,
  },
  descriptionContainer: {
    marginTop: 8,
    width: '80%',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 12,
    fontFamily: 'regular',
    color: colors.darkGrey,
  },
  descriptionTextBold: {
    fontSize: 14,
    fontFamily: 'bold',
    color: colors.black,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  sizeColumn: {
    flexDirection: 'column',
  },
  sizeText: {
    color: colors.darkBrown,
    fontFamily: 'bold',
    marginBottom: 5,
  },
  size: {
    width: 26,
    height: 26,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  sizeTextL: {
    color: colors.white,
  },
  sizeChoose: {
    fontSize: 12,
    fontFamily: 'regular',
  },
  sizeColor: {
    width: 26,
    height: 26,
    backgroundColor: colors.black,
    borderRadius: 50,
  },
  color1: {
    backgroundColor: colors.grey,
    marginRight: 8,
  },
  color2: {
    backgroundColor: colors.brown,
    marginRight: 8,
  },
  color3: {
    backgroundColor: colors.darkBrown,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 120,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: colors.darkBrown,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'bold',
  },
  buttonTextLight: {
    color: colors.lightGrey,
    fontSize: 10,
  },
});

export default styles;
