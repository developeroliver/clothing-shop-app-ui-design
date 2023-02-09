import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 14,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 13,
  },
  search: {
    width: 20,
    height: 20,
    marginLeft: 16,
    color: colors.darkGrey,
  },
  input: {
    flex: 1,
    paddingLeft: 8,
    color: colors.darkGrey,
    fontFamily: 'regular',
    fontSize: 14,
  },
  filterContainer: {
    marginLeft: 16,
    backgroundColor: colors.brown,
    width: 49,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  filter: {
    width: 24,
    height: 24,
  },
});

export default styles;
