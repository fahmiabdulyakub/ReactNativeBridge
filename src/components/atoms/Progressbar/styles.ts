import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light_grey,
    overflow: 'hidden',
  },
  line: {
    backgroundColor: Colors.dark_gray,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  text: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(2),
    marginBottom: hp(1),
    color: Colors.black,
  },
});

export default styles;
