/* eslint-disable react-hooks/exhaustive-deps */
import {View, FlatList} from 'react-native';
import React, {Dispatch, useCallback} from 'react';
import styles from './styles';
import {CartItem, Header} from 'components';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {GlobalType} from 'types/GlobalType';
import {ProductCartType} from 'types/ProductType';
import {decrementQty, incrementQty, removeItemCart} from 'store/actions';

const Cart = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const cartList = useSelector<GlobalType, ProductCartType[]>(
    state => state.cart.cartList,
    shallowEqual,
  );

  const onIncrement = useCallback((product: ProductCartType) => {
    dispatch(incrementQty(product));
  }, []);

  const onDecrement = useCallback(
    (product: ProductCartType) => {
      const index = cartList.findIndex(item => item.id === product.id);
      cartList[index]?.quantity === 1
        ? dispatch(removeItemCart(product))
        : dispatch(decrementQty(product));
    },
    [cartList],
  );

  return (
    <View style={styles.container}>
      <Header title="Cart" isShowBack />
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={cartList}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <CartItem
            key={index}
            title={item.name}
            image={item.image_url}
            price={item.price}
            quantity={item.quantity}
            onPressPlus={() => onIncrement(item)}
            onPressMinus={() => onDecrement(item)}
          />
        )}
      />
    </View>
  );
};

export default Cart;
