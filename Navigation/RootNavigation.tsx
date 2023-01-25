import * as React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import Homescreen from '../screens/Home/Homescreen';
import color from '../color/color';
import InitialScreen from '../screens/Auth/InitialScreen';
import PhoneNumber from '../screens/Auth/PhoneNumber';
import PhoneVerification from '../screens/Auth/PhoneVerification';
import Otp from '../screens/Auth/Otp';
import Home from '../screens/Chat/Home';
import ResetEmail from '../screens/Auth/ResetEmail';
import ResetConfirm from '../screens/Auth/ResetConfirm';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import contactScreen from '../screens/contacts/contactScreen';
import { CameraScreen } from '../screens/Chat/CameraScreen';

const Stack = createNativeStackNavigator();
const bgColor = color.light;

function RootNavigation() {
  const navigation: any = useNavigation();
  const [LoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   async function func() {
  //     await auth().onAuthStateChanged(userAuth => {
  //       if (userAuth) {
  //         navigation.replace('Home')
  //       }
  //     });
  //   }
  //   func();
  // }, []);
  return (
    <Stack.Navigator initialRouteName={LoggedIn ? 'Home' : 'InitialScreen'}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTintColor: bgColor.background,
          headerStyle: {backgroundColor: bgColor.background},
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="Homescreen"
        options={{
          headerShown: false,
        }}
        component={Homescreen}
      />
      <Stack.Screen
        name="InitialScreen"
        options={{
          headerShown: false,
        }}
        component={InitialScreen}
      />
      <Stack.Screen
        name="PhoneVerification"
        options={{
          headerShown: false,
        }}
        component={PhoneVerification}
      />
      <Stack.Screen
        name="Otp"
        options={{
          headerShown: false,
        }}
        component={Otp}
      />
      <Stack.Screen
        name="CameraScreen"
        options={{
          headerShadowVisible: false,
          headerTintColor: bgColor.background,
          headerStyle: {backgroundColor: bgColor.background},
        }}
        component={CameraScreen}
      />
      <Stack.Screen
        name="ResetEmail"
        options={{
          headerShadowVisible: false,
          headerRight: () => (
            <Icon
              style={{margin: 10}}
              name="lock-reset"
              size={30}
              color={bgColor.textDarkBlue}
            />
          ),
          headerLeft: () => (
            <MaterialIcons
              style={{margin: 10}}
              name="arrow-back-ios"
              size={25}
              color={bgColor.textDarkBlue}
            />
          ),
        }}
        component={ResetEmail}
      />
      <Stack.Screen
        name="ResetConfirm"
        options={{
          headerShown: false,
        }}
        component={ResetConfirm}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
