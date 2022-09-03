import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    paddingBottom: hp(2),
  },
});

export default styles;
