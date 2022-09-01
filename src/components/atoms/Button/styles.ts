import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: hp(2),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    top: 1,
  },
});
