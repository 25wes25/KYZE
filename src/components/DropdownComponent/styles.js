import { StyleSheet } from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 3,
    marginVertical: 10,
  },
  listContainer: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
  },
  listItem: {
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    paddingLeft: 10,
    marginBottom: 2,
  },
  arrowDown: {
    marginLeft: 'auto',
    transform: [{ rotate: '90deg' }],
  },
  arrowUp: {
    marginLeft: 'auto',
    transform: [{ rotate: '-90deg' }],
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
  },
});
