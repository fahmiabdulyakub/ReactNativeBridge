/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {memo} from 'react';
import {PropsType} from './types';
import styles from './styles';
import {useState} from 'react';
import {useEffect} from 'react';

const ProgressBar = ({height}: PropsType) => {
  const [width, setWidth] = useState(0);
  const [step, setSteps] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const steps = 10;
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const style = {borderRadius: height, height: height};

  useEffect(() => {
    if (!isPause) {
      const interval = setInterval(() => {
        setSteps((step + 1) % (10 + 1));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [step, isPause]);

  useEffect(() => {
    onStartAnimation();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step]);

  const onPauseAnimation = () => {
    setIsPause(true);
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1000,
      useNativeDriver: true,
    }).stop();
  };

  const onStartAnimation = () => {
    setIsPause(false);
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Text style={styles.text}>
        {step}/{steps}
      </Text>
      <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={[styles.container, style]}>
        <TouchableOpacity
          onPressIn={onPauseAnimation}
          onPressOut={onStartAnimation}>
          <Animated.View
            style={[
              styles.line,
              style,
              {transform: [{translateX: animatedValue}]},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(ProgressBar);
