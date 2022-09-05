import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header, ProgressBar} from 'components';

const Progress = () => {
  return (
    <View style={styles.container}>
      <Header title="Progress" isShowBack />
      <View style={styles.contentContainer}>
        <ProgressBar height={20} />
      </View>
    </View>
  );
};

export default Progress;
