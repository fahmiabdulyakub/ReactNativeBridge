import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = ({text, onPress, icon, style, textStyle}: PropsType) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {text && <Text style={[styles.title, textStyle]}>{text}</Text>}
      {icon && icon}
    </TouchableOpacity>
  );
};

export default memo(Button);
