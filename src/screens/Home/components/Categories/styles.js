import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginRight: 12,
    marginBottom: 22,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  title: {
    color: colors.darkBrown,
    fontSize: 12,
    fontFamily: 'medium',
  },
  empty: {
    marginBottom: 32,
  },
});

export default styles;
