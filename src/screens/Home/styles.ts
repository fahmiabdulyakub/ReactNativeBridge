import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    paddingVertical: hp(2),
    marginHorizontal: wp(3),
  },
  deviceId: {
    color: Colors.dark_gray,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(2),
  },
});

export default styles;
