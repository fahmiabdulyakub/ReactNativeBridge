import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card, Header} from 'components';
import {Data} from 'constants/index';
import {formatRupiah} from 'utils/FormatUtils';

const Home = () => {
  const onPressCart = () => {};

  return (
    <View style={styles.container}>
      <Header title="Home" onPressCart={onPressCart} />

      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={Data.listProduct}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => (
          <Card
            key={index}
            image={item.image_url}
            title={item.name}
            price={formatRupiah(item.price)}
          />
        )}
      />
    </View>
  );
};

export default Home;
