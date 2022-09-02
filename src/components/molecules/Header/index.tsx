import {View, Text} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {Button} from 'components';
import {PropsType} from './types';
import {ICCart, ICLeft} from 'assets';
import {shallowEqual, useSelector} from 'react-redux';
import {GlobalType} from 'types/GlobalType';

const Header = ({onPressCart, onPressBack, title}: PropsType) => {
  const cartTotalQuantity = useSelector<GlobalType, number>(
    state => state.cart.cartTotalQuantity,
    shallowEqual,
  );
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {onPressBack && <Button icon={<ICLeft />} onPress={onPressBack} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      {onPressCart && (
        <View>
          <Button icon={<ICCart />} onPress={onPressCart} />
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
