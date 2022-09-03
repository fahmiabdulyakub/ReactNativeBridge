import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';
import {formatRupiah} from 'utils/FormatUtils';
import {Button} from 'components';
import {ICMinus, ICPlus} from 'assets';

const CartItem = ({
  title,
  image,
  price,
  quantity,
  onPressMinus,
  onPressPlus,
}: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Image source={{uri: image}} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{formatRupiah(price)}</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button
          icon={<ICMinus />}
          style={styles.buttonCounter}
          onPress={onPressMinus}
        />
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{quantity}</Text>
        </View>
        <Button
          icon={<ICPlus />}
          style={styles.buttonCounter}
          onPress={onPressPlus}
        />
      </View>
    </View>
  );
};

export default memo(CartItem);
