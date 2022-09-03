import {View, Text} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {Button} from 'components';
import {PropsType} from './types';
import {ICCart, ICLeft} from 'assets';
import {shallowEqual, useSelector} from 'react-redux';
import {GlobalType} from 'types/GlobalType';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from 'types/navigationType';

const Header = ({isShowCart, isShowBack, title}: PropsType) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const cartTotalQuantity = useSelector<GlobalType, number>(
    state => state.cart.cartTotalQuantity,
    shallowEqual,
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {isShowBack && (
          <Button icon={<ICLeft />} onPress={() => navigation.goBack()} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {isShowCart && (
        <View>
          <Button
            icon={<ICCart />}
            onPress={() => navigation.navigate('Cart')}
          />
          {!!cartTotalQuantity && (
            <View style={styles.numberCartContainer}>
              <Text style={styles.numberCart}>{cartTotalQuantity}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default memo(Header);
