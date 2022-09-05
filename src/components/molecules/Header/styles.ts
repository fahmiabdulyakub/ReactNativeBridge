import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    height: hp(7),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(35),
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: wp(25),
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(2.5),
  },
  numberCartContainer: {
    backgroundColor: Colors.red,
    width: wp(6),
    height: wp(6),
    borderRadius: wp(6) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: wp(7),
  },
  numberCart: {
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(1.5),
    top: 1,
  },
  addSpace: {
    marginRight: wp(5),
  },
});
