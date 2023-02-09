import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  containerIcon: {
    width: Dimensions.get('window').width > 350 ? 40 : 30,
    height: Dimensions.get('window').width > 350 ? 40 : 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  containerCard: {
    flexDirection: 'Column',
  },
  containerCardDetails: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 14,
  },
  containerDetails: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 24,
  },

  columnCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  title: {
    fontSize: Dimensions.get('window').width > 350 ? 14 : 12,
    fontFamily: 'semiBold',
    color: colors.darkBrown,
  },
  subtitle: {
    fontSize: Dimensions.get('window').width > 350 ? 10 : 8,
    fontFamily: 'semiBold',
    color: colors.grey,
    paddingBottom: 10,
  },
  dot: {
    width: 4,
    height: 4,
    paddingLeft: 30,
  },
  add: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: colors.darkBrown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAdd: {
    paddingLeft: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
    color: colors.white,
    fontSize: Dimensions.get('window').width > 350 ? 14 : 12,
    fontFamily: 'semiBold',
  },
  borderCard: {
    marginVertical: Dimensions.get('window').width > 350 ? 24 : 12,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  information: {
    fontSize: Dimensions.get('window').width > 350 ? 14 : 12,
    fontFamily: 'semiBold',
    marginBottom: 16,
  },
  containerVisa: {
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    height: 62,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxVisa: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 8,
  },
  detailsText: {
    fontSize: Dimensions.get('window').width > 350 ? 14 : 12,
    fontFamily: 'regular',
    color: colors.darkBrown,
  },
  detailsText2: {
    fontSize: Dimensions.get('window').width > 350 ? 14 : 12,
    fontFamily: 'bold',
    color: colors.darkBrown,
  },
  button: {
    backgroundColor: colors.darkBrown,
    height: 55,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  buttonText: {
    fontSize: Dimensions.get('window').width > 350 ? 14 : 12,
    fontFamily: 'bold',
    color: colors.white,
  },
});

export default styles;
