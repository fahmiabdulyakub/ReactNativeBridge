import {FlatList, View} from 'react-native';
import React, {Dispatch} from 'react';
import styles from './styles';
import {Card, Header} from 'components';
import {Data} from 'constants/index';
import {formatRupiah} from 'utils/FormatUtils';
import {GlobalType} from 'types/GlobalType';
import {ProductCartType, ProductType} from 'types/ProductType';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQty,
  incrementQty,
  removeItemCart,
} from 'store/actions';

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const cartList = useSelector<GlobalType, ProductCartType[]>(
    state => state.cart.cartList,
    shallowEqual,
  );

  const onPressCart = () => {};

  const onAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const onIncrement = (product: ProductType) => {
    dispatch(incrementQty(product));
  };

  const onDecrement = (product: ProductType, index: number) => {
    cartList[index]?.quantity === 1
      ? dispatch(removeItemCart(product))
      : dispatch(decrementQty(product));
  };

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
            onPressAdd={() => onAddToCart(item)}
            onPressPlus={() => onIncrement(item)}
            onPressMinus={() => onDecrement(item, index)}
            quantity={cartList[index]?.quantity}
          />
        )}
      />
    </View>
  );
};

export default Home;
