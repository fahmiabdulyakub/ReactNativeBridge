import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: hp(3),
    paddingHorizontal: wp(3),
    borderBottomWidth: 5,
    borderBottomColor: Colors.light_grey,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerName: {
    flexDirection: 'row',
    width: wp(50),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  image: {
    width: wp(20),
    height: wp(20),
    borderRadius: 10,
  },
  title: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(1.8),
    color: Colors.black,
  },
  price: {
    fontFamily: Fonts.Inter,
    fontSize: hp(1.8),
    color: Colors.blue,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(2),
    width: wp(35),
  },
  buttonCounter: {
    backgroundColor: Colors.blue,
    width: wp(6),
    height: wp(6),
    borderRadius: wp(6) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    backgroundColor: Colors.blue,
    width: wp(15),
    height: hp(4),
    borderRadius: 8,
    justifyContent: 'center',
  },
  number: {
    fontSize: hp(2),
    textAlign: 'center',
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    top: 1,
  },
});
