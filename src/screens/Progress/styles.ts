import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    justifyContent: 'center',
    padding: wp(5),
  },
});

export default styles;
