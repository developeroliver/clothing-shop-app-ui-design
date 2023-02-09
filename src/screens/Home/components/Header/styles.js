import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  column: {
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 14,
    fontFamily: 'regular',
    color: colors.darkBrown,
    paddingBottom: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'bold',
    color: colors.darkBrown,
  },
  profile: {
    width: 40,
    height: 40,
  },
});

export default styles;
