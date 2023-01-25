import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from 'react-native';
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
  useToast,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import color from '../../color/color';
import Octicons from 'react-native-vector-icons/Octicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '75488772544-4ebi6q5mob5rgl4go7jcs4i5o42vv7iu.apps.googleusercontent.com',
});
type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const Login = (props: Props) => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const [Email, setEmail] = useState('shekar6803@gmail.com');
  const [Password, setPassword] = useState('manju@1998');
  const [Loading, setLoading] = useState(false);
  const toast = useToast();

  function handleLogin() {
    setLoading(true);
    if (Email.length === 0 || Password.length === 0) {
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
              borderColor={bgcolor.error}
              flexDirection={'row'}
              backgroundColor={bgcolor.ErrorToastBox}>
              <Image
                source={require('../../assets/Images/checkmark.png')}
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
                  color={bgcolor.textBlack}>
                  Error
                </Text>
                <Text
                  fontFamily={'Nunito'}
                  fontSize={14}
                  fontWeight={'400'}
                  alignSelf={'center'}
                  color={bgcolor.textBlack}>
                  {' Please enter all the fields :)'}
                </Text>
              </Box>
            </Box>
          );
        },
        placement: 'top',
      });
      setLoading(false);
    } else {
      auth()
        .signInWithEmailAndPassword(Email, Password)
        .then((res: any) => {
          console.log('res', res.user.metadata)
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
                  borderColor={bgcolor.available}
                  flexDirection={'row'}
                  backgroundColor={bgcolor.AvailableToastBox}>
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
                  <Box
                    px={5}
                    alignSelf={'center'}
                    justifyContent={'space-around'}>
                    <Text
                      fontFamily={'Nunito'}
                      fontSize={16}
                      fontWeight={'500'}
                      color={bgcolor.textBlack}>
                      Success
                    </Text>
                    <Text
                      fontFamily={'Nunito'}
                      fontSize={14}
                      fontWeight={'400'}
                      alignSelf={'center'}
                      color={bgcolor.textBlack}>
                      {'Welcome back'}
                    </Text>
                  </Box>
                </Box>
              );
            },
            placement: 'top',
          });
          setTimeout(() => {
            navigation.replace('Home')
          }, 2000);
        })
        .catch((err: any) => {
          console.log('err', err);
          setLoading(false);
          if (err.code === 'auth/wrong-password') {
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
                    borderColor={bgcolor.error}
                    flexDirection={'row'}
                    backgroundColor={bgcolor.ErrorToastBox}>
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
                    <Box
                      px={5}
                      alignSelf={'center'}
                      justifyContent={'space-around'}>
                      <Text
                        fontFamily={'Nunito'}
                        fontSize={16}
                        fontWeight={'500'}
                        color={bgcolor.textBlack}>
                        Error
                      </Text>
                      <Text
                        fontFamily={'Nunito'}
                        fontSize={14}
                        fontWeight={'400'}
                        alignSelf={'center'}
                        color={bgcolor.textBlack}>
                        {'Please enter proper credientials!'}
                      </Text>
                    </Box>
                  </Box>
                );
              },
              placement: 'top',
            });
          } else if (err.code === 'auth/user-not-found') {
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
                    borderColor={bgcolor.error}
                    flexDirection={'row'}
                    backgroundColor={bgcolor.ErrorToastBox}>
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
                    <Box
                      px={5}
                      alignSelf={'center'}
                      justifyContent={'space-around'}>
                      <Text
                        fontFamily={'Nunito'}
                        fontSize={16}
                        fontWeight={'500'}
                        color={bgcolor.textBlack}>
                        Error
                      </Text>
                      <Text
                        fontFamily={'Nunito'}
                        fontSize={14}
                        fontWeight={'400'}
                        alignSelf={'center'}
                        color={bgcolor.textBlack}>
                        {'Please enter proper credientials!'}
                      </Text>
                    </Box>
                  </Box>
                );
              },
              placement: 'top',
            });
          } else if (err.code === 'auth/network-request-failed') {
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
                    borderColor={bgcolor.error}
                    flexDirection={'row'}
                    backgroundColor={bgcolor.ErrorToastBox}>
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
                    <Box
                      px={5}
                      alignSelf={'center'}
                      justifyContent={'space-around'}>
                      <Text
                        fontFamily={'Nunito'}
                        fontSize={16}
                        fontWeight={'500'}
                        color={bgcolor.textBlack}>
                        Error
                      </Text>
                      <Text
                        fontFamily={'Nunito'}
                        fontSize={14}
                        fontWeight={'400'}
                        alignSelf={'center'}
                        color={bgcolor.textBlack}>
                        {'Check your network and try again!'}
                      </Text>
                    </Box>
                  </Box>
                );
              },
              placement: 'top',
            });
          }
        });
    }
  }

  async function GoogleLogin() {
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const result = await auth().signInWithCredential(googleCredential);
    console.log('result', result);
  }
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView style={{height: height}}>
        <Box bgColor={bgcolor.background} width={width} height={height}>
          <Image
            source={require('../../assets/Images/Login.png')}
            alt="Alternate Text"
            style={{width: width, height: height / 3, top: -20}}
          />
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={32}
            paddingBottom={3}
            marginX={10}
            color={bgcolor.textDarkBlue}>
            Login
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
              placeholderTextColor={bgcolor.Icon}
              fontWeight={'500'}
              onChangeText={(text: any) => setEmail(text)}
            />
          </Box>

          <Box
            flexDirection={'row'}
            justifyContent={'center'}
            alignContent={'center'}
            marginTop={4}>
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
              InputRightElement={
                <TouchableOpacity
                  onPress={() => navigation.navigate('ResetEmail')}>
                  <Text
                    fontFamily={'Nunito'}
                    fontWeight={'700'}
                    color={bgcolor.forgot}>
                    Forgot?
                  </Text>
                </TouchableOpacity>
              }
              maxLength={16}
              fontSize={14}
              width={width / 1.45}
              alignSelf={'center'}
              placeholderTextColor={bgcolor.Icon}
              set
              fontWeight={'500'}
              onChangeText={(text: any) => setPassword(text)}
            />
          </Box>
          <Button
            bgColor={bgcolor.forgot}
            alignSelf={'center'}
            width={width / 1.25}
            margin={8}
            borderRadius={15}
            onPress={() => handleLogin()}
            p={3}>
            {!Loading ? (
              <Text
                fontFamily={'Nunito'}
                fontSize={16}
                fontWeight={'500'}
                color={bgcolor.textWhite}>
                Login
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
            justifyContent={'space-around'}
            alignContent={'center'}
            px={8}>
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
              left={-6}
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
          <TouchableOpacity onPress={() => GoogleLogin()}>
            <Box
              flexDirection={'row'}
              alignContent={'center'}
              marginTop={7}
              borderRadius={15}
              p={2}
              mx={10}
              bgColor={bgcolor.loginGoogleBackground}>
              <Image
                alignSelf={'center'}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png',
                }}
                alt="Alternate Text"
                size="xs"
              />
              <Text
                fontFamily={'Nunito'}
                fontSize={16}
                fontWeight={'500'}
                alignSelf={'center'}
                paddingLeft={47}
                color={bgcolor.textDarkBlue}>
                Login with Google
              </Text>
            </Box>
          </TouchableOpacity>

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
            <TouchableOpacity onPress={() => {
              navigation.navigate('SignUp')
              Keyboard.dismiss()
              }}>
              <Text
                fontFamily={'Nunito'}
                fontSize={16}
                fontWeight={'500'}
                alignSelf={'center'}
                paddingLeft={17}
                color={bgcolor.forgot}>
                Register
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
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
    backgroundColor: bgcolor.background,
  },
});

export default Login;
