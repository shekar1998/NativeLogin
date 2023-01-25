import {Dimensions, StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Text, Button, Divider, Box} from 'native-base';
import color from '../../color/color';
import {useNavigation} from '@react-navigation/core';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const InitialScreen = (props: Props) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text
        fontFamily={'TrainOne-Regular'}
        fontWeight={'500'}
        fontSize={15}
        paddingTop={5}
        px={10}>
        Greetings
      </Text>
      <Text
        color={bgcolor.textDarkBlue}
        fontFamily={'TrainOne-Regular'}
        fontWeight={'500'}
        fontSize={28}
        px={10}>
        Welcome to Chatting App
      </Text> */}
      <Image
        source={require('../../assets/Images/Onboarding2.png')}
        style={{width: width, height: height / 2.5, alignSelf: 'center'}}
      />
      <Text
        color={bgcolor.textDarkBlue}
        fontFamily={'Nunito'}
        fontWeight={'500'}
        fontSize={22}
        alignSelf={'center'}
        py={4}>
        Welcome to our new patform
      </Text>
      <Button
        m={3}
        shadow={5}
        w={width - 50}
        h={height / 15}
        onPress={() => navigation.navigate('Login')}
        alignSelf={'center'}
        bgColor={bgcolor.forgot}
        borderRadius={28}
        rightIcon={
          <Image
            source={{
              uri: 'https://cdn-icons.flaticon.com/png/128/2504/premium/2504914.png?token=exp=1656346933~hmac=da707df7433fab04252ffc448e2cdb55',
            }}
            style={{width: width / 12, height: height / 25}}
          />
        }>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={15}
          color={bgcolor.textWhite}>
          Login/Signup
        </Text>
      </Button>
      <Box
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignContent={'center'}
        py={3}
        px={13}>
        <Divider
          thickness="1"
          mx="2"
          width={width / 3}
          top={3}
          _light={{
            bg: bgcolor.divider,
          }}
        />
        <Text
          fontFamily={'Nunito'}
          fontSize={15}
          fontWeight={'700'}
          left={-5}
          top={-1}
          color={bgcolor.dividerText}>
          OR
        </Text>
        <Divider
          thickness="1"
          mx="0"
          top={3}
          width={width / 3}
          _light={{
            bg: bgcolor.divider,
          }}
        />
      </Box>
      <Button
        m={3}
        shadow={5}
        w={width - 50}
        h={height / 15}
        alignSelf={'center'}
        onPress={() => navigation.navigate('PhoneVerification')}
        bgColor={bgcolor.forgot}
        rightIcon={
          <Image
            source={require('../../assets/Images/telephone2.png')}
            style={{width: width / 13, height: height / 27.5}}
          />
        }
        borderRadius={28}>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={15}
          color={bgcolor.textWhite}>
          Phone Number
        </Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: bgcolor.background,
    height: height,
  },
});

export default InitialScreen;
