import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    width: wp(45),
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: wp(1),
  },
  image: {
    width: wp(41),
    height: hp(20),
    borderRadius: 15,
  },
  title: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: hp(2),
    color: Colors.black,
    marginTop: hp(1),
  },
  price: {
    fontFamily: Fonts.Inter,
    fontSize: hp(2),
    color: Colors.blue,
  },
  buttonAdd: {
    backgroundColor: Colors.blue,
    borderRadius: 20,
    paddingVertical: hp(0.5),
    marginVertical: hp(1),
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  buttonCounter: {
    backgroundColor: Colors.blue,
    width: wp(8),
    height: wp(8),
    borderRadius: wp(8) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    backgroundColor: Colors.blue,
    width: wp(20),
    height: hp(4),
    borderRadius: 10,
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
