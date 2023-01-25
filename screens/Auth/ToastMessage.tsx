import {View, Dimensions} from 'react-native';
import React from 'react';
import {Box, useToast, Image, Text} from 'native-base';

type Props = {
  error: any;
  ErrorToastBox: any;
  text: any;
  status: any;
  message: any;
};
const {width, height} = Dimensions.get('window');

const ToastMessage = (props: Props) => {
  const toast = useToast();
console.log('Entering--------------------------------------------------------')

 setTimeout(() => {
    console.log('Timeout--------------------------------------------------------')

    toast.show({
        render: () => {
          return (
            <Box
              alignContent={'center'}
              width={width - 50}
              height={70}
              marginBottom={50}
              borderRadius={10}
              shadow={4}
              alignSelf={'center'}
              borderBottomWidth={3}
              borderColor={props.error}
              flexDirection={'row'}
              backgroundColor={props.ErrorToastBox}>
              <Image
                source={require('../../assets/Images/multiply.png')}
                alt="Alternate Text"
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  marginHorizontal: 7,
                }}
              />
              <Box px={5} alignSelf={'center'} justifyContent={'space-around'}>
                <Text
                  fontFamily={'Nunito'}
                  fontSize={16}
                  fontWeight={'500'}
                  color={props.text}>
                  {props.status}
                </Text>
                <Text
                  fontFamily={'Nunito'}
                  fontSize={14}
                  fontWeight={'400'}
                  alignSelf={'center'}
                  color={props.text}>
                  {props.message}
                </Text>
              </Box>
            </Box>
          );
        },
        placement: 'top',
      });
 }, 500);
  return <Box></Box>;
};

export default ToastMessage;
