import {
  View,
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Box, Button, Icon, Input, Spinner, Text} from 'native-base';
import color from '../../color/color';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {};
const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

const ResetEmail = (props: Props) => {
  const [Email, setEmail] = useState('');
  const [Loading, setLoading] = useState(false);
  const navigation: any = useNavigation();

  function handleLogin() {
    setLoading(true);
    // auth()
    //   .sendPasswordResetEmail(Email)
    //   .then((res: any) => {
    //     setLoading(false);
    //     console.log('res', res);
    //   })
    //   .catch((err: any) => console.log('err', err));
    navigation.navigate('ResetConfirm');
  }

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView style={{height: height}}>
        <Box
          bgColor={bgcolor.background}
          flex={1}
          width={width}
          height={height}>
          <Image
            source={require('../../assets/Images/ResetEmail.png')}
            style={{
              width: width - 50,
              height: height / 2.7,
              alignSelf: 'center',
              marginHorizontal: 7,
            }}
          />
          <Text
            // fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={30}
            paddingBottom={3}
            marginX={5}
            color={bgcolor.textDarkBlue}>
            Reset password
          </Text>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'400'}
            fontSize={15}
            paddingBottom={3}
            marginX={5}
            color={bgcolor.textDarkBlue}>
            Enter the email associated with your account and we'll send an email
            with instrunction to reset your password.
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
              as={<Entypo name="email" />}
              size={6}
              ml="3"
              color="muted.400"
            />
            <Input
              value={Email}
              variant="underlined"
              placeholder="Email ID"
              fontSize={14}
              width={width / 1.35}
              marginRight={10}
              alignSelf={'center'}
              placeholderTextColor={bgcolor.Icon}
              fontWeight={'700'}
              onChangeText={(text: any) => setEmail(text)}
            />
          </Box>
          <Button
            bgColor={bgcolor.forgot}
            alignSelf={'center'}
            width={width / 1.15}
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
                Submit
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
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: bgcolor.background,
  },
});

export default ResetEmail;
