import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Button, Text} from 'native-base';
import color from '../../color/color';
import {useRoute} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

type Props = {};

const {width, height} = Dimensions.get('window');
const bgcolor = color.light;

interface VerifyCodeProps {}
const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 90;

const Otp = (propse: Props) => {
  let resendOtpTimerInterval: any;
  const route: any = useRoute();
  const user = auth().currentUser;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  };

  async function handleConfirm() {
    console.log('route', value);
    try {
      // auth().currentUser?.linkWithCredential
      const credential: any = await auth.PhoneAuthProvider.credential(
        route.params.otp._verificationId,
        value,
      );
      if (user !== null) {
        let userData = await user.linkWithCredential(credential);
        console.log('userData', userData);
      } else {
        console.log('error');
      }
    } catch (error: any) {
      if (error.code == 'auth/invalid-verification-code') {
        console.log('Invalid code.');
      } else {
        console.log('Account linking error', error);
        try {
          await route.params.otp.confirm(value)
          
        } catch (error) {
          console.log('Account linking Confirmation', error);
        }
      }
    }
  }

  //declarations for input field
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={require('../../assets/Images/EnterOTPpana.png')}
        style={{width: width, height: height / 3, alignSelf: 'center'}}
      />
      <Text
        fontFamily={'Nunito'}
        fontSize={19}
        fontWeight={'500'}
        style={styles.title}>
        Verify the Authorisation Code
      </Text>
      <Text fontFamily={'Nunito'} fontWeight={'500'} style={styles.subTitle}>
        Sent to 7687653902
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}): any => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'500'}
              style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      {/* View for resend otp  */}
      {resendButtonDisabledTime > 0 ? (
        <Text
          fontFamily={'Nunito'}
          fontWeight={'500'}
          style={styles.resendCodeText}>
          Resend Authorisation Code in {resendButtonDisabledTime} sec
        </Text>
      ) : (
        <TouchableOpacity onPress={onResendOtpButtonPress}>
          <View style={styles.resendCodeContainer}>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'500'}
              style={styles.resendCode}>
              {' '}
              Resend Authorisation Code
            </Text>
            <Text
              fontFamily={'Nunito'}
              fontWeight={'500'}
              style={{marginTop: 40, color: bgcolor.textDarkBlue}}>
              {' '}
              in {resendButtonDisabledTime} sec
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.button}>
        <Button
          m={8}
          shadow={5}
          w={width - 35}
          h={height / 17}
          alignSelf={'center'}
          onPress={() => handleConfirm()}
          bgColor={bgcolor.forgot}
          borderRadius={28}>
          <Text
            fontFamily={'Nunito'}
            fontWeight={'700'}
            fontSize={15}
            color={bgcolor.textWhite}>
            Submit
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: bgcolor.background,
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    marginStart: 20,
    fontWeight: 'bold',
    color: bgcolor.textDarkBlue,
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
    color: bgcolor.textDarkBlue,
  },
  codeFieldRoot: {
    marginTop: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: bgcolor.textDarkBlue,
    fontSize: 20,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },

  button: {
    marginTop: 20,
  },
  resendCode: {
    color: bgcolor.textDarkBlue,
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeText: {
    marginStart: 20,
    marginTop: 40,
    color: bgcolor.textDarkBlue,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Otp;
