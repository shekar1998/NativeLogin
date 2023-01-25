import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Box,
  Button,
  Divider,
  Icon,
  Image,
  Input,
  Spinner,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import color from '../../color/color';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import {useToast} from 'native-base';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgColor = color.light;

const SignUp = (props: Props) => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const toast = useToast();

  const [Email, setEmail]: any = useState('shekar6803@gmail.com');
  const [Name, setName]: any = useState('Manjunath S');
  const [Password, setPassword] = useState('manju@1998');
  const [ProfileImage, setProfileImage] = useState('https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480');
  const [Loading, setLoading] = useState(false);
  console.disableYellowBox = true;

  function handleSignIn() {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(async (authUser) => {
        console.log('User account created & signed in!');
        await authUser.user.updateProfile({
          displayName:'Manjunath S',
          photoURL: ProfileImage
        })
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000);
        toast.show({
          render: () => {
            return (
              <Box
                alignContent={'center'}
                width={width - 50}
                height={70}
                marginBottom={50}
                borderRadius={7}
                shadow={4}
                alignSelf={'center'}
                borderBottomWidth={3}
                borderColor={bgColor.available}
                flexDirection={'row'}
                backgroundColor={bgColor.AvailableToastBox}>
                <Image
                  source={require('../../assets/Images/checkmark.png')}
                  // alt="Alternate Text"
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: 'center',
                    marginHorizontal: 7,
                  }}
                />
                <Box
                  px={5}
                  alignSelf={'center'}
                  justifyContent={'space-around'}>
                  <Text
                    fontFamily={'Nunito'}
                    fontSize={16}
                    fontWeight={'500'}
                    color={bgColor.textBlack}>
                    Success
                  </Text>
                  <Text
                    fontFamily={'Nunito'}
                    fontSize={14}
                    fontWeight={'400'}
                    alignSelf={'center'}
                    color={bgColor.textBlack}>
                    You have successfully registered {':)'}
                  </Text>
                </Box>
              </Box>
            );
          },
          placement: 'top',
        });
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2000);
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
                  borderColor={bgColor.error}
                  flexDirection={'row'}
                  backgroundColor={bgColor.ErrorToastBox}>
                  <Image
                    source={require('../../assets/Images/multiply.png')}
                    // alt="Alternate Text"
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center',
                      marginHorizontal: 7,
                    }}
                  />
                  <Box
                    px={5}
                    alignSelf={'center'}
                    justifyContent={'space-around'}>
                    <Text
                      fontFamily={'Nunito'}
                      fontSize={16}
                      fontWeight={'500'}
                      color={bgColor.textBlack}>
                      Error
                    </Text>
                    <Text
                      fontFamily={'Nunito'}
                      fontSize={14}
                      fontWeight={'400'}
                      alignSelf={'center'}
                      color={bgColor.textBlack}>
                      That email address is already in use! {':)'}
                    </Text>
                  </Box>
                </Box>
              );
            },
            placement: 'top',
          });
          setLoading(false);
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
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
                  borderColor={bgColor.error}
                  flexDirection={'row'}
                  backgroundColor={bgColor.ErrorToastBox}>
                  <Image
                    source={require('../../assets/Images/multiply.png')}
                    // alt="Alternate Text"
                    style={{
                      width: 40,
                      height: 40,
                      alignSelf: 'center',
                      marginHorizontal: 7,
                    }}
                  />
                  <Box
                    px={5}
                    alignSelf={'center'}
                    justifyContent={'space-around'}>
                    <Text
                      fontFamily={'Nunito'}
                      fontSize={16}
                      fontWeight={'500'}
                      color={bgColor.textBlack}>
                      Error
                    </Text>
                    <Text
                      fontFamily={'Nunito'}
                      fontSize={14}
                      fontWeight={'400'}
                      alignSelf={'center'}
                      color={bgColor.textBlack}>
                      That email address is already in use! {':)'}
                    </Text>
                  </Box>
                </Box>
              );
            },
            placement: 'top',
          });
          setLoading(false);
        }

        console.error(error);

        setLoading(false);
      });
  }
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView bounces={true} extraHeight={12} >
        {/* <KeyboardAwareScrollView style={{height: height}}> */}
        <Box bgColor={bgColor.background} width={width} height={height}>
          <Image
            source={require('../../assets/Images/SignUp.png')}
            alt="Alternate Text"
            style={{width: width, height: height / 2.5}}
          />
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={32}
            paddingBottom={3}
            marginX={10}
            color={bgColor.textDarkBlue}>
            SignUp
          </Text>
          <Box
            flexDirection={'row'}
            justifyContent={'center'}
            alignContent={'center'}>
            <Icon
              textAlign={'center'}
              top={3}
              marginX={5}
              fontWeight={'500'}
              as={<Octicons name="rocket" />}
              size={6}
              ml="3"
              color="muted.400"
            />
            <Input
              value={Email}
              variant="underlined"
              placeholder="Email ID"
              fontSize={14}
              width={width / 1.45}
              alignSelf={'center'}
              placeholderTextColor={bgColor.Icon}
              fontWeight={'500'}
              onChangeText={(text: any) => setEmail(text)}
            />
          </Box>
          <Box
            flexDirection={'row'}
            justifyContent={'center'}
            alignContent={'center'}
            top={4}>
            <Icon
              textAlign={'center'}
              top={3}
              marginX={5}
              fontWeight={'500'}
              as={<Octicons name="person" />}
              size={6}
              ml="3"
              color="muted.400"
            />
            <Input
              value={Name}
              variant="underlined"
              placeholder="Full name"
              maxLength={16}
              fontSize={14}
              width={width / 1.45}
              alignSelf={'center'}
              placeholderTextColor={bgColor.Icon}
              fontWeight={'500'}
              onChangeText={(text: any) => setName(text)}
            />
          </Box>
          <Box
            flexDirection={'row'}
            justifyContent={'center'}
            alignContent={'center'}
            marginTop={9}>
            <Icon
              textAlign={'center'}
              top={3}
              marginX={5}
              fontWeight={'500'}
              as={<Octicons name="shield-lock" />}
              size={6}
              ml="3"
              color="muted.400"
            />
            <Input
              value={Password}
              variant="underlined"
              placeholder="Password"
              maxLength={16}
              fontSize={14}
              width={width / 1.45}
              alignSelf={'center'}
              placeholderTextColor={bgColor.Icon}
              fontWeight={'500'}
              onChangeText={(text: any) => setPassword(text)}
            />
          </Box>
          <Box
            flexDirection={'row'}
            justifyContent={'center'}
            alignContent={'center'}
            marginTop={6}>
            <Icon
              textAlign={'center'}
              top={3}
              marginX={5}
              fontWeight={'500'}
              as={<Octicons name="camra" />}
              size={6}
              ml="3"
              color="muted.400"
            />
            <Input
              value={ProfileImage}
              variant="underlined"
              placeholder="Password"
              fontSize={14}
              width={width / 1.45}
              alignSelf={'center'}
              placeholderTextColor={bgColor.Icon}
              fontWeight={'500'}
              onChangeText={(text: any) => setProfileImage(text)}
            />
          </Box>
          <Text
            fontFamily={'Nunito'}
            fontSize={14}
            fontWeight={'400'}
            paddingLeft={47}
            marginTop={4}
            color={bgColor.textDarkBlue}>
            By signing up, you're agree to our
            <Text
              fontFamily={'Nunito'}
              fontSize={14}
              fontWeight={'700'}
              paddingLeft={47}
              color={bgColor.price2}>
              {' '}
              Terms & Conditions and Privacy Policy
            </Text>
          </Text>
          <Button
            bgColor={bgColor.forgot}
            alignSelf={'center'}
            width={width / 1.25}
            margin={8}
            borderRadius={15}
            onPress={() => handleSignIn()}
            p={3}>
            {!Loading ? (
              <Text
                fontFamily={'Nunito'}
                fontSize={16}
                fontWeight={'500'}
                color={bgColor.textWhite}>
                Continue
              </Text>
            ) : (
              <Box flexDirection={'row'}>
                <Text
                  fontFamily={'Nunito'}
                  fontSize={16}
                  fontWeight={'500'}
                  color={bgColor.textWhite}>
                  Submitting...{'   '}
                </Text>
                <Spinner color="white" size="sm" />
              </Box>
            )}
          </Button>

          <Box flexDirection={'row'} alignContent={'center'} p={2} mx={10}>
            <Text
              fontFamily={'Nunito'}
              fontSize={16}
              fontWeight={'500'}
              alignSelf={'center'}
              paddingLeft={47}
              color={bgColor.textDarkBlue}>
              Already a member ?
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontSize={16}
              fontWeight={'500'}
              alignSelf={'center'}
              paddingLeft={17}
              color={bgColor.forgot}>
              Login
            </Text>
          </Box>
        </Box>
        {/* </KeyboardAwareScrollView> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#ffff',
  },
  root: {
    flex: 1,
    backgroundColor: bgColor.background,
  },
});

export default SignUp;
