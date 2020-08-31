import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export default StyleSheet.create({
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: colors.black,
      marginHorizontal: 10,
    },
    checkmark: {
      width: 15,
      height: 15,
      margin: 1.5,
    },
});
