import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'themes/index';
import {Cart, Home, Progress} from 'screens';
import {StackParams} from 'types/navigationType';
import {Provider} from 'react-redux';
import store from 'store';
const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  LogBox.ignoreLogs(['Require cycle:']);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar backgroundColor={Colors.blue} barStyle="dark-content" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Progress"
              component={Progress}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
