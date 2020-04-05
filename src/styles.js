import {Dimensions, Platform} from 'react-native';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#BDBDBD',
  mediumGray: '#666666',
  darkGray: '#222222',
  opaqueBlack: 'rgba(0, 0, 0, 0.4)',
  mintGreen: '#3D9690',
  red: '#FF0000',
  tan: '#ede9d6',
  yellowGold: '#efca55',
};

export const fonts = {
  gothic: 'Apple SD Gothic Neo',
};

export let dynamicSizes = {
  tabNavigatorHeight: isIphoneXorGreater() ? 100 : 60,
};

function isIphoneXorGreater() {
  const dim = Dimensions.get('window');

  return Platform.OS === 'ios' && (dim.height >= 812 || dim.width >= 812);
}
