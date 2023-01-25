import { View, Text } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button } from 'native-base';
import { useRoute } from '@react-navigation/native';

type Props = {}

const Homescreen = (props: Props) => {
    const navigation:any = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('Login')}>Homescreen</Button>
    </View>
  )
}

export default Homescreen