import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';
import {Button} from 'components';
import {ICMinus, ICPlus} from 'assets';

const Card = ({
  image,
  title,
  price,
  quantity,
  onPressAdd,
  onPressPlus,
  onPressMinus,
}: PropsType) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      {quantity ? (
        <View style={styles.containerItem}>
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
      ) : (
        <Button text="Add" style={styles.buttonAdd} onPress={onPressAdd} />
      )}
    </View>
  );
};

export default memo(Card);
