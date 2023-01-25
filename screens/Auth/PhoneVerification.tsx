import {View, Dimensions, StyleSheet, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import color from '../../color/color';
import {Box, Button, Input, Spinner, Text} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {LogBox} from 'react-native';
import auth from '@react-native-firebase/auth';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;
const image = require('../../assets/Images/bg-2.png');

const PhoneVerification = (props: Props) => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [CorrectNumber, setCorrectNumber] = useState(false);
  const [Loading, setLoading] = useState(false);

  const navigation: any = useNavigation();
  useEffect(() => {
    LogBox.ignoreAllLogs();
  });

  function handleText(text: any) {
    setPhoneNumber(text);

    if (PhoneNumber.length === 9) {
      console.log('PhoneNumber.length', PhoneNumber.length);

      setCorrectNumber(true);
    } else {
      if (CorrectNumber === true) {
        setCorrectNumber(false);
      } else {
      }
    }
  }

  async function handlePhoneIn(){
    setLoading(true)
    const confirmation = await auth().signInWithPhoneNumber('+91' + PhoneNumber);
    console.log('confirmation', confirmation)
    setLoading(false)
    navigation.navigate('Otp', { otp:confirmation})
  }

  return (
    <KeyboardAwareScrollView extraScrollHeight={20} extraHeight={70}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/Phone1.png')}
          style={{width: width, height: height / 2, alignSelf: 'center'}}
        />
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          alignSelf={'center'}
          fontSize={18}
          color={bgcolor.textDarkBlue}>
          Enter your mobile number, we will send
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          alignSelf={'center'}
          fontSize={18}
          color={bgcolor.textDarkBlue}>
          you OTP to verify
        </Text>
        <Text
          fontFamily={'Nunito'}
          fontWeight={'700'}
          fontSize={16}
          color={bgcolor.textDarkBlue}
          marginLeft={10}
          marginTop={10}
          marginBottom={3}>
          Phone Number
        </Text>
        <Box
          flexDirection={'row'}
          justifyContent={'center'}
          alignContent={'center'}>
          <Image
            source={require('../../assets/Images/india.png')}
            style={{
              width: 45,
              height: 45,
              alignSelf: 'center',
              marginHorizontal: 15,
              top: 5,
            }}
          />
          <Input
            value={PhoneNumber}
            variant="underlined"
            placeholder="Number"
            keyboardType="numeric"
            maxLength={16}
            fontSize={14}
            width={width / 1.45}
            alignSelf={'center'}
            placeholderTextColor={bgcolor.Icon}
            fontWeight={'500'}
            onChangeText={(text: any) => handleText(text)}
            InputRightElement={
              CorrectNumber && (
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/190/190411.png',
                  }}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              )
            }
          />
        </Box>
        <Button
          m={8}
          shadow={5}
          w={width - 65}
          h={height / 17}
          alignSelf={'center'}
          onPress={() => handlePhoneIn()}
          bgColor={bgcolor.forgot}
          borderRadius={28}>
         
          {!Loading ? (
               <Text
               fontFamily={'Nunito'}
               fontWeight={'700'}
               fontSize={15}
               color={bgcolor.textWhite}>
               Phone Number
             </Text>
            ) : (
              <Box flexDirection={'row'}>
                <Text
                  fontFamily={'Nunito'}
                  fontSize={16}
                  fontWeight={'500'}
                  color={bgcolor.textWhite}>
                  Submitting...{'   '}
                </Text>
                <Spinner color="white" size="sm" />
              </Box>
            )}
        </Button>

        <Box
          flexDirection={'row'}
          alignContent={'center'}
          marginTop={7}
          p={2}
          mx={10}>
          <Text
            fontFamily={'Nunito'}
            fontSize={16}
            fontWeight={'500'}
            alignSelf={'center'}
            paddingLeft={47}
            color={bgcolor.textDarkBlue}>
            Need to app ?
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontSize={16}
            fontWeight={'500'}
            alignSelf={'center'}
            paddingLeft={17}
            color={bgcolor.forgot}>
            Register
          </Text>
        </Box>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgcolor.background,
    height: height,
  },
});
export default PhoneVerification;
