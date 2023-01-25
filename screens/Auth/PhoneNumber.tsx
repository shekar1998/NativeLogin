import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import color from '../../color/color';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const PhoneNumber = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PhoneNumber working</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: height,
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    top: 50,
  },
});

export default PhoneNumber;
