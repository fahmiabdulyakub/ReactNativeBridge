import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    height: hp(8),
    paddingHorizontal: wp(5),
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
});
