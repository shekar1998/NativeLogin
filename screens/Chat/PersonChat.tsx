import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Avatar, Text} from 'native-base';
import color from '../../color/color';

type Props = {
  photoURL: any;
};

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const PersonChat = (props: Props) => {
  return (
    <TouchableOpacity>
      <Box
        py={3}
        w={'100%'}
        justifyContent={'space-evenly'}
        flexDirection={'row'}>
        <Avatar
          alignSelf={'center'}
          style={styles.avatarImage}
          source={{uri: props.photoURL}}
        />
        <Box
          w={'65%'}
          alignItems={'flex-start'}
          justifyContent={'space-evenly'}>
          <Text
            fontFamily={'Nunito'}
            fontSize={16}
            fontWeight={'500'}
            color={bgcolor.textBlack}>
            Manjunath S
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontSize={14}
            fontWeight={'500'}
            color={bgcolor.chatColor}>
            Heading home now........
          </Text>
        </Box>
        <Box
          style={styles.numText}
          alignContent={'center'}
          borderWidth={1}
          width={6}
          shadow={3}
          height={6}
          alignItems={'center'}
          alignSelf={'center'}
          borderRadius={30}
          bgColor={bgcolor.paymentColor}>
          <Text
            textAlign={'center'}
            fontWeight={'600'}
            color={bgcolor.textWhite}>
            2
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    padding: 2,
    width: 50,
    height: 50,
  },
  numText: {
    elevation: 5,
  },
});

export default PersonChat;
