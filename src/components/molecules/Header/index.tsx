import {View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {Button} from 'components';
import {PropsType} from './types';
import {ICCart} from 'assets';

const Header = ({onPress}: PropsType) => {
  return (
    <View style={styles.container}>
      <Button icon={<ICCart />} onPress={onPress} />
    </View>
  );
};

export default memo(Header);
