import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  grid: {
    height: Dimensions.get('window').width > 350 ? 340 : 300,
    width: '50%',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  container: {
    width: '100%',
  },
  image: {
    position: 'relative',
    height: Dimensions.get('window').width > 350 ? 250 : 200,
    width: '90%',
    borderRadius: 14,
    marginBottom: 8,
  },
  heart: {
    position: 'absolute',
    backgroundColor: colors.darkBrown,
    padding: 8,
    borderRadius: 50,
    top: 10,
    right: 25,
  },
  title: {
    color: colors.darkBrown,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: colors.grey,
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
  },
  price: {
    flex: 1,
    color: colors.black,
    fontSize: 14,
    fontWeight: '600',
  },
  star: {
    width: 18,
    height: 18,
  },
  rating: {
    color: colors.darkBrown,
    fontSize: 12,
    fontWeight: '400',
    paddingRight: 30,
    paddingLeft: 5,
  },
});

export default styles;
