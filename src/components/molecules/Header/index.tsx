import {View, Text} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {Button} from 'components';
import {PropsType} from './types';
import {ICCart, ICLeft} from 'assets';

const Header = ({onPressCart, onPressBack, title, numberCart}: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {onPressBack && <Button icon={<ICLeft />} onPress={onPressBack} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      {onPressCart && (
        <View>
          <Button icon={<ICCart />} onPress={onPressCart} />
          {numberCart && (
            <View style={styles.numberCartContainer}>
              <Text style={styles.numberCart}>{numberCart}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default memo(Header);
