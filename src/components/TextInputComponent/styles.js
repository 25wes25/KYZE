import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 3,
    marginVertical: 10,
  },
  input: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    paddingLeft: 10,
    marginBottom: 2,
  },
  invalid: {
    borderColor: colors.red,
  },
});
