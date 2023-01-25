import {View, Dimensions, Image, Linking} from 'react-native';
import React from 'react';
import color from '../../color/color';
import {Box, Icon, Input, Spinner, Text, Button, Divider} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AppLink from 'react-native-app-link';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const ResetConfirm = (props: Props) => {

    function openEmail(){
        Linking.openURL('mailto')
    }

  return (
    <Box bgColor={bgcolor.background} flex={1} width={width} height={height}>
      <Image
        source={require('../../assets/Images/ChangePassword.png')}
        style={{
          width: width - 100,
          height: height / 3,
          alignSelf: 'center',
          marginHorizontal: 7,
        }}
      />
      <Text
        // fontFamily={'Nunito'}
        fontWeight={'700'}
        fontSize={30}
        paddingBottom={3}
        alignSelf={'center'}
        color={bgcolor.textDarkBlue}>
        Check your mail{' '}
      </Text>
      <Text
        fontFamily={'Nunito'}
        fontWeight={'400'}
        fontSize={17}
        marginX={5}
        alignSelf={'center'}
        color={bgcolor.textDarkBlue}>
        We have sent a password recovery
      </Text>
      <Text
        fontFamily={'Nunito'}
        fontWeight={'400'}
        fontSize={17}
        paddingBottom={3}
        alignSelf={'center'}
        color={bgcolor.textDarkBlue}>
        instruction to your email{' '}
      </Text>
      <Button
        bgColor={bgcolor.forgot}
        alignSelf={'center'}
        width={width / 2.15}
        marginX={8}
        marginY={5}
        borderRadius={12}
        onPress={() => openEmail()}
        p={3}>
        <Text
          fontFamily={'Nunito'}
          fontSize={16}
          fontWeight={'500'}
          color={bgcolor.textWhite}>
          Open email app
        </Text>
      </Button>

      <Text
        fontFamily={'Nunito'}
        fontSize={15}
        fontWeight={'700'}
        top={-7}
        alignSelf={'center'}
        color={bgcolor.dividerText}>
        OR
      </Text>

      <Button
        bgColor={bgcolor.forgot}
        alignSelf={'center'}
        width={width / 2.15}
        marginX={8}
        marginY={2}
        marginBottom={5}
        borderRadius={12}
        // onPress={() => handleLogin()}
        p={3}>
        <Text
          fontFamily={'Nunito'}
          fontSize={16}
          fontWeight={'500'}
          color={bgcolor.textWhite}>
          Return to Login
        </Text>
      </Button>

      <Text
        fontFamily={'Nunito'}
        fontWeight={'400'}
        fontSize={14}
        marginX={5}
        alignSelf={'center'}
        color={bgcolor.textDarkBlue}>
        Did not recive the email ? check your spame filters,
      </Text>
      <Text
        fontFamily={'Nunito'}
        fontWeight={'400'}
        fontSize={14}
        paddingBottom={3}
        alignSelf={'center'}
        color={bgcolor.textDarkBlue}>
        or{' '}
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={14}
          paddingBottom={3}
          alignSelf={'center'}
          color={bgcolor.forgot}>
          try another email address
        </Text>
      </Text>
    </Box>
  );
};

export default ResetConfirm;
