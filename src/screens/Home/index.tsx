import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Header} from 'components';

const Home = () => {
  const onPressCart = () => {};

  return (
    <View style={styles.container}>
      <Header onPress={onPressCart} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
