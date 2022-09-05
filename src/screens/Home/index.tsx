/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, NativeModules, Text, View} from 'react-native';
import React, {Dispatch, useCallback, useEffect, useState} from 'react';
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

const DeviceInfo = NativeModules.DeviceInfoGet;

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [deviceID, setDeviceID] = useState();
  const cartList = useSelector<GlobalType, ProductCartType[]>(
    state => state.cart.cartList,
    shallowEqual,
  );

  useEffect(() => {
    DeviceInfo.getDeviceID((err: any, device: any) => {
      if (err) {
        // error
      } else {
        // device ID returned
        setDeviceID(device);
      }
    });
  }, []);

  const onAddToCart = useCallback((product: ProductType) => {
    dispatch(addToCart(product));
  }, []);

  const onIncrement = useCallback((product: ProductType) => {
    dispatch(incrementQty(product));
  }, []);

  const onDecrement = useCallback(
    (product: ProductType) => {
      const index = cartList.findIndex(item => item.id === product.id);
      cartList[index]?.quantity === 1
        ? dispatch(removeItemCart(product))
        : dispatch(decrementQty(product));
    },
    [cartList],
  );

  const renderCard = useCallback(
    (item: ProductType, key: number) => {
      const index = cartList.findIndex(itemCart => itemCart.id === item.id);
      return (
        <Card
          key={key}
          image={item.image_url}
          title={item.name}
          price={formatRupiah(item.price)}
          onPressAdd={() => onAddToCart(item)}
          onPressPlus={() => onIncrement(item)}
          onPressMinus={() => onDecrement(item)}
          quantity={cartList[index]?.quantity}
        />
      );
    },
    [cartList],
  );

  return (
    <View style={styles.container}>
      <Header title="Home" isShowCart isShowProgress />
      <FlatList
        ListHeaderComponent={
          <Text style={styles.deviceId}>Device ID : {deviceID}</Text>
        }
        contentContainerStyle={styles.contentContainer}
        data={Data.listProduct}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item, index}) => renderCard(item, index)}
      />
    </View>
  );
};

export default Home;
